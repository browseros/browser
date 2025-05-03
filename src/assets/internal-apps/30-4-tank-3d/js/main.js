// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Create game instance
    const game = new Game();
    
    // Initialize game
    game.init();
    
    // Add event listeners for menu buttons
    document.getElementById('startButton').addEventListener('click', () => {
        game.resetGame();
    });
    
    document.getElementById('restartButton').addEventListener('click', () => {
        game.resetGame();
    });
}); 