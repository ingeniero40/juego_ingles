import { vocabulary } from './src/infrastructure/vocabulary.js';
import { GameEngine } from './src/domain/GameEngine.js';
import { renderGrid, setTileFlipped, setTileMatched, setTileMismatch } from './src/presentation/components/GameGrid.js';

// State
const engine = new GameEngine(vocabulary);

// DOM Elements
const timerDisplay = document.getElementById('timer-display');
const hitsDisplay = document.getElementById('hits-display');
const missesDisplay = document.getElementById('misses-display');
const helpsDisplay = document.getElementById('helps-display');
const helpBtn = document.getElementById('help-btn');
const startOverlay = document.getElementById('start-overlay');
const timeOptions = document.querySelectorAll('.time-opt');
const resultOverlay = document.getElementById('result-overlay');
const playAgainBtn = document.getElementById('play-again');

function init() {
    engine.reset();
    renderGrid('english-board', vocabulary, 'en', handleTileClick, false);
    renderGrid('spanish-board', vocabulary, 'es', handleTileClick, true);
    updateDisplays();
    
    timerDisplay.textContent = '00:00';
    resultOverlay.classList.remove('active');
    startOverlay.classList.remove('hidden');
}

function startGame(seconds) {
    engine.timeLimit = seconds;
    startOverlay.classList.add('hidden');
    
    engine.startTimer(
        time => timerDisplay.textContent = time,
        () => endGame(true) // onTimeUp
    );
}

function handleTileClick(id, lang, element) {
    if (engine.isProcessing) return;

    if (lang === 'en') {
        if (!engine.canSelectEnglish()) return;
        element.classList.add('selected');
        setTileFlipped(element, true);
        const result = engine.selectEnglish(id, element);
        if (result) handleMatchResult(result);
    } else {
        if (!engine.canSelectSpanish()) return;
        element.classList.add('selected');
        // Spanish cards are already flipped (visible), so we just mark them selected
        const result = engine.selectSpanish(id, element);
        if (result) handleMatchResult(result);
    }
}

function handleMatchResult(result) {
    if (result.isMatch) {
        result.elements.forEach(el => {
            el.classList.remove('selected');
            setTileMatched(el);
        });
        updateDisplays();
        
        if (engine.isGameOver()) {
            setTimeout(endGame, 500);
        }
    } else {
        // Mismatch: show red border, then flip back
        result.elements.forEach(el => {
            el.classList.remove('selected');
            setTileMismatch(el, true);
        });
        updateDisplays();

        setTimeout(() => {
            result.elements.forEach(el => {
                // Only flip back English cards
                if (el.dataset.lang === 'en') {
                    setTileFlipped(el, false);
                }
                setTileMismatch(el, false);
            });
            engine.isProcessing = false;
        }, 1000);
    }
}

function updateDisplays() {
    hitsDisplay.textContent = `Hits: ${engine.hits}`;
    missesDisplay.textContent = `Misses: ${engine.misses}`;
    helpsDisplay.textContent = `Helps: ${engine.helps}`;
    helpBtn.disabled = engine.helps <= 0;
}

function handleHelp() {
    const pairId = engine.useHelp();
    if (!pairId) return;

    const enTile = document.querySelector(`#english-board [data-id="${pairId}"]`);
    const esTile = document.querySelector(`#spanish-board [data-id="${pairId}"]`);

    updateDisplays();

    // Visual feedback
    setTileFlipped(enTile, true);
    enTile.classList.add('highlight-help');
    esTile.classList.add('highlight-help');

    // Remove highlight after 3 seconds
    setTimeout(() => {
        enTile.classList.remove('highlight-help');
        esTile.classList.remove('highlight-help');
        
        // If not matched yet, flip English back if it wasn't the one selected by user
        if (!engine.matchedIds.has(pairId)) {
            // If it's NOT the user's currently selected English card, flip it back
            if (!engine.selectedEnglish || engine.selectedEnglish.id !== pairId) {
                setTileFlipped(enTile, false);
            }
        }
    }, 3000);
}

function endGame(isTimeUp = false) {
    engine.stopTimer();
    const title = isTimeUp ? "Time's Up!" : "Victory!";
    document.querySelector('#result-overlay h2').textContent = title;
    
    document.getElementById('final-hits').textContent = engine.hits;
    document.getElementById('final-misses').textContent = engine.misses;
    document.getElementById('final-time').textContent = timerDisplay.textContent;
    document.getElementById('final-accuracy').textContent = `${engine.getAccuracy()}%`;
    resultOverlay.classList.add('active');
}

playAgainBtn.addEventListener('click', init);
helpBtn.addEventListener('click', handleHelp);

timeOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        const secs = parseInt(btn.dataset.seconds);
        startGame(secs);
    });
});

// Start Game
init();
