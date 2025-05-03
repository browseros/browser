class GameObject {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.rotation = 0;
        this.speed = 0;
        this.active = true;
    }

    update(deltaTime) {
        // Base update method
    }

    render(ctx) {
        // Base render method
    }

    getBounds() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
    }

    collidesWith(other) {
        const bounds = this.getBounds();
        const otherBounds = other.getBounds();

        return bounds.x < otherBounds.x + otherBounds.width &&
               bounds.x + bounds.width > otherBounds.x &&
               bounds.y < otherBounds.y + otherBounds.height &&
               bounds.y + bounds.height > otherBounds.y;
    }

    destroy() {
        this.active = false;
    }
} 