class PlayState extends GameState {
    constructor(game) {
        super(game);
        this.camera = game.camera;
        this.scene = game.scene;
    }

    enter() {
        // Create game objects
        this.createGameObjects();
        
        // Setup camera
        this.setupCamera();
        
        // Show UI
        document.getElementById('ui').style.display = 'block';
        document.getElementById('menu').style.display = 'none';
    }

    createGameObjects() {
        // Create ground
        const ground = new Ground(this.game);
        this.game.addObject(ground);

        // Create tank
        this.tank = new Tank(this.game);
        this.tank.mesh.position.set(-30, 0, 0);
        this.game.addObject(this.tank);

        // Create palace
        this.palace = new Palace(this.game);
        this.palace.mesh.position.set(30, 0, 0);
        this.game.addObject(this.palace);

        // Create gate to replace a section of the front fence
        this.gate = new Gate(this.game);
        this.gate.mesh.position.set(30, 0, 30); // Place at front fence position
        this.gate.mesh.rotation.y = 0; // Make gate parallel to fence
        this.game.addObject(this.gate);

        // Create palm trees
        this.createPalmTrees();
    }

    createPalmTrees() {
        // Add palm trees around the palace
        const palmPositions = [
            [20, 0, -20],
            [20, 0, -10],
            [20, 0, 0],
            [20, 0, 10],
            [40, 0, -20],
            [40, 0, -10],
            [40, 0, 0],
            [40, 0, 10],
            [25, 0, -25],
            [35, 0, -25],
            [25, 0, 25],
            [35, 0, 25]
        ];

        palmPositions.forEach(pos => {
            const palmTree = new PalmTree(this.game);
            palmTree.mesh.position.set(...pos);
            this.game.addObject(palmTree);
        });
    }

    setupCamera() {
        // Set initial camera position
        this.camera.position.set(0, 10, -10);
        this.camera.lookAt(0, 2, 10);

        // Camera properties for third person view
        this.cameraOffset = new THREE.Vector3(0, 10, -10); // Higher and further back
        this.cameraLookAt = new THREE.Vector3(0, 2, 10);
        this.cameraLerpFactor = 0.1;
    }

    exit() {
        // Hide UI
        document.getElementById('ui').style.display = 'none';
    }

    update(deltaTime) {
        if (!this.tank || !this.gate) return;

        // Update camera position to follow tank
        this.updateCamera(deltaTime);

        // Check for tank-gate collision
        this.checkTankGateCollision();

        // Check for game over condition
        if (this.gate.isDestroyed) {
            this.game.updateScore(1000);
            this.game.endGame();
        }
    }

    updateCamera(deltaTime) {
        // Get tank's position and rotation
        const tankPosition = this.tank.mesh.position;
        const tankRotation = this.tank.mesh.rotation;
        const turretRotation = this.tank.turretRotation;
        
        // Calculate camera position relative to tank with offset
        const rotatedOffset = new THREE.Vector3(
            Math.sin(tankRotation.y) * this.cameraOffset.z,
            this.cameraOffset.y,
            Math.cos(tankRotation.y) * this.cameraOffset.z
        );
        
        const cameraPosition = new THREE.Vector3(
            tankPosition.x + rotatedOffset.x,
            tankPosition.y + rotatedOffset.y,
            tankPosition.z + rotatedOffset.z
        );
        
        // Calculate look at point based on tank and turret rotation
        const lookAtDistance = 20; // Increased look ahead distance
        const lookAtPoint = new THREE.Vector3(
            tankPosition.x + Math.sin(tankRotation.y + turretRotation) * lookAtDistance,
            tankPosition.y + 2, // Look slightly above ground
            tankPosition.z + Math.cos(tankRotation.y + turretRotation) * lookAtDistance
        );
        
        // Update camera position and look at point
        this.camera.position.copy(cameraPosition);
        this.camera.lookAt(lookAtPoint);
    }

    checkTankGateCollision() {
        // Get tank and gate positions
        const tankPos = this.tank.mesh.position;
        const gatePos = this.gate.mesh.position;
        
        // Calculate distance
        const distance = tankPos.distanceTo(gatePos);
        
        // Check for collision
        if (distance < 10) {
            // Calculate impact force based on tank speed
            const impactForce = Math.abs(this.tank.speed) * 10;
            
            // Apply damage to gate
            if (impactForce > 50) {
                this.gate.takeDamage(impactForce);
                this.game.updateScore(Math.floor(impactForce));
                
                // Bounce tank back
                this.tank.speed = -this.tank.speed * 0.5;
            }
        }
    }
} 