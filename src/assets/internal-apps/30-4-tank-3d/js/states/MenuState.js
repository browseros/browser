class MenuState extends GameState {
    constructor(game) {
        super(game);
        this.camera = game.camera;
        this.scene = game.scene;
        
        // Create preview scene
        this.createPreviewScene();
    }

    createPreviewScene() {
        // Add ground
        const ground = new Ground(this.game);
        this.game.addObject(ground);

        // Add tank for preview
        this.previewTank = new Tank(this.game);
        this.previewTank.mesh.position.set(-10, 0, 0);
        this.previewTank.mesh.rotation.y = Math.PI / 4;
        this.game.addObject(this.previewTank);

        // Add palace for preview
        this.previewPalace = new Palace(this.game);
        this.previewPalace.mesh.position.set(30, 0, 0);
        this.game.addObject(this.previewPalace);

        // Add some palm trees
        for (let i = 0; i < 4; i++) {
            const palmTree = new PalmTree(this.game);
            palmTree.mesh.position.set(
                20 + Math.random() * 20,
                0,
                -10 + Math.random() * 20
            );
            this.game.addObject(palmTree);
        }

        // Setup camera for menu view
        this.camera.position.set(0, 40, 80);
        this.camera.lookAt(0, 0, 0);
    }

    enter() {
        // Show menu UI
        document.getElementById('menu').style.display = 'block';
        document.getElementById('startButton').style.display = 'block';
        document.getElementById('restartButton').style.display = 'none';
        document.getElementById('finalScore').style.display = 'none';
        document.getElementById('ui').style.display = 'none';
    }

    exit() {
        // Hide menu UI
        document.getElementById('menu').style.display = 'none';
        document.getElementById('ui').style.display = 'block';
    }

    update(deltaTime) {
        // Rotate camera around scene
        const rotationSpeed = 0.1;
        this.camera.position.x = Math.cos(Date.now() * 0.0005) * 80;
        this.camera.position.z = Math.sin(Date.now() * 0.0005) * 80;
        this.camera.lookAt(0, 0, 0);

        // Rotate preview tank
        if (this.previewTank) {
            this.previewTank.mesh.rotation.y += rotationSpeed * deltaTime;
        }
    }
} 