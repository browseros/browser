class GameOverState extends GameState {
    constructor(game) {
        super(game);
        
        // Setup event listeners
        document.getElementById('restartButton').addEventListener('click', () => {
            this.game.resetGame();
        });
    }

    enter() {
        const menu = document.getElementById('menu');
        const startButton = document.getElementById('startButton');
        const restartButton = document.getElementById('restartButton');
        const finalScore = document.getElementById('finalScore');

        menu.style.display = 'block';
        startButton.style.display = 'none';
        restartButton.style.display = 'block';
        finalScore.style.display = 'block';
        finalScore.textContent = `Final Score: ${this.game.score}`;
    }

    exit() {
        document.getElementById('menu').style.display = 'none';
    }

    render(ctx) {
        // Draw background
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(0, 0, this.game.width, this.game.height);

        // Draw grid pattern
        ctx.strokeStyle = '#34495e';
        ctx.lineWidth = 1;
        
        // Vertical lines
        for (let x = 0; x < this.game.width; x += 40) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.game.height);
            ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y < this.game.height; y += 40) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.game.width, y);
            ctx.stroke();
        }

        // Draw game over text
        ctx.fillStyle = 'white';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Victory!', this.game.width/2, 100);

        // Draw score
        ctx.font = '32px Arial';
        ctx.fillText(`Score: ${this.game.score}`, this.game.width/2, 200);
        ctx.fillText(`Time: ${Math.floor(this.game.gameTime)} seconds`, this.game.width/2, 250);
    }
} 