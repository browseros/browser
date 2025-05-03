class Tank {
    constructor(game) {
        this.game = game;
        
        // Create tank group
        this.mesh = new THREE.Group();
        
        // Create tank parts
        this.createBody();
        this.createTurret();
        this.createTracks();
        
        // Add shadows
        this.mesh.traverse(object => {
            if (object instanceof THREE.Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
            }
        });
        
        // Tank properties
        this.speed = 0;
        this.maxSpeed = 20;
        this.acceleration = 15;
        this.deceleration = 10;
        this.turnSpeed = 2;
        this.turretRotation = 0;
        this.turretTurnSpeed = 3;
        
        // Add physics
        this.game.physics.createPhysicsBody(this, {
            mass: 10,
            boundingRadius: 2
        });
        
        // Add collider
        this.game.collisionDetector.createCollider(this, 'box', {
            size: new THREE.Vector3(4, 2, 6)
        });
    }

    createBody() {
        // Main body
        const bodyGeometry = new THREE.BoxGeometry(4, 2, 6);
        const bodyMaterial = new THREE.MeshStandardMaterial({
            color: 0x1B5E20, // Dark green
            roughness: 0.7,
            metalness: 0.3
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 1.5;
        this.mesh.add(body);

        // Front armor
        const armorGeometry = new THREE.BoxGeometry(4, 1.5, 1);
        const armor = new THREE.Mesh(armorGeometry, bodyMaterial);
        armor.position.set(0, 1.5, 3);
        armor.rotation.x = Math.PI / 6;
        this.mesh.add(armor);

        // Side skirts
        const skirtGeometry = new THREE.BoxGeometry(0.5, 1, 6);
        const leftSkirt = new THREE.Mesh(skirtGeometry, bodyMaterial);
        leftSkirt.position.set(2, 1, 0);
        this.mesh.add(leftSkirt);

        const rightSkirt = new THREE.Mesh(skirtGeometry, bodyMaterial);
        rightSkirt.position.set(-2, 1, 0);
        this.mesh.add(rightSkirt);
    }

    createTurret() {
        // Create turret group
        this.turret = new THREE.Group();
        this.turret.position.y = 2.5;
        this.mesh.add(this.turret);

        // Main turret
        const turretGeometry = new THREE.BoxGeometry(3.5, 1.5, 4);
        const turretMaterial = new THREE.MeshStandardMaterial({
            color: 0x0A3D0A, // Darker green
            roughness: 0.7,
            metalness: 0.3
        });
        const turretMain = new THREE.Mesh(turretGeometry, turretMaterial);
        this.turret.add(turretMain);

        // Turret dome
        const domeGeometry = new THREE.SphereGeometry(1.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const dome = new THREE.Mesh(domeGeometry, turretMaterial);
        dome.position.y = 0.75;
        this.turret.add(dome);

        // Gun barrel
        const barrelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 6);
        const barrel = new THREE.Mesh(barrelGeometry, turretMaterial);
        barrel.position.z = 5;
        barrel.rotation.x = Math.PI / 2;
        this.turret.add(barrel);

        // Gun mantlet
        const mantletGeometry = new THREE.CylinderGeometry(0.6, 0.6, 1);
        const mantlet = new THREE.Mesh(mantletGeometry, turretMaterial);
        mantlet.position.z = 2;
        mantlet.rotation.x = Math.PI / 2;
        this.turret.add(mantlet);
    }

    createTracks() {
        const trackMaterial = new THREE.MeshStandardMaterial({
            color: 0x1B1B1B, // Dark gray
            roughness: 0.9,
            metalness: 0.1
        });

        // Track groups
        this.leftTrack = new THREE.Group();
        this.rightTrack = new THREE.Group();
        this.mesh.add(this.leftTrack);
        this.mesh.add(this.rightTrack);

        // Create track segments
        const segmentGeometry = new THREE.BoxGeometry(1, 0.4, 0.5);
        
        // Left track
        for (let i = 0; i < 12; i++) {
            const segment = new THREE.Mesh(segmentGeometry, trackMaterial);
            segment.position.set(2, 0.5, -3 + i * 0.5);
            this.leftTrack.add(segment);
        }

        // Right track
        for (let i = 0; i < 12; i++) {
            const segment = new THREE.Mesh(segmentGeometry, trackMaterial);
            segment.position.set(-2, 0.5, -3 + i * 0.5);
            this.rightTrack.add(segment);
        }

        // Track wheels
        const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.3);
        for (let i = 0; i < 6; i++) {
            // Left wheels
            const leftWheel = new THREE.Mesh(wheelGeometry, trackMaterial);
            leftWheel.position.set(2, 0.5, -2.5 + i);
            leftWheel.rotation.z = Math.PI / 2;
            this.leftTrack.add(leftWheel);

            // Right wheels
            const rightWheel = new THREE.Mesh(wheelGeometry, trackMaterial);
            rightWheel.position.set(-2, 0.5, -2.5 + i);
            rightWheel.rotation.z = Math.PI / 2;
            this.rightTrack.add(rightWheel);
        }
    }

    update(deltaTime) {
        const controls = this.game.input.getTankControls();

        // Movement
        if (controls.forward) {
            this.speed = Math.min(this.speed + this.acceleration * deltaTime, this.maxSpeed);
        } else if (controls.backward) {
            this.speed = Math.max(this.speed - this.acceleration * deltaTime, -this.maxSpeed / 2);
        } else {
            // Deceleration
            if (this.speed > 0) {
                this.speed = Math.max(0, this.speed - this.deceleration * deltaTime);
            } else if (this.speed < 0) {
                this.speed = Math.min(0, this.speed + this.deceleration * deltaTime);
            }
        }

        // Turning
        if (controls.left) {
            this.mesh.rotation.y += this.turnSpeed * deltaTime;
        }
        if (controls.right) {
            this.mesh.rotation.y -= this.turnSpeed * deltaTime;
        }

        // Turret rotation
        if (controls.turretLeft) {
            this.turretRotation += this.turretTurnSpeed * deltaTime;
        }
        if (controls.turretRight) {
            this.turretRotation -= this.turretTurnSpeed * deltaTime;
        }
        this.turret.rotation.y = this.turretRotation;

        // Update position - Fixed direction to match tank's forward direction
        const movement = new THREE.Vector3(
            Math.sin(this.mesh.rotation.y) * this.speed * deltaTime,
            0,
            Math.cos(this.mesh.rotation.y) * this.speed * deltaTime
        );
        this.mesh.position.add(movement);

        // Animate tracks
        const trackRotation = this.speed * deltaTime * 2;
        this.leftTrack.children.forEach(child => {
            if (child instanceof THREE.Mesh) {
                child.rotation.x += trackRotation;
            }
        });
        this.rightTrack.children.forEach(child => {
            if (child instanceof THREE.Mesh) {
                child.rotation.x += trackRotation;
            }
        });
    }
} 