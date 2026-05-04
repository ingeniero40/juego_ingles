export class GameEngine {
    constructor(vocabulary) {
        this.vocabulary = vocabulary;
        this.reset();
    }

    reset() {
        this.hits = 0;
        this.misses = 0;
        this.helps = 3;
        this.totalPairs = this.vocabulary.length;
        this.startTime = null;
        this.elapsedTime = 0;
        this.timeLimit = 0; // 0 means infinite/count-up
        this.timerInterval = null;
        this.selectedEnglish = null; // { id, element }
        this.selectedSpanish = null; // { id, element }
        this.matchedIds = new Set();
        this.isProcessing = false;
    }

    startTimer(callback, onTimeUp) {
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            if (this.timeLimit > 0) {
                // Countdown Mode
                const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
                const remaining = this.timeLimit - elapsed;
                
                if (remaining <= 0) {
                    this.elapsedTime = this.timeLimit;
                    this.stopTimer();
                    callback(this.formatTime(0));
                    if (onTimeUp) onTimeUp();
                } else {
                    this.elapsedTime = elapsed;
                    callback(this.formatTime(remaining));
                }
            } else {
                // Count-up Mode
                this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
                callback(this.formatTime(this.elapsedTime));
            }
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

    canSelectEnglish() {
        return !this.isProcessing && !this.selectedEnglish;
    }

    canSelectSpanish() {
        return !this.isProcessing && !this.selectedSpanish;
    }

    selectEnglish(id, element) {
        if (!this.canSelectEnglish()) return null;
        this.selectedEnglish = { id, element };
        return this.checkMatch();
    }

    selectSpanish(id, element) {
        if (!this.canSelectSpanish()) return null;
        this.selectedSpanish = { id, element };
        return this.checkMatch();
    }

    checkMatch() {
        if (this.selectedEnglish && this.selectedSpanish) {
            this.isProcessing = true;
            const isMatch = this.selectedEnglish.id === this.selectedSpanish.id;
            
            if (isMatch) {
                this.hits++;
                this.matchedIds.add(this.selectedEnglish.id);
                const result = { 
                    isMatch: true, 
                    id: this.selectedEnglish.id,
                    elements: [this.selectedEnglish.element, this.selectedSpanish.element]
                };
                this.clearSelection();
                this.isProcessing = false;
                return result;
            } else {
                this.misses++;
                const result = { 
                    isMatch: false, 
                    elements: [this.selectedEnglish.element, this.selectedSpanish.element] 
                };
                this.clearSelection();
                // We keep isProcessing = true until the controller flips them back
                return result;
            }
        }
        return null; // Waiting for the second card
    }

    clearSelection() {
        this.selectedEnglish = null;
        this.selectedSpanish = null;
    }

    isGameOver() {
        return this.hits === this.totalPairs;
    }

    useHelp() {
        if (this.helps <= 0 || this.isProcessing) return null;
        
        let pairToHelp;
        if (this.selectedEnglish) {
            // Find the translation for the currently selected English card
            pairToHelp = this.vocabulary.find(v => v.id === this.selectedEnglish.id);
        } else {
            // Find a random pair that hasn't been matched yet
            const unmatched = this.vocabulary.filter(v => !this.matchedIds.has(v.id));
            if (unmatched.length === 0) return null;
            pairToHelp = unmatched[Math.floor(Math.random() * unmatched.length)];
        }

        if (pairToHelp) {
            this.helps--;
            return pairToHelp.id;
        }
        return null;
    }

    getAccuracy() {
        const total = this.hits + this.misses;
        return total === 0 ? 0 : Math.round((this.hits / total) * 100);
    }
}
