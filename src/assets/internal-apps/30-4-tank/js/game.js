// Wait for all resources to load
window.addEventListener('load', () => {
    // Create and initialize game
    const game = new GameEngine('gameCanvas');
    game.init();

    // Handle window resize
    window.addEventListener('resize', () => {
        // Keep game canvas size fixed for now
        game.canvas.width = game.width;
        game.canvas.height = game.height;
    });
}); 