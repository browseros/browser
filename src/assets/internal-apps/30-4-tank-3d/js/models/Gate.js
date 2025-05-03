class Gate {
    constructor(game) {
        this.game = game;
        
        // Create gate group
        this.mesh = new THREE.Group();
        
        // Gate properties
        this.health = 100;
        this.isDestroyed = false;
        this.debris = [];
        
        // Create gate parts
        this.createPillars();
        this.createGate();
        this.createDetails();
        
        // Add shadows
        this.mesh.traverse(object => {
            if (object instanceof THREE.Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
            }
        });
        
        // Add collider
        this.game.collisionDetector.createCollider(this, 'box', {
            size: new THREE.Vector3(15, 6, 2)
        });
    }

    createPillars() {
        const pillarMaterial = new THREE.MeshStandardMaterial({
            color: 0x795548, // Match gate color
            roughness: 0.7,
            metalness: 0.3
        });

        // Create main pillars
        const pillarGeometry = new THREE.BoxGeometry(3, 6, 3);
        
        // Left pillar
        this.leftPillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
        this.leftPillar.position.set(-7, 3, 0);
        this.mesh.add(this.leftPillar);
        
        // Right pillar
        this.rightPillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
        this.rightPillar.position.set(7, 3, 0);
        this.mesh.add(this.rightPillar);

        // Pillar caps
        const capGeometry = new THREE.BoxGeometry(4, 1, 4);
        
        // Left cap
        const leftCap = new THREE.Mesh(capGeometry, pillarMaterial);
        leftCap.position.set(-7, 6, 0);
        this.mesh.add(leftCap);
        
        // Right cap
        const rightCap = new THREE.Mesh(capGeometry, pillarMaterial);
        rightCap.position.set(7, 6, 0);
        this.mesh.add(rightCap);

        // Add decorative top
        const topGeometry = new THREE.BoxGeometry(18, 1, 3);
        const top = new THREE.Mesh(topGeometry, pillarMaterial);
        top.position.set(0, 6.5, 0);
        this.mesh.add(top);
    }

    createGate() {
        // Main gate frame
        const gateGeometry = new THREE.BoxGeometry(12, 5, 0.5);
        const gateMaterial = new THREE.MeshStandardMaterial({
            color: 0x795548,
            roughness: 0.8,
            metalness: 0.2
        });
        
        this.gateFrame = new THREE.Mesh(gateGeometry, gateMaterial);
        this.gateFrame.position.set(0, 2.5, 0);
        this.mesh.add(this.gateFrame);

        // Gate bars
        const barMaterial = new THREE.MeshStandardMaterial({
            color: 0x5D4037,
            roughness: 0.7,
            metalness: 0.4
        });

        // Vertical bars
        for (let x = -5.5; x <= 5.5; x += 1) {
            const barGeometry = new THREE.BoxGeometry(0.3, 4.5, 0.4);
            const bar = new THREE.Mesh(barGeometry, barMaterial);
            bar.position.set(x, 2.5, 0);
            this.gateFrame.add(bar);
        }

        // Horizontal bars
        for (let y = -2; y <= 2; y += 1) {
            const barGeometry = new THREE.BoxGeometry(12, 0.3, 0.4);
            const bar = new THREE.Mesh(barGeometry, barMaterial);
            bar.position.set(0, y, 0);
            this.gateFrame.add(bar);
        }

        // Add decorative patterns
        this.createGatePatterns();
    }

    createGatePatterns() {
        const patternMaterial = new THREE.MeshStandardMaterial({
            color: 0x8D6E63,
            roughness: 0.8,
            metalness: 0.3
        });

        // Create circular pattern at the top
        const circleGeometry = new THREE.TorusGeometry(1, 0.2, 16, 32);
        const circle = new THREE.Mesh(circleGeometry, patternMaterial);
        circle.position.set(0, 4, 0.3);
        circle.rotation.x = Math.PI / 2;
        this.gateFrame.add(circle);

        // Add star in the middle of the circle
        const starPoints = [];
        for (let i = 0; i < 5; i++) {
            const angle = (i * 4 * Math.PI) / 5;
            starPoints.push(
                Math.cos(angle) * 0.6,
                Math.sin(angle) * 0.6,
                0
            );
        }
        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPoints, 3));
        const star = new THREE.Mesh(starGeometry, patternMaterial);
        star.position.set(0, 4, 0.4);
        this.gateFrame.add(star);
    }

    createDetails() {
        const detailMaterial = new THREE.MeshStandardMaterial({
            color: 0x8D6E63,
            roughness: 0.8,
            metalness: 0.3
        });

        // Decorative elements on pillars
        const decorGeometry = new THREE.BoxGeometry(3.2, 0.4, 3.2);
        
        // Left pillar decorations
        for (let y = 1; y < 5; y += 1) {
            const decor = new THREE.Mesh(decorGeometry, detailMaterial);
            decor.position.set(-7, y, 0);
            this.mesh.add(decor);
        }
        
        // Right pillar decorations
        for (let y = 1; y < 5; y += 1) {
            const decor = new THREE.Mesh(decorGeometry, detailMaterial);
            decor.position.set(7, y, 0);
            this.mesh.add(decor);
        }
    }

    takeDamage(amount) {
        if (this.isDestroyed) return;
        
        this.health -= amount;
        
        // Add cracks when damaged
        if (this.health < 80) {
            this.addCracks();
        }
        
        // Add more cracks and start shaking when heavily damaged
        if (this.health < 40) {
            this.addCracks();
            this.shake();
        }
        
        // Destroy gate when health reaches 0
        if (this.health <= 0) {
            this.destroy();
        }
    }

    shake() {
        const intensity = (100 - this.health) / 100; // Shake more as health decreases
        this.gateFrame.position.x += (Math.random() - 0.5) * 0.1 * intensity;
        this.gateFrame.position.y += (Math.random() - 0.5) * 0.1 * intensity;
        this.gateFrame.rotation.z += (Math.random() - 0.5) * 0.05 * intensity;
    }

    addCracks() {
        // Create crack geometry
        const crackMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        
        for (let i = 0; i < 5; i++) {
            const points = [];
            const length = Math.random() * 3 + 2;
            const segments = 10;
            
            for (let j = 0; j <= segments; j++) {
                points.push(new THREE.Vector3(
                    (j / segments) * length + (Math.random() - 0.5) * 0.5,
                    Math.sin(j * 0.8) * 0.3 + (Math.random() - 0.5) * 0.2,
                    0
                ));
            }
            
            const crackGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const crack = new THREE.Line(crackGeometry, crackMaterial);
            
            // Position crack randomly on gate
            crack.position.set(
                Math.random() * 10 - 5,
                Math.random() * 8 + 1,
                0.26
            );
            crack.rotation.z = Math.random() * Math.PI;
            
            this.gateFrame.add(crack);
        }
    }

    createDebris() {
        const debrisMaterial = new THREE.MeshStandardMaterial({
            color: 0x795548,
            roughness: 0.9,
            metalness: 0.1
        });

        // Create random debris pieces
        for (let i = 0; i < 30; i++) {
            const size = Math.random() * 0.8 + 0.3;
            const geometry = new THREE.BoxGeometry(size, size, size);
            const debris = new THREE.Mesh(geometry, debrisMaterial);
            
            // Position debris around gate area
            debris.position.set(
                Math.random() * 12 - 6,
                Math.random() * 8 + 1,
                Math.random() * 3 - 1.5
            );
            
            // Add physics
            this.game.physics.createPhysicsBody(debris, {
                mass: size * 2,
                useGravity: true,
                bounce: 0.4,
                useAirResistance: true
            });
            
            // Add initial velocity
            const force = new THREE.Vector3(
                Math.random() * 15 - 7.5,
                Math.random() * 20 + 10,
                Math.random() * 15 - 7.5
            );
            this.game.physics.applyImpulse(debris, force);
            
            // Add rotation
            const torque = new THREE.Vector3(
                Math.random() * 3 - 1.5,
                Math.random() * 3 - 1.5,
                Math.random() * 3 - 1.5
            );
            this.game.physics.applyAngularImpulse(debris, torque);
            
            this.debris.push(debris);
            this.mesh.add(debris);
        }
    }

    destroy() {
        this.isDestroyed = true;
        
        // Create explosion effect
        this.createExplosionEffect();
        
        // Create debris pieces
        this.createDebris();
        
        // Remove gate frame
        this.mesh.remove(this.gateFrame);
        
        // Add physics to pillars for collapse
        this.addPillarPhysics();
    }

    createExplosionEffect() {
        // Create particle system for explosion
        const particleCount = 100;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i += 3) {
            // Random position within gate area
            positions[i] = Math.random() * 12 - 6;
            positions[i + 1] = Math.random() * 10;
            positions[i + 2] = Math.random() * 2 - 1;
            
            // Orange/red colors for explosion
            colors[i] = Math.random() * 0.5 + 0.5; // R
            colors[i + 1] = Math.random() * 0.3; // G
            colors[i + 2] = 0; // B
        }
        
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });
        
        const particleSystem = new THREE.Points(particles, particleMaterial);
        this.mesh.add(particleSystem);
        
        // Fade out and remove after animation
        setTimeout(() => {
            this.mesh.remove(particleSystem);
        }, 1000);
    }

    addPillarPhysics() {
        // Add physics to pillars for realistic collapse
        this.game.physics.createPhysicsBody(this.leftPillar, {
            mass: 200,
            useGravity: true,
            bounce: 0.1
        });
        
        this.game.physics.createPhysicsBody(this.rightPillar, {
            mass: 200,
            useGravity: true,
            bounce: 0.1
        });
        
        // Add outward and twisting force to pillars
        const leftForce = new THREE.Vector3(-8, 3, Math.random() * 4 - 2);
        const rightForce = new THREE.Vector3(8, 3, Math.random() * 4 - 2);
        
        this.game.physics.applyImpulse(this.leftPillar, leftForce);
        this.game.physics.applyImpulse(this.rightPillar, rightForce);
        
        // Add rotational force
        const leftTorque = new THREE.Vector3(0, 0, 1);
        const rightTorque = new THREE.Vector3(0, 0, -1);
        
        this.game.physics.applyAngularImpulse(this.leftPillar, leftTorque);
        this.game.physics.applyAngularImpulse(this.rightPillar, rightTorque);
    }

    update(deltaTime) {
        // Update debris physics
        if (this.isDestroyed) {
            this.debris.forEach(debris => {
                if (debris.physics) {
                    // Apply additional forces for more dynamic movement
                    const randomForce = new THREE.Vector3(
                        (Math.random() - 0.5) * 0.2,
                        0,
                        (Math.random() - 0.5) * 0.2
                    );
                    this.game.physics.applyImpulse(debris, randomForce);
                }
            });
        } else if (this.health < 40) {
            // Continue shaking when heavily damaged
            this.shake();
        }
    }
} 