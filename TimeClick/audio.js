class SoundEngine {
    constructor() {

        this.startSound = new Audio('start.mp3');
        this.endSound = new Audio('end.mp3');

        this.startSound.preload = 'auto';
        this.endSound.preload = 'auto';

        this.startSound.volume = 1.0;
        this.endSound.volume = 1.0;

        this.startSound.addEventListener('error', () => {
            console.log('[AUDIO] start.mp3 bulunamadı, start.mp4 deneniyor...');
            this.startSound.src = 'start.mp4';
            this.startSound.load();
        });

        this.endSound.addEventListener('error', () => {
            console.log('[AUDIO] end.mp3 bulunamadı, end.mp4 deneniyor...');
            this.endSound.src = 'end.mp4';
            this.endSound.load();
        });
    }

    playStartSound() {
        try {
            this.startSound.pause();
            this.startSound.currentTime = 0;
            const promise = this.startSound.play();
            if (promise !== undefined) {
                promise.catch(err => {
                    console.warn('[AUDIO] start sesi çalınamadı:', err);

                    const clone = new Audio(this.startSound.src || 'start.mp3');
                    clone.volume = 1.0;
                    clone.play().catch(() => {});
                });
            }
        } catch (e) {
            console.error('[AUDIO] Hata:', e);
        }
    }

    playStopSound() {
        try {
            this.endSound.pause();
            this.endSound.currentTime = 0;
            const promise = this.endSound.play();
            if (promise !== undefined) {
                promise.catch(err => {
                    console.warn('[AUDIO] end sesi çalınamadı:', err);

                    const clone = new Audio(this.endSound.src || 'end.mp3');
                    clone.volume = 1.0;
                    clone.play().catch(() => {});
                });
            }
        } catch (e) {
            console.error('[AUDIO] Hata:', e);
        }
    }

    playResultSound(accuracy) {

    }
}

window.soundEngine = new SoundEngine();
