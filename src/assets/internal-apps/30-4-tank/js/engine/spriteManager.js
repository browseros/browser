class SpriteManager {
    constructor() {
        this.sprites = {};
        this.loaded = false;
        this.totalSprites = 0;
        this.loadedSprites = 0;

        // Preload game sprites
        this.loadSprite('tank', 'assets/sprites/tank.png');
        this.loadSprite('palace', 'assets/sprites/palace.png');
        this.loadSprite('explosion', 'assets/sprites/explosion.png');
        this.loadSprite('background', 'assets/sprites/background.png');
    }

    loadSprite(name, src) {
        this.totalSprites++;
        const img = new Image();
        img.src = src;
        img.onload = () => {
            this.loadedSprites++;
            if (this.loadedSprites === this.totalSprites) {
                this.loaded = true;
            }
        };
        this.sprites[name] = img;
    }

    getSprite(name) {
        return this.sprites[name];
    }

    isLoaded() {
        return this.loaded;
    }

    drawSprite(ctx, name, x, y, width, height, rotation = 0) {
        const sprite = this.sprites[name];
        if (sprite) {
            ctx.save();
            ctx.translate(x + width/2, y + height/2);
            ctx.rotate(rotation);
            ctx.drawImage(sprite, -width/2, -height/2, width, height);
            ctx.restore();
        }
    }

    drawAnimatedSprite(ctx, name, x, y, width, height, frameX, frameY, frameWidth, frameHeight) {
        const sprite = this.sprites[name];
        if (sprite) {
            ctx.drawImage(
                sprite,
                frameX * frameWidth,
                frameY * frameHeight,
                frameWidth,
                frameHeight,
                x,
                y,
                width,
                height
            );
        }
    }
} 