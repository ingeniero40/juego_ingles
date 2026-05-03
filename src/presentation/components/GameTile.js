export function createGameTile(text, id, lang, onClick) {
    const tile = document.createElement('div');
    tile.className = 'game-tile';
    tile.textContent = text;
    tile.dataset.id = id;
    tile.dataset.lang = lang;

    tile.addEventListener('click', () => {
        if (!tile.classList.contains('matched')) {
            onClick(id, lang, tile);
        }
    });

    return tile;
}
