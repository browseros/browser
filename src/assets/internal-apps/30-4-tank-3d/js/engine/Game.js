class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.set(0, 30, 50);
        this.camera.lookAt(0, 0, 0);

        // Setup lighting
        this.setupLighting();

        // Game states
        this.states = {};
        this.currentState = null;

        // Game objects
        this.objects = [];
        
        // Input handler
        this.input = new InputHandler();
        
        // Physics engine
        this.physics = new PhysicsEngine();
        
        // Collision detector
        this.collisionDetector = new CollisionDetector();

        // Game state
        this.score = 0;
        this.isGameOver = false;

        // Bind methods
        this.animate = this.animate.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);

        // Event listeners
        window.addEventListener('resize', this.onWindowResize);
    }

    setupLighting() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        this.scene.add(ambientLight);

        // Directional light (sun)
        const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
        sunLight.position.set(50, 100, 50);
        sunLight.castShadow = true;
        
        // Adjust shadow properties
        sunLight.shadow.mapSize.width = 2048;
        sunLight.shadow.mapSize.height = 2048;
        sunLight.shadow.camera.near = 0.5;
        sunLight.shadow.camera.far = 500;
        sunLight.shadow.camera.left = -100;
        sunLight.shadow.camera.right = 100;
        sunLight.shadow.camera.top = 100;
        sunLight.shadow.camera.bottom = -100;
        
        this.scene.add(sunLight);
    }

    init() {
        // Initialize game states
        this.states.menu = new MenuState(this);
        this.states.play = new PlayState(this);
        this.states.gameOver = new GameOverState(this);

        // Set initial state
        this.setState('menu');

        // Start animation loop
        this.animate();
    }

    setState(stateName) {
        // Exit current state if exists
        if (this.currentState) {
            this.currentState.exit();
        }

        // Enter new state
        this.currentState = this.states[stateName];
        this.currentState.enter();
    }

    addObject(object) {
        this.objects.push(object);
        if (object.mesh) {
            this.scene.add(object.mesh);
        }
    }

    removeObject(object) {
        const index = this.objects.indexOf(object);
        if (index !== -1) {
            this.objects.splice(index, 1);
            if (object.mesh) {
                this.scene.remove(object.mesh);
            }
        }
    }

    updateScore(points) {
        this.score += points;
        document.getElementById('scoreValue').textContent = this.score;
    }

    resetGame() {
        // Clear all objects
        while (this.objects.length > 0) {
            this.removeObject(this.objects[0]);
        }

        // Reset game state
        this.score = 0;
        this.isGameOver = false;
        document.getElementById('scoreValue').textContent = '0';

        // Switch to play state
        this.setState('play');
    }

    endGame() {
        this.isGameOver = true;
        document.getElementById('finalScore').textContent = `Final Score: ${this.score}`;
        this.setState('gameOver');
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    update(deltaTime) {
        // Update current state
        if (this.currentState) {
            this.currentState.update(deltaTime);
        }

        // Update physics
        this.physics.update(deltaTime);

        // Update all objects
        this.objects.forEach(object => {
            if (object.update) {
                object.update(deltaTime);
            }
        });

        // Check collisions
        this.collisionDetector.checkCollisions(this.objects);
    }

    render() {
        // Render scene
        this.renderer.render(this.scene, this.camera);

        // Render current state
        if (this.currentState) {
            this.currentState.render();
        }
    }

    animate(time) {
        requestAnimationFrame(this.animate);

        // Calculate delta time
        const deltaTime = time ? (time - (this.lastTime || time)) / 1000 : 0;
        this.lastTime = time;

        // Update and render
        this.update(deltaTime);
        this.render();
    }
} 