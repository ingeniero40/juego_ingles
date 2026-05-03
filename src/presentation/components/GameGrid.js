import { createGameTile } from './GameTile.js';

export function renderGrid(containerId, data, lang, onTileClick, startFlipped = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    // Shuffle data for a real memory game experience
    const shuffledData = [...data].sort(() => Math.random() - 0.5);

    shuffledData.forEach(item => {
        const text = lang === 'en' ? item.en : item.es;
        const tile = createGameTile(text, item.id, lang, onTileClick, startFlipped);
        container.appendChild(tile);
    });
}

export function setTileFlipped(element, isFlipped) {
    if (isFlipped) {
        element.classList.add('is-flipped');
    } else {
        element.classList.remove('is-flipped');
    }
}

export function setTileMatched(element) {
    element.classList.add('matched');
}

export function setTileMismatch(element, isMismatch) {
    if (isMismatch) {
        element.classList.add('mismatch');
    } else {
        element.classList.remove('mismatch');
    }
}
