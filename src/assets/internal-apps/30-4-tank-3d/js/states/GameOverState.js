class GameOverState extends GameState {
    constructor(game) {
        super(game);
        this.camera = game.camera;
        this.scene = game.scene;
    }

    enter() {
        // Show game over UI
        document.getElementById('menu').style.display = 'block';
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById('finalScore').style.display = 'block';
        
        // Move camera to victory view
        this.setupVictoryCamera();
    }

    setupVictoryCamera() {
        // Find gate position
        let gatePosition = new THREE.Vector3();
        this.game.objects.forEach(obj => {
            if (obj instanceof Gate) {
                gatePosition.copy(obj.mesh.position);
            }
        });

        // Set camera to view destroyed gate
        const cameraPosition = new THREE.Vector3(
            gatePosition.x,
            20,
            gatePosition.z + 30
        );
        
        // Smoothly move camera to position
        const duration = 2000; // 2 seconds
        const startPosition = this.camera.position.clone();
        const startTime = Date.now();

        const animateCamera = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Use easing function for smooth movement
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            this.camera.position.lerpVectors(
                startPosition,
                cameraPosition,
                easeProgress
            );
            
            this.camera.lookAt(gatePosition);
            
            if (progress < 1) {
                requestAnimationFrame(animateCamera);
            }
        };

        animateCamera();
    }

    exit() {
        // Hide game over UI
        document.getElementById('menu').style.display = 'none';
    }

    update(deltaTime) {
        // Continue physics simulation for debris
        this.game.objects.forEach(obj => {
            if (obj instanceof Gate && obj.isDestroyed) {
                obj.update(deltaTime);
            }
        });

        // Slowly rotate camera around the destroyed gate
        const rotationSpeed = 0.2;
        const radius = 30;
        const time = Date.now() * 0.001;
        
        let gatePosition = new THREE.Vector3();
        this.game.objects.forEach(obj => {
            if (obj instanceof Gate) {
                gatePosition.copy(obj.mesh.position);
            }
        });

        this.camera.position.x = gatePosition.x + Math.cos(time * rotationSpeed) * radius;
        this.camera.position.z = gatePosition.z + Math.sin(time * rotationSpeed) * radius;
        this.camera.lookAt(gatePosition);
    }
} 