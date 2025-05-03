class SoundManager {
    constructor() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.sounds = {};
        this.musicVolume = 0.5;
        this.effectsVolume = 0.7;
        
        // Create oscillators for different sounds
        this.createEngineSound();
        this.createExplosionSound();
        this.createVictorySound();
        this.createBackgroundSound();
    }

    createEngineSound() {
        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(100, this.context.currentTime);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);
        
        gainNode.gain.setValueAtTime(0, this.context.currentTime);
        
        oscillator.start();
        
        this.sounds.engine = {
            oscillator,
            gainNode,
            isPlaying: false
        };
    }

    createExplosionSound() {
        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(100, this.context.currentTime);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);
        
        gainNode.gain.setValueAtTime(0, this.context.currentTime);
        
        oscillator.start();
        
        this.sounds.explosion = {
            oscillator,
            gainNode,
            isPlaying: false
        };
    }

    createVictorySound() {
        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, this.context.currentTime);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);
        
        gainNode.gain.setValueAtTime(0, this.context.currentTime);
        
        oscillator.start();
        
        this.sounds.victory = {
            oscillator,
            gainNode,
            isPlaying: false
        };
    }

    createBackgroundSound() {
        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(220, this.context.currentTime);
        
        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);
        
        gainNode.gain.setValueAtTime(0, this.context.currentTime);
        
        oscillator.start();
        
        this.sounds.background = {
            oscillator,
            gainNode,
            isPlaying: false
        };
    }

    play(name, loop = false) {
        const sound = this.sounds[name];
        if (sound && !sound.isPlaying) {
            const volume = loop ? this.musicVolume : this.effectsVolume;
            sound.gainNode.gain.setValueAtTime(volume, this.context.currentTime);
            sound.isPlaying = true;

            if (!loop) {
                // For non-looping sounds, stop after 0.5 seconds
                setTimeout(() => {
                    this.stop(name);
                }, 500);
            }
        }
    }

    stop(name) {
        const sound = this.sounds[name];
        if (sound && sound.isPlaying) {
            sound.gainNode.gain.setValueAtTime(0, this.context.currentTime);
            sound.isPlaying = false;
        }
    }

    stopAll() {
        Object.keys(this.sounds).forEach(name => {
            this.stop(name);
        });
    }

    setMusicVolume(volume) {
        this.musicVolume = Math.max(0, Math.min(1, volume));
        Object.keys(this.sounds).forEach(name => {
            const sound = this.sounds[name];
            if (sound.isPlaying) {
                sound.gainNode.gain.setValueAtTime(this.musicVolume, this.context.currentTime);
            }
        });
    }

    setEffectsVolume(volume) {
        this.effectsVolume = Math.max(0, Math.min(1, volume));
    }
} 