export class GameEngine {
    constructor(vocabulary) {
        this.vocabulary = vocabulary;
        this.reset();
    }

    reset() {
        this.matches = 0;
        this.totalPairs = this.vocabulary.length;
        this.startTime = null;
        this.elapsedTime = 0;
        this.timerInterval = null;
        this.selectedEnglishId = null;
        this.selectedSpanishId = null;
        this.matchedIds = new Set();
        this.accuracy = { attempts: 0, successes: 0 };
    }

    startTimer(callback) {
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
            callback(this.formatTime(this.elapsedTime));
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timerInterval);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

    selectEnglish(id) {
        this.selectedEnglishId = id;
        return this.checkMatch();
    }

    selectSpanish(id) {
        this.selectedSpanishId = id;
        return this.checkMatch();
    }

    checkMatch() {
        if (this.selectedEnglishId && this.selectedSpanishId) {
            this.accuracy.attempts++;
            const isMatch = this.selectedEnglishId === this.selectedSpanishId;
            
            if (isMatch) {
                this.accuracy.successes++;
                this.matchedIds.add(this.selectedEnglishId);
                this.matches++;
                this.clearSelection();
                return { isMatch: true, id: this.selectedEnglishId };
            } else {
                this.clearSelection();
                return { isMatch: false };
            }
        }
        return null;
    }

    clearSelection() {
        this.selectedEnglishId = null;
        this.selectedSpanishId = null;
    }

    isGameOver() {
        return this.matches === this.totalPairs;
    }

    calculateXP() {
        // Base XP per match + speed bonus + accuracy bonus
        const baseXP = this.matches * 10;
        const speedBonus = Math.max(0, 500 - this.elapsedTime);
        const accuracyRate = this.accuracy.successes / this.accuracy.attempts;
        const accuracyBonus = Math.floor(accuracyRate * 200);
        return baseXP + speedBonus + accuracyBonus;
    }
}
