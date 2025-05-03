class Background extends GameObject {
    constructor(game) {
        super(game, 0, 0, game.width, game.height);
        
        // Create canvas for background
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
        
        // Draw background pattern
        this.drawBackground();
    }

    drawBackground() {
        // Fill background
        this.ctx.fillStyle = '#2c3e50';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Draw grid pattern
        this.ctx.strokeStyle = '#34495e';
        this.ctx.lineWidth = 1;
        
        // Vertical lines
        for (let x = 0; x < this.width; x += 40) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.height);
            this.ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y < this.height; y += 40) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.stroke();
        }
    }

    render(ctx) {
        ctx.drawImage(this.canvas, 0, 0);
    }
} 