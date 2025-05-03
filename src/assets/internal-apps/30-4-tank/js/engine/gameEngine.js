class GameEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.width = 800;
        this.height = 600;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        this.currentState = null;
        this.states = {};
        
        this.lastTime = 0;
        this.deltaTime = 0;
        
        this.inputHandler = new InputHandler();
        this.soundManager = new SoundManager();
        this.spriteManager = new SpriteManager();
        
        this.score = 0;
        this.gameTime = 0;
        this.isGameOver = false;
    }

    init() {
        // Load game states
        this.states.menu = new MenuState(this);
        this.states.play = new PlayState(this);
        this.states.gameOver = new GameOverState(this);
        
        // Set initial state
        this.setState('menu');
        
        // Start game loop
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    setState(stateName) {
        if (this.currentState) {
            this.currentState.exit();
        }
        this.currentState = this.states[stateName];
        this.currentState.enter();
    }

    gameLoop(timestamp) {
        // Calculate delta time
        this.deltaTime = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        // Update and render current state
        if (this.currentState) {
            this.currentState.update(this.deltaTime);
            this.currentState.render(this.ctx);
        }

        // Continue game loop
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    resetGame() {
        this.score = 0;
        this.gameTime = 0;
        this.isGameOver = false;
        this.setState('play');
    }

    endGame() {
        this.isGameOver = true;
        this.setState('gameOver');
    }

    updateScore(points) {
        this.score += points;
        document.getElementById('scoreValue').textContent = this.score;
    }

    updateTime(deltaTime) {
        this.gameTime += deltaTime;
        document.getElementById('timeValue').textContent = Math.floor(this.gameTime);
    }
} 