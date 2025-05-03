class Tank extends GameObject {
    constructor(game, x, y) {
        super(game, x, y, 64, 64);
        this.maxSpeed = 200;
        this.acceleration = 200;
        this.deceleration = 150;
        this.rotationSpeed = 3;
        this.velocity = { x: 0, y: 0 };
        this.engineSound = false;
        
        // Create tank shape
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.drawTankShape();
    }

    drawTankShape() {
        const ctx = this.canvas.getContext('2d');
        
        // Tank body - dark green
        ctx.fillStyle = '#1B5E20';  // Dark green color
        ctx.fillRect(10, 15, 44, 34);
        
        // Tank turret - slightly darker green
        ctx.fillStyle = '#0A3D0A';  // Darker green for contrast
        ctx.fillRect(20, 25, 24, 14);
        
        // Tank cannon - same as turret
        ctx.fillStyle = '#0A3D0A';
        ctx.fillRect(44, 29, 20, 6);
        
        // Tank tracks
        ctx.fillStyle = '#1B1B1B';  // Dark gray for tracks
        ctx.fillRect(8, 10, 48, 5);
        ctx.fillRect(8, 49, 48, 5);
    }

    update(deltaTime) {
        const input = this.game.inputHandler;

        // Rotation
        if (input.isKeyPressed('KeyA')) {
            this.rotation -= this.rotationSpeed * deltaTime;
        }
        if (input.isKeyPressed('KeyD')) {
            this.rotation += this.rotationSpeed * deltaTime;
        }

        // Movement
        if (input.isKeyPressed('KeyW')) {
            this.speed = Math.min(this.speed + this.acceleration * deltaTime, this.maxSpeed);
            if (!this.engineSound) {
                this.game.soundManager.play('engine', true);
                this.engineSound = true;
            }
        } else if (input.isKeyPressed('KeyS')) {
            this.speed = Math.max(this.speed - this.acceleration * deltaTime, -this.maxSpeed/2);
            if (!this.engineSound) {
                this.game.soundManager.play('engine', true);
                this.engineSound = true;
            }
        } else {
            // Deceleration
            if (this.speed > 0) {
                this.speed = Math.max(0, this.speed - this.deceleration * deltaTime);
            } else if (this.speed < 0) {
                this.speed = Math.min(0, this.speed + this.deceleration * deltaTime);
            }
            
            if (this.speed === 0 && this.engineSound) {
                this.game.soundManager.stop('engine');
                this.engineSound = false;
            }
        }

        // Update position
        this.velocity.x = Math.cos(this.rotation) * this.speed;
        this.velocity.y = Math.sin(this.rotation) * this.speed;
        
        this.x += this.velocity.x * deltaTime;
        this.y += this.velocity.y * deltaTime;

        // Keep tank within bounds
        this.x = Math.max(0, Math.min(this.x, this.game.width - this.width));
        this.y = Math.max(0, Math.min(this.y, this.game.height - this.height));
    }

    render(ctx) {
        ctx.save();
        ctx.translate(this.x + this.width/2, this.y + this.height/2);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.canvas, -this.width/2, -this.height/2);
        ctx.restore();
    }

    destroy() {
        super.destroy();
        this.game.soundManager.stop('engine');
        this.game.soundManager.play('explosion');
        
        // Create explosion effect
        new Explosion(this.game, this.x, this.y);
    }
} 