class Explosion extends GameObject {
    constructor(game, x, y) {
        super(game, x, y, 64, 64);
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 8;
        this.frameTime = 0;
        this.frameInterval = 0.05;
        this.radius = 5;
        this.maxRadius = 32;
        this.alpha = 1;
    }

    update(deltaTime) {
        this.frameTime += deltaTime;
        
        if (this.frameTime >= this.frameInterval) {
            this.frameTime = 0;
            this.frameX++;
            
            // Update explosion animation
            this.radius = Math.min(this.radius + 5, this.maxRadius);
            this.alpha = Math.max(0, this.alpha - 0.1);
            
            if (this.frameX >= this.maxFrame) {
                this.destroy();
            }
        }
    }

    render(ctx) {
        // Draw explosion circle
        ctx.save();
        ctx.globalAlpha = this.alpha;
        
        // Inner circle
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(
            this.x + this.width/2,
            this.y + this.height/2,
            this.radius * 0.7,
            0,
            Math.PI * 2
        );
        ctx.fill();
        
        // Outer circle
        ctx.fillStyle = '#e74c3c';
        ctx.beginPath();
        ctx.arc(
            this.x + this.width/2,
            this.y + this.height/2,
            this.radius,
            0,
            Math.PI * 2
        );
        ctx.fill();
        
        ctx.restore();
    }
} 