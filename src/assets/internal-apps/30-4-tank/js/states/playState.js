class PlayState extends GameState {
    constructor(game) {
        super(game);
        this.objects = [];
        this.tank = null;
        this.palace = null;
        this.background = null;
    }

    enter() {
        // Create game objects
        this.background = new Background(this.game);
        this.tank = new Tank(this.game, 100, this.game.height/2);
        this.palace = new Palace(this.game);
        
        this.objects = [this.background, this.palace, this.tank];

        // Start background music
        this.game.soundManager.play('background', true);
    }

    exit() {
        // Stop all sounds
        this.game.soundManager.stopAll();
        
        // Clear objects
        this.objects = [];
        this.tank = null;
        this.palace = null;
        this.background = null;
    }

    update(deltaTime) {
        // Update game time
        this.game.updateTime(deltaTime);

        // Update all objects
        this.objects = this.objects.filter(obj => obj.active);
        this.objects.forEach(obj => obj.update(deltaTime));

        // Check collisions
        if (this.tank && this.palace && this.tank.collidesWith(this.palace)) {
            // Tank hits palace
            this.palace.takeDamage(deltaTime * 50);
            this.game.updateScore(Math.floor(deltaTime * 10));
        }
    }

    render(ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, this.game.width, this.game.height);

        // Draw all objects
        this.objects.forEach(obj => obj.render(ctx));
    }

    addObject(object) {
        this.objects.push(object);
    }

    removeObject(object) {
        const index = this.objects.indexOf(object);
        if (index !== -1) {
            this.objects.splice(index, 1);
        }
    }
} 