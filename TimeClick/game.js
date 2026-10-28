document.addEventListener('DOMContentLoaded', () => {
    const btnStart          = document.getElementById('btnStart');
    const startBtnIcon      = document.getElementById('startBtnIcon');
    const startBtnText      = document.getElementById('startBtnText');
    const btnSubmitGuess    = document.getElementById('btnSubmitGuess');
    const btnPlayerAction   = document.getElementById('btnPlayerAction');
    const btnNextRound      = document.getElementById('btnNextRound');
    const guessInput        = document.getElementById('guessInput');
    const statusMessage     = document.getElementById('statusMessage');
    const soundVisualizer   = document.getElementById('soundVisualizer');
    const tabMode1          = document.getElementById('tabMode1');
    const tabMode2          = document.getElementById('tabMode2');
    const playerActionIcon  = document.getElementById('playerActionIcon');
    const playerActionText  = document.getElementById('playerActionText');
    const lblUserStat       = document.getElementById('lblUserStat');
    const startSection      = document.getElementById('startSection');
    const playingSection    = document.getElementById('playingSection');
    const guessSectionMode1 = document.getElementById('guessSectionMode1');
    const guessSectionMode2 = document.getElementById('guessSectionMode2');
    const resultSection     = document.getElementById('resultSection');
    const resultRatingBadge = document.getElementById('resultRatingBadge');
    const resActualTime     = document.getElementById('resActualTime');
    const resUserGuess      = document.getElementById('resUserGuess');
    const resTimeDiff       = document.getElementById('resTimeDiff');
    const resAccuracyPercent= document.getElementById('resAccuracyPercent');
    const resAccuracyBar    = document.getElementById('resAccuracyBar');
    const statRounds        = document.getElementById('statRounds');
    const statBestAcc       = document.getElementById('statBestAcc');
    const quickGuessBtns    = document.querySelectorAll('.btn-quick');

    let currentMode         = 1;   // 1: Yazılı Tahmin, 2: Butonla Yakalama
    let isOnlineMatch       = false;
    let onlineSubmitCallback= null;
    let secretDuration      = 0;
    let startTime           = 0;
    let stopTimeout         = null;
    let actualPlayedTime    = 0;
    let mode2State          = 'IDLE'; // 'IDLE', 'RUNNING'
    let playerStartTime     = 0;
    let roundsPlayed        = parseInt(localStorage.getItem('tc_rounds') || '0');
    let bestAccuracy        = parseInt(localStorage.getItem('tc_best_acc') || '0');

    updateStatsDisplay();

    btnStart.addEventListener('click', startRound);
    btnSubmitGuess.addEventListener('click', handleMode1Submit);
    btnPlayerAction.addEventListener('click', handleMode2PlayerClick);
    btnNextRound.addEventListener('click', resetToStart);
    tabMode1.addEventListener('click', () => setGameMode(1));
    tabMode2.addEventListener('click', () => setGameMode(2));

    guessInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && currentMode === 1) handleMode1Submit();
    });

    quickGuessBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            guessInput.value = btn.getAttribute('data-val');
            guessInput.focus();
        });
    });

    function setGameMode(mode) {
        currentMode = mode;
        tabMode1.classList.toggle('active', mode === 1);
        tabMode2.classList.toggle('active', mode === 2);
        lblUserStat.textContent = mode === 1 ? 'Senin Tahminin' : 'Senin Süren';
        resetToStart();
    }

    function getRandomTime() {
        return parseFloat((Math.random() * 6.3 + 0.20).toFixed(2));
    }

    function startRound() {
        isOnlineMatch = false;
        secretDuration = getRandomTime();
        runSystemRound(secretDuration, currentMode);
    }

    function runSystemRound(duration, mode) {
        secretDuration = duration;
        switchSection(playingSection);
        statusMessage.textContent = '🔔 Sistem Süresi Çalıyor... Dikkatle Dinleyin!';
        soundVisualizer.classList.add('active');

        btnStart.classList.add('state-red');
        startBtnIcon.textContent = '⏹';
        startBtnText.textContent = 'ÇALIYOR...';

        window.soundEngine.playStartSound();
        startTime = performance.now();

        stopTimeout = setTimeout(() => {
            stopSoundAndPromptGuess(mode);
        }, secretDuration * 1000);
    }

    function stopSoundAndPromptGuess(mode) {
        const endTime = performance.now();
        actualPlayedTime = parseFloat(((endTime - startTime) / 1000).toFixed(2));

        window.soundEngine.playStopSound();
        soundVisualizer.classList.remove('active');

        btnStart.classList.remove('state-red');
        startBtnIcon.textContent = '▶';
        startBtnText.textContent = 'BAŞLAT';

        if (mode === 1) {
            statusMessage.textContent = '⏱️ Sistem Durdu! Süreyi klavyeden girin.';
            switchSection(guessSectionMode1);
            guessInput.value = '';
            setTimeout(() => guessInput.focus(), 100);
        } else {
            statusMessage.textContent = '🟢 Sıra sende! Yeşil butona basarak başlat ve aynı sürede durdur!';
            mode2State = 'IDLE';
            resetMode2ButtonUI();
            switchSection(guessSectionMode2);
        }
    }

    function handleMode1Submit() {
        const val = parseFloat(guessInput.value);
        if (isNaN(val) || val < 0) {
            alert('Lütfen geçerli bir saniye girin!');
            return;
        }
        const userGuess = parseFloat(val.toFixed(2));

        if (isOnlineMatch && onlineSubmitCallback) {
            onlineSubmitCallback(userGuess);
            statusMessage.textContent = '⏳ Tahmininiz Gönderildi! Diğer oyuncular bekleniyor...';
            switchSection(playingSection);
        } else {
            evaluateAndShowResults(actualPlayedTime, userGuess);
        }
    }

    function handleMode2PlayerClick() {
        if (mode2State === 'IDLE') {

            mode2State = 'RUNNING';
            playerStartTime = performance.now();
            window.soundEngine.playStartSound();

            btnPlayerAction.classList.add('state-red');
            playerActionIcon.textContent = '⏹';
            playerActionText.textContent = 'DURDUR!';
            statusMessage.textContent = '⏱️ Senin süren çalışıyor... Aynı sürede durdur!';
            soundVisualizer.classList.add('active');

        } else if (mode2State === 'RUNNING') {

            const playerDuration = parseFloat(
                ((performance.now() - playerStartTime) / 1000).toFixed(2)
            );
            window.soundEngine.playStopSound();
            soundVisualizer.classList.remove('active');
            resetMode2ButtonUI();

            if (isOnlineMatch && onlineSubmitCallback) {
                onlineSubmitCallback(playerDuration);
                statusMessage.textContent = '⏳ Süreniz Gönderildi! Diğer oyuncular bekleniyor...';
                switchSection(playingSection);
            } else {
                evaluateAndShowResults(actualPlayedTime, playerDuration);
            }
        }
    }

    function resetMode2ButtonUI() {
        mode2State = 'IDLE';
        btnPlayerAction.classList.remove('state-red');
        playerActionIcon.textContent = '▶';
        playerActionText.textContent = 'BAŞLAT';
    }

    function evaluateAndShowResults(actualTime, userTime) {
        const timeDiff = Math.abs(actualTime - userTime);
        let accuracy = Math.round(Math.max(0, 100 - (timeDiff / actualTime) * 100));

        resActualTime.textContent      = `${actualTime.toFixed(2)}s`;
        resUserGuess.textContent       = `${userTime.toFixed(2)}s`;
        resTimeDiff.textContent        = `${timeDiff.toFixed(2)}s`;
        resAccuracyPercent.textContent = `%${accuracy}`;
        resAccuracyBar.style.width     = `${accuracy}%`;

        let ratingText = '';
        let ratingColor = '#10b981';
        let ratingBg    = 'rgba(16, 185, 129, 0.2)';

        if (accuracy === 100) {
            ratingText  = '🏆 %100 TAM İSABET!';
            ratingColor = '#f59e0b';
            ratingBg    = 'rgba(245, 158, 11, 0.2)';
            launchConfetti();
        } else if (accuracy >= 95) {
            ratingText = '🎯 EFSANEVİ!';
        } else if (accuracy >= 85) {
            ratingText = '🌟 MÜKEMMEL!';
        } else if (accuracy >= 70) {
            ratingText = '👍 HARİKA!';
        } else if (accuracy >= 50) {
            ratingText  = '🙂 İYİ!';
            ratingColor = '#f59e0b';
            ratingBg    = 'rgba(245, 158, 11, 0.2)';
        } else {
            ratingText  = '🙈 UZAK KALDIN!';
            ratingColor = '#ef4444';
            ratingBg    = 'rgba(239, 68, 68, 0.2)';
        }

        resultRatingBadge.textContent       = ratingText;
        resultRatingBadge.style.color       = ratingColor;
        resultRatingBadge.style.borderColor = ratingColor;
        resultRatingBadge.style.backgroundColor = ratingBg;

        roundsPlayed++;
        if (accuracy > bestAccuracy) bestAccuracy = accuracy;
        localStorage.setItem('tc_rounds', roundsPlayed.toString());
        localStorage.setItem('tc_best_acc', bestAccuracy.toString());
        updateStatsDisplay();

        statusMessage.textContent = 'Sonucunuz Hesaplandı!';
        switchSection(resultSection);
    }

    function launchConfetti() {
        const canvas = document.getElementById('confettiCanvas');
        if (!canvas) return;
        canvas.style.display = 'block';
        const ctx = canvas.getContext('2d');
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        const pieces = [];
        const colors = ['#10b981', '#34d399', '#f59e0b', '#3b82f6', '#ec4899', '#a855f7'];

        for (let i = 0; i < 90; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * -canvas.height,
                w: Math.random() * 8 + 4,
                h: Math.random() * 5 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                r: Math.random() * Math.PI * 2,
                rSpeed: (Math.random() - 0.5) * 0.15,
                vy: Math.random() * 2.5 + 1.5,
                vx: (Math.random() - 0.5) * 1.5,
            });
        }

        let frame;
        let elapsed = 0;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            elapsed++;
            pieces.forEach(p => {
                p.y += p.vy;
                p.x += p.vx;
                p.r += p.rSpeed;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.r);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0, 1 - elapsed / 160);
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            });

            if (elapsed < 160) {
                frame = requestAnimationFrame(draw);
            } else {
                canvas.style.display = 'none';
                cancelAnimationFrame(frame);
            }
        }
        draw();
    }

    function resetToStart() {
        if (stopTimeout) { clearTimeout(stopTimeout); stopTimeout = null; }
        btnStart.classList.remove('state-red');
        startBtnIcon.textContent = '▶';
        startBtnText.textContent = 'BAŞLAT';
        resetMode2ButtonUI();
        switchSection(startSection);
        statusMessage.textContent = 'Oyuna başlamak için yeşil butona tıklayın!';
    }

    function switchSection(target) {
        [startSection, playingSection, guessSectionMode1, guessSectionMode2, resultSection]
            .forEach(s => s.classList.remove('active'));
        target.classList.add('active');
    }

    function updateStatsDisplay() {
        statRounds.textContent  = roundsPlayed;
        statBestAcc.textContent = `%${bestAccuracy}`;
    }

    window.TimeClickGame = {
        startOnlineRound(duration, mode, onSubmit) {
            isOnlineMatch        = true;
            onlineSubmitCallback = onSubmit;
            currentMode          = mode;

            tabMode1.classList.toggle('active', mode === 1);
            tabMode2.classList.toggle('active', mode === 2);
            lblUserStat.textContent = mode === 1 ? 'Senin Tahminin' : 'Senin Süren';

            runSystemRound(duration, mode);
        },
        launchConfetti: launchConfetti
    };
});
