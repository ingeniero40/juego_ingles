import { createGameTile } from './GameTile.js';

export function renderGrid(containerId, data, lang, onTileClick) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach(item => {
        const text = lang === 'en' ? item.en : item.es;
        const tile = createGameTile(text, item.id, lang, onTileClick);
        container.appendChild(tile);
    });
}

export function updateTileState(containerId, id, state) {
    const container = document.getElementById(containerId);
    const tile = container.querySelector(`[data-id="${id}"]`);
    if (tile) {
        if (state === 'selected') tile.classList.add('selected');
        if (state === 'unselected') tile.classList.remove('selected');
        if (state === 'matched') {
            tile.classList.remove('selected');
            tile.classList.add('matched');
        }
    }
}

export function clearGridSelections(containerId) {
    const container = document.getElementById(containerId);
    const selected = container.querySelectorAll('.selected');
    selected.forEach(tile => tile.classList.remove('selected'));
}
