(function () {
    let socket = null;
    let currentRoom = null;
    let isLocalHost = false;

    function connect() {
        if (typeof io === 'undefined') {
            console.error('[TC] io tanımsız');
            return;
        }
        socket = io('http://localhost:3000');

        socket.on('connect', () => {
            console.log('[TC] ✅ Bağlandı:', socket.id);
            setStatus('✅ Sunucuya bağlandı!', 'ok');
        });

        socket.on('connect_error', (err) => {
            console.error('[TC] ❌ Bağlantı hatası:', err.message);
            setStatus('❌ Sunucuya bağlanılamadı. http://localhost:3000 açık mı?', 'error');
        });

        socket.on('disconnect', () => {
            setStatus('⚠️ Bağlantı kesildi.', 'error');
        });

        socket.on('room_created', (data) => {
            console.log('[TC] room_created', data);
            currentRoom = data.room;
            isLocalHost = true;
            resetLobbyBtns();
            openRoomLobbyView(data.roomCode, data.targetScore, true);
            renderPlayers(data.room.players);
        });

        socket.on('room_joined', (data) => {
            console.log('[TC] room_joined', data);
            currentRoom = data.room;
            isLocalHost = false;
            resetLobbyBtns();
            openRoomLobbyView(data.roomCode, data.targetScore, false);
            renderPlayers(data.room.players);
        });

        socket.on('room_updated', (room) => {
            currentRoom = room;
            renderPlayers(room.players);
        });

        socket.on('error_msg', (msg) => {
            setStatus('❌ ' + msg, 'error');
            resetLobbyBtns();
        });

        socket.on('round_started', (data) => {
            console.log('[TC] round_started', data);
            closeAllModals();

            if (window.TimeClickGame) {
                window.TimeClickGame.startOnlineRound(
                    data.secretDuration,
                    data.gameMode || 2,
                    (playerTime) => {
                        socket.emit('submit_attempt', { playerTime });
                    }
                );
            }
        });

        socket.on('next_round_tick', (data) => {
            const lblCountdown = document.getElementById('lblCountdownText');
            const progressBar = document.getElementById('nextRoundProgressBar');
            if (lblCountdown) {
                lblCountdown.innerHTML = `⏳ Sonraki round <strong>${data.countdown}</strong> saniye içinde başlıyor...`;
            }
            if (progressBar) {
                progressBar.style.width = `${(data.countdown / 5) * 100}%`;
            }
        });

        socket.on('round_results', (data) => {
            console.log('[TC] round_results', data);
            currentRoom = data.room;

            renderRoundResults(data);

            if (data.matchWinner) {
                setTimeout(() => {
                    closeAllModals();
                    renderMatchWinner(data.matchWinner, data.room);
                }, 1500);
            }
        });

        socket.on('match_restarted', (room) => {
            currentRoom = room;
            closeAllModals();
            openRoomLobbyView(room.code, room.targetScore, isLocalHost);
            renderPlayers(room.players);
        });
    }

    window.addEventListener('load', () => {
        if (typeof io !== 'undefined') {
            connect();
        } else {
            setTimeout(() => {
                if (typeof io !== 'undefined') connect();
            }, 800);
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const q = id => document.getElementById(id);

        q('btnLobbyOpen').addEventListener('click', () => {
            q('onlineLobbyModal').classList.add('active');
        });

        q('btnCloseLobby').addEventListener('click', () => {
            q('onlineLobbyModal').classList.remove('active');
        });

        q('btnCreateRoom').addEventListener('click', () => {
            if (!socket || !socket.connected) {
                setStatus('❌ Sunucu bağlantısı yok. http://localhost:3000 adresini kullanın.', 'error');
                return;
            }
            const nickname    = q('inputNickname').value.trim() || 'Oyuncu 1';
            const targetScore = parseInt(q('selectTargetScore').value) || 3;
            const gameMode    = parseInt(q('selectGameMode').value) || 2;

            q('btnCreateRoom').disabled = true;
            q('btnCreateRoom').innerHTML = '<span class="btn-spinner"></span> Oluşturuluyor...';

            socket.emit('create_room', { nickname, targetScore, gameMode });
        });

        q('btnJoinRoom').addEventListener('click', () => {
            if (!socket || !socket.connected) {
                setStatus('❌ Sunucu bağlantısı yok.', 'error');
                return;
            }
            const nickname = q('inputNickname').value.trim() || 'Oyuncu 2';
            const roomCode = q('inputJoinCode').value.trim().toUpperCase();

            if (!roomCode) { setStatus('Lütfen bir oda kodu girin!', 'error'); return; }

            q('btnJoinRoom').disabled = true;
            q('btnJoinRoom').innerHTML = '<span class="btn-spinner"></span> Katılınıyor...';

            socket.emit('join_room', { nickname, roomCode });
        });

        q('btnHostStartRound').addEventListener('click', () => {
            if (socket) socket.emit('start_round');
        });

        if (q('btnHostForceNextRound')) {
            q('btnHostForceNextRound').addEventListener('click', () => {
                if (socket) socket.emit('start_round');
            });
        }

        q('btnCopyRoomCode').addEventListener('click', () => {
            if (!currentRoom) return;
            navigator.clipboard.writeText(currentRoom.code).then(() => {
                const btn = q('btnCopyRoomCode');
                const orig = btn.textContent;
                btn.textContent = '✅ Kopyalandı!';
                setTimeout(() => btn.textContent = orig, 1500);
            });
        });

        q('btnLeaveRoom').addEventListener('click', () => {
            if (confirm('Odadan ayrılmak istiyor musunuz?')) location.reload();
        });

        q('btnRestartMatch').addEventListener('click', () => {
            if (socket) socket.emit('restart_match');
        });

        q('btnCloseWinnerModal').addEventListener('click', () => {
            q('winnerOverlay').classList.remove('active');
        });
    });

    function setStatus(msg, type) {
        const el = document.getElementById('lobbyStatus');
        if (!el) return;
        el.textContent = msg;
        el.className = 'lobby-status ' + (type || '');
        el.style.display = 'block';
    }

    function resetLobbyBtns() {
        const c = document.getElementById('btnCreateRoom');
        const j = document.getElementById('btnJoinRoom');
        if (c) { c.disabled = false; c.innerHTML = '🎮 Oda Oluştur'; }
        if (j) { j.disabled = false; j.innerHTML = '🚀 Katıl'; }
    }

    function closeAllModals() {
        ['onlineLobbyModal', 'onlineRoomCard', 'onlineRoundResultModal', 'winnerOverlay'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('active');
        });
    }

    function openRoomLobbyView(code, targetScore, isHost) {
        document.getElementById('txtRoomCode').textContent = code;
        document.getElementById('txtTargetScoreBadge').textContent = `İlk ${targetScore} Puana Ulaşan Kazanır`;
        document.getElementById('btnHostStartRound').style.display = isHost ? 'flex' : 'none';
        
        closeAllModals();
        document.getElementById('onlineRoomCard').classList.add('active');
    }

    function renderPlayers(players) {
        const list = document.getElementById('onlinePlayersList');
        if (!list) return;
        list.innerHTML = '';
        players.forEach(p => {
            const isMe = socket && p.id === socket.id;
            const div = document.createElement('div');
            div.className = `player-card ${p.isHost ? 'host' : ''} ${isMe ? 'me' : ''}`;

            div.innerHTML = `
                <div class="player-left">
                    <span class="player-crown">${p.isHost ? '👑' : '👤'}</span>
                    <div class="player-details">
                        <span class="player-name">${p.name} ${isMe ? '<em>(sen)</em>' : ''}</span>
                        ${p.currentAttempt
                            ? `<span class="player-attempt">⏱ ${p.currentAttempt.time}s (%${p.currentAttempt.accuracy})</span>`
                            : `<span class="player-waiting">⏳ Hazır</span>`}
                    </div>
                </div>
                <div class="player-right">
                    <span class="score-circle">${p.score}</span>
                </div>
            `;
            list.appendChild(div);
        });
    }

    function renderRoundResults(data) {
        const modal = document.getElementById('onlineRoundResultModal');
        const lblRoundNum = document.getElementById('lblResultRoundNum');
        const lblWinnerBanner = document.getElementById('lblRoundWinnerBanner');
        const lblSecretTime = document.getElementById('lblSecretTimeVal');
        const vsGrid = document.getElementById('onlineComparisonList');
        const btnForceNext = document.getElementById('btnHostForceNextRound');
        const countdownBox = document.getElementById('nextRoundCountdownBox');

        lblRoundNum.textContent = `ROUND ${data.roundNumber} SONUCU`;
        lblWinnerBanner.textContent = `👑 ${data.roundWinnerName} Bu Raundu Kazandı! (+1 Puan)`;
        lblSecretTime.textContent = `${data.secretDuration.toFixed(2)}s`;

        if (btnForceNext) {
            btnForceNext.style.display = isLocalHost && !data.matchWinner ? 'flex' : 'none';
        }

        if (countdownBox) {
            countdownBox.style.display = data.matchWinner ? 'none' : 'flex';
        }

        vsGrid.innerHTML = '';
        data.room.players.forEach(p => {
            const isWinner = p.id === data.roundWinnerId;
            const isMe = socket && p.id === socket.id;
            const attempt = p.currentAttempt || { time: 0, diff: 0, accuracy: 0 };

            const card = document.createElement('div');
            card.className = `vs-player-card ${isWinner ? 'winner' : ''} ${isMe ? 'me' : ''}`;
            card.innerHTML = `
                <div class="vs-player-header">
                    <span class="player-crown">${isWinner ? '👑' : (p.isHost ? '⭐' : '👤')}</span>
                    <span class="vs-player-name">${p.name} ${isMe ? '<em>(sen)</em>' : ''}</span>
                </div>
                
                <div class="vs-time-big">${attempt.time.toFixed(2)}s</div>
                
                <div class="vs-stats-row">
                    Fark: <strong>${attempt.diff.toFixed(2)}s</strong> • <strong>%${attempt.accuracy}</strong>
                </div>

                <div class="vs-score-pill">
                    ${p.score} / ${data.targetScore} Puan
                </div>
            `;
            vsGrid.appendChild(card);
        });

        closeAllModals();
        modal.classList.add('active');
    }

    function renderMatchWinner(winner, room) {
        const overlay = document.getElementById('winnerOverlay');
        const txtName = document.getElementById('txtWinnerName');
        const txtSub = document.getElementById('txtWinnerSub');
        const scoreList = document.getElementById('finalScoreboardList');
        const btnRestart = document.getElementById('btnRestartMatch');

        txtName.textContent = `🏆 ${winner.name} ŞAMPİYON! 🏆`;
        txtSub.textContent = `Tebrikler! ${winner.score} Puana ulaşarak maçı kazandı!`;

        scoreList.innerHTML = '';
        room.players.forEach(p => {
            const div = document.createElement('div');
            div.className = 'player-card';
            div.innerHTML = `
                <div class="player-left">
                    <span class="player-crown">${p.id === winner.id ? '🏆' : '👤'}</span>
                    <span class="player-name">${p.name}</span>
                </div>
                <div class="player-right">
                    <span class="score-circle">${p.score} Puan</span>
                </div>
            `;
            scoreList.appendChild(div);
        });

        if (btnRestart) {
            btnRestart.style.display = isLocalHost ? 'flex' : 'none';
        }

        overlay.classList.add('active');

        if (window.TimeClickGame && window.TimeClickGame.launchConfetti) {
            window.TimeClickGame.launchConfetti();
        }
    }
})();
