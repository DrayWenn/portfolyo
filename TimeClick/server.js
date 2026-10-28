const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

const rooms = {};

function generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

function getRandomTime() {
    return parseFloat((Math.random() * 6.3 + 0.20).toFixed(2));
}

io.on('connection', (socket) => {
    console.log(`[ONLINE] İstemci bağlandı: ${socket.id}`);

    socket.on('create_room', ({ nickname, targetScore, gameMode }) => {
        const roomCode = generateRoomCode();
        const target = parseInt(targetScore) || 3;
        const mode = parseInt(gameMode) || 2; // 1: Text guess, 2: Button match

        rooms[roomCode] = {
            code: roomCode,
            targetScore: target,
            gameMode: mode,
            state: 'LOBBY',
            secretDuration: 0,
            roundNumber: 0,
            players: {},
            nextRoundTimer: null
        };

        const player = {
            id: socket.id,
            name: nickname || 'Oyuncu 1',
            score: 0,
            ready: true,
            isHost: true,
            currentAttempt: null
        };

        rooms[roomCode].players[socket.id] = player;
        socket.join(roomCode);
        socket.roomCode = roomCode;

        console.log(`[ROOM] Oda oluşturuldu: ${roomCode} | Hedef: ${target} | Mod: ${mode}`);

        socket.emit('room_created', {
            roomCode,
            targetScore: target,
            gameMode: mode,
            player,
            room: getRoomPublicData(rooms[roomCode])
        });
    });

    socket.on('join_room', ({ nickname, roomCode }) => {
        const code = (roomCode || '').toUpperCase().trim();
        const room = rooms[code];

        if (!room) {
            socket.emit('error_msg', 'Geçersiz Oda Kodu!');
            return;
        }

        if (Object.keys(room.players).length >= 4) {
            socket.emit('error_msg', 'Oda dolu! (Maksimum 4 oyuncu)');
            return;
        }

        if (room.state !== 'LOBBY' && room.state !== 'ROUND_RESULT' && room.state !== 'MATCH_OVER') {
            socket.emit('error_msg', 'Oynanan bir maç devam ediyor!');
            return;
        }

        const player = {
            id: socket.id,
            name: nickname || `Oyuncu ${Object.keys(room.players).length + 1}`,
            score: 0,
            ready: false,
            isHost: false,
            currentAttempt: null
        };

        room.players[socket.id] = player;
        socket.join(code);
        socket.roomCode = code;

        console.log(`[ROOM] ${player.name} (${code}) odasına katıldı.`);

        socket.emit('room_joined', {
            roomCode: code,
            targetScore: room.targetScore,
            gameMode: room.gameMode,
            player,
            room: getRoomPublicData(room)
        });

        io.to(code).emit('room_updated', getRoomPublicData(room));
    });

    socket.on('start_round', () => {
        const code = socket.roomCode;
        const room = rooms[code];
        if (!room) return;

        if (room.nextRoundTimer) {
            clearTimeout(room.nextRoundTimer);
            room.nextRoundTimer = null;
        }

        Object.values(room.players).forEach(p => {
            p.currentAttempt = null;
        });

        room.roundNumber += 1;
        room.secretDuration = getRandomTime();
        room.state = 'PLAYING_SYSTEM';

        console.log(`[ROUND] Oda ${code} Round ${room.roundNumber} Başladı | Gizli Süre: ${room.secretDuration}s`);

        io.to(code).emit('round_started', {
            roundNumber: room.roundNumber,
            secretDuration: room.secretDuration,
            targetScore: room.targetScore,
            gameMode: room.gameMode
        });
    });

    socket.on('restart_match', () => {
        const code = socket.roomCode;
        const room = rooms[code];
        if (!room) return;

        if (room.nextRoundTimer) {
            clearTimeout(room.nextRoundTimer);
            room.nextRoundTimer = null;
        }

        room.roundNumber = 0;
        room.state = 'LOBBY';
        Object.values(room.players).forEach(p => {
            p.score = 0;
            p.currentAttempt = null;
        });

        io.to(code).emit('match_restarted', getRoomPublicData(room));
    });

    socket.on('submit_attempt', ({ playerTime }) => {
        const code = socket.roomCode;
        const room = rooms[code];
        if (!room || !room.players[socket.id]) return;

        const timeVal = parseFloat(parseFloat(playerTime).toFixed(2));
        const diff = parseFloat(Math.abs(room.secretDuration - timeVal).toFixed(2));
        
        let accuracy = 100 - (diff / room.secretDuration) * 100;
        if (accuracy < 0) accuracy = 0;
        accuracy = Math.round(accuracy);

        room.players[socket.id].currentAttempt = {
            time: timeVal,
            diff: diff,
            accuracy: accuracy
        };

        console.log(`[SUBMIT] ${room.players[socket.id].name}: ${timeVal}s (%${accuracy})`);

        io.to(code).emit('player_submitted', {
            playerId: socket.id,
            name: room.players[socket.id].name
        });

        const allPlayers = Object.values(room.players);
        const allSubmitted = allPlayers.length > 0 && allPlayers.every(p => p.currentAttempt !== null);

        if (allSubmitted) {
            evaluateRoundWinner(room);
        }
    });

    function evaluateRoundWinner(room) {
        room.state = 'ROUND_RESULT';
        const playersList = Object.values(room.players);

        playersList.sort((a, b) => a.currentAttempt.diff - b.currentAttempt.diff);
        const roundWinner = playersList[0];
        roundWinner.score += 1; // Round kazananına +1 Puan!

        console.log(`[ROUND WINNER] Oda ${room.code} Round ${room.roundNumber} Kazananı: ${roundWinner.name} (${roundWinner.score}/${room.targetScore})`);

        let matchWinner = null;
        if (roundWinner.score >= room.targetScore) {
            matchWinner = roundWinner;
            room.state = 'MATCH_OVER';
            console.log(`[MATCH CHAMPION] Oda ${room.code} ŞAMPİYONU: ${matchWinner.name}!`);
        }

        io.to(room.code).emit('round_results', {
            roundNumber: room.roundNumber,
            secretDuration: room.secretDuration,
            roundWinnerId: roundWinner.id,
            roundWinnerName: roundWinner.name,
            targetScore: room.targetScore,
            matchWinner: matchWinner ? { id: matchWinner.id, name: matchWinner.name, score: matchWinner.score } : null,
            room: getRoomPublicData(room)
        });

        if (!matchWinner) {
            let countdown = 5;
            const timerInterval = setInterval(() => {
                io.to(room.code).emit('next_round_tick', { countdown });
                countdown--;
                if (countdown < 0) {
                    clearInterval(timerInterval);
                    if (room.state === 'ROUND_RESULT') {

                        room.roundNumber += 1;
                        room.secretDuration = getRandomTime();
                        room.state = 'PLAYING_SYSTEM';
                        Object.values(room.players).forEach(p => { p.currentAttempt = null; });
                        
                        io.to(room.code).emit('round_started', {
                            roundNumber: room.roundNumber,
                            secretDuration: room.secretDuration,
                            targetScore: room.targetScore,
                            gameMode: room.gameMode
                        });
                    }
                }
            }, 1000);
        }
    }

    socket.on('disconnect', () => {
        const code = socket.roomCode;
        if (code && rooms[code]) {
            delete rooms[code].players[socket.id];
            console.log(`[ONLINE] ${socket.id} ayrıldı.`);
            if (Object.keys(rooms[code].players).length === 0) {
                if (rooms[code].nextRoundTimer) clearTimeout(rooms[code].nextRoundTimer);
                delete rooms[code];
                console.log(`[ROOM] Oda ${code} silindi.`);
            } else {
                io.to(code).emit('room_updated', getRoomPublicData(rooms[code]));
            }
        }
    });
});

function getRoomPublicData(room) {
    return {
        code: room.code,
        targetScore: room.targetScore,
        gameMode: room.gameMode,
        state: room.state,
        roundNumber: room.roundNumber,
        secretDuration: room.secretDuration,
        players: Object.values(room.players).map(p => ({
            id: p.id,
            name: p.name,
            score: p.score,
            ready: p.ready,
            isHost: p.isHost,
            currentAttempt: p.currentAttempt
        }))
    };
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`⏱️ TimeClick Online Sunucusu Başlatıldı!`);
    console.log(`🌐 Bağlantı Adresi: http://localhost:${PORT}`);
    console.log(`==========================================`);
});
