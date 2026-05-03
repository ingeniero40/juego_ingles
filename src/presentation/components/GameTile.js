export function createGameTile(text, id, lang, onClick, startFlipped = false) {
    const tile = document.createElement('div');
    tile.className = `game-tile ${startFlipped ? 'is-flipped' : ''}`;
    tile.dataset.id = id;
    tile.dataset.lang = lang;

    tile.innerHTML = `
        <div class="tile-inner">
            <div class="tile-front"></div>
            <div class="tile-back">${text}</div>
        </div>
    `;

    tile.addEventListener('click', () => {
        const isMatched = tile.classList.contains('matched');
        const isFlipped = tile.classList.contains('is-flipped');
        
        // Allow clicking if it's not matched AND
        // (It's not flipped OR it's a Spanish card that's always flipped)
        if (!isMatched && (!isFlipped || lang === 'es')) {
            onClick(id, lang, tile);
        }
    });

    return tile;
}
