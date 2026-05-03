import { vocabulary } from './src/infrastructure/vocabulary.js';
import { GameEngine } from './src/domain/GameEngine.js';
import { renderGrid, updateTileState, clearGridSelections } from './src/presentation/components/GameGrid.js';

// State Management
const engine = new GameEngine(vocabulary);
let currentBoard = 'en'; // 'en' or 'es'

// DOM Elements
const boardToggleBtn = document.getElementById('board-toggle');
const englishBoard = document.getElementById('english-board');
const spanishBoard = document.getElementById('spanish-board');
const timerDisplay = document.getElementById('timer-display');
const matchesDisplay = document.getElementById('matches-display');
const resultOverlay = document.getElementById('result-overlay');
const playAgainBtn = document.getElementById('play-again');

// Navigation
const navEnglish = document.getElementById('nav-english');
const navSpanish = document.getElementById('nav-spanish');
const navMenu = document.getElementById('nav-menu');

// Initialization
function init() {
    engine.reset();
    
    // Shuffle or prepare data? (Documentation says fixed grid, but randomization is better for replayability)
    // For now, let's keep it fixed as per ARCHITECTURE.md "cuadrícula fija"
    
    renderGrid('english-board', vocabulary, 'en', handleTileClick);
    renderGrid('spanish-board', vocabulary, 'es', handleTileClick);
    
    updateDisplays();
    engine.startTimer(time => {
        timerDisplay.textContent = time;
    });

    // Reset UI
    resultOverlay.classList.add('hidden');
    switchToBoard('en');
}

function handleTileClick(id, lang, element) {
    if (lang === 'en') {
        clearGridSelections('english-board');
        updateTileState('english-board', id, 'selected');
        const result = engine.selectEnglish(id);
        handleMatchResult(result);
    } else {
        clearGridSelections('spanish-board');
        updateTileState('spanish-board', id, 'selected');
        const result = engine.selectSpanish(id);
        handleMatchResult(result);
    }
}

function handleMatchResult(result) {
    if (!result) return;

    if (result.isMatch) {
        updateTileState('english-board', result.id, 'matched');
        updateTileState('spanish-board', result.id, 'matched');
        updateDisplays();
        
        if (engine.isGameOver()) {
            endGame();
        }
    } else {
        // Visual feedback for mismatch could be added here
        // For now, clear selections (already done in engine.clearSelection() and logic)
        setTimeout(() => {
            clearGridSelections('english-board');
            clearGridSelections('spanish-board');
        }, 500);
    }
}

function updateDisplays() {
    matchesDisplay.textContent = `${engine.matches} / ${engine.totalPairs}`;
}

function switchToBoard(lang) {
    currentBoard = lang;
    if (lang === 'en') {
        englishBoard.classList.remove('hidden');
        spanishBoard.classList.add('hidden');
        boardToggleBtn.textContent = 'Translation Board';
        boardToggleBtn.classList.remove('secondary');
        navEnglish.classList.add('active');
        navSpanish.classList.remove('active');
    } else {
        englishBoard.classList.add('hidden');
        spanishBoard.classList.remove('hidden');
        boardToggleBtn.textContent = 'English Board';
        boardToggleBtn.classList.add('secondary');
        navEnglish.classList.remove('active');
        navSpanish.classList.add('active');
    }
}

function endGame() {
    engine.stopTimer();
    
    document.getElementById('final-time').textContent = timerDisplay.textContent;
    const accuracy = Math.round((engine.accuracy.successes / engine.accuracy.attempts) * 100);
    document.getElementById('final-accuracy').textContent = `${accuracy}%`;
    document.getElementById('final-xp').textContent = `+${engine.calculateXP()}`;
    
    resultOverlay.classList.remove('hidden');
    resultOverlay.classList.add('active'); // CSS transition
}

// Event Listeners
boardToggleBtn.addEventListener('click', () => {
    switchToBoard(currentBoard === 'en' ? 'es' : 'en');
});

navEnglish.addEventListener('click', (e) => {
    e.preventDefault();
    switchToBoard('en');
});

navSpanish.addEventListener('click', (e) => {
    e.preventDefault();
    switchToBoard('es');
});

playAgainBtn.addEventListener('click', init);

// Start Game
init();
