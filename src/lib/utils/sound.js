import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

export const muted = writable(false);

class SoundManager {
    constructor() {
        this.ctx = null;
        this.gainNode = null;
    }

    init() {
        if (!browser) return;
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.gainNode = this.ctx.createGain();
            this.gainNode.connect(this.ctx.destination);
        } else if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    play(type) {
        if (!browser || get(muted)) return;
        if (!this.ctx) this.init();
        if (!this.ctx) return; // Still failed to init?

        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        switch (type) {
            case 'click':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, t);
                osc.frequency.exponentialRampToValueAtTime(400, t + 0.1);
                gain.gain.setValueAtTime(0.1, t);
                gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
                osc.start(t);
                osc.stop(t + 0.1);
                break;

            case 'select':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(440, t);
                gain.gain.setValueAtTime(0.05, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
                osc.start(t);
                osc.stop(t + 0.05);
                break;

            case 'match':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, t);
                osc.frequency.exponentialRampToValueAtTime(1200, t + 0.1);
                gain.gain.setValueAtTime(0.1, t);
                gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
                osc.start(t);
                osc.stop(t + 0.15);
                break;

            case 'success':
                // Major arpeggio
                this.playTone(523.25, t, 0.1, 'sine'); // C5
                this.playTone(659.25, t + 0.1, 0.1, 'sine'); // E5
                this.playTone(783.99, t + 0.2, 0.2, 'sine'); // G5
                break;

            case 'error':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(200, t);
                osc.frequency.linearRampToValueAtTime(100, t + 0.2);
                gain.gain.setValueAtTime(0.1, t);
                gain.gain.linearRampToValueAtTime(0.01, t + 0.2);
                osc.start(t);
                osc.stop(t + 0.2);
                break;

            case 'complete':
                // Fanfare
                const now = t;
                this.playTone(523.25, now, 0.15, 'square', 0.1);
                this.playTone(523.25, now + 0.15, 0.15, 'square', 0.1);
                this.playTone(523.25, now + 0.3, 0.15, 'square', 0.1);
                this.playTone(659.25, now + 0.5, 0.4, 'square', 0.1); // E5
                break;
        }
    }

    playTone(freq, time, duration, type = 'sine', volume = 0.1) {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = type;
        osc.frequency.setValueAtTime(freq, time);

        gain.gain.setValueAtTime(volume, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + duration);

        osc.start(time);
        osc.stop(time + duration);
    }

    toggleMute() {
        muted.update(m => !m);
    }
}

export const sound = new SoundManager();
