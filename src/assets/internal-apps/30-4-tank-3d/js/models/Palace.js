class Palace {
    constructor(game) {
        this.game = game;
        
        // Create palace group
        this.mesh = new THREE.Group();
        
        // Create palace parts
        this.createBase();
        this.createMainBuilding();
        this.createRoof();
        this.createWindows();
        this.createFountain();
        this.createPalmTrees();
        this.createFence();
        
        // Add shadows
        this.mesh.traverse(object => {
            if (object instanceof THREE.Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
            }
        });
        
        // Add collider
        this.game.collisionDetector.createCollider(this, 'box', {
            size: new THREE.Vector3(30, 20, 40)
        });
    }

    createBase() {
        // Foundation
        const baseGeometry = new THREE.BoxGeometry(40, 2, 50);
        const baseMaterial = new THREE.MeshStandardMaterial({
            color: 0x9E9E9E,
            roughness: 0.7,
            metalness: 0.3
        });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = 1;
        this.mesh.add(base);

        // Steps
        const stepsGroup = new THREE.Group();
        for (let i = 0; i < 3; i++) {
            const stepGeometry = new THREE.BoxGeometry(20, 0.5, 3);
            const step = new THREE.Mesh(stepGeometry, baseMaterial);
            step.position.set(0, i * 0.5, 22);
            stepsGroup.add(step);
        }
        this.mesh.add(stepsGroup);
    }

    createMainBuilding() {
        // Main building material
        const buildingMaterial = new THREE.MeshStandardMaterial({
            color: 0xF5F5F5,
            roughness: 0.5,
            metalness: 0.2
        });

        // Main structure
        const mainGeometry = new THREE.BoxGeometry(30, 15, 40);
        const mainBuilding = new THREE.Mesh(mainGeometry, buildingMaterial);
        mainBuilding.position.y = 9.5;
        this.mesh.add(mainBuilding);

        // Front columns
        const columnGeometry = new THREE.BoxGeometry(2, 15, 2);
        for (let x = -12; x <= 12; x += 8) {
            const column = new THREE.Mesh(columnGeometry, buildingMaterial);
            column.position.set(x, 9.5, 19);
            this.mesh.add(column);
        }

        // Side details
        const sideDetailGeometry = new THREE.BoxGeometry(1, 15, 30);
        const leftDetail = new THREE.Mesh(sideDetailGeometry, buildingMaterial);
        leftDetail.position.set(-15, 9.5, 0);
        this.mesh.add(leftDetail);

        const rightDetail = new THREE.Mesh(sideDetailGeometry, buildingMaterial);
        rightDetail.position.set(15, 9.5, 0);
        this.mesh.add(rightDetail);
    }

    createRoof() {
        // Top floor
        const topFloorGeometry = new THREE.BoxGeometry(25, 5, 35);
        const topFloorMaterial = new THREE.MeshStandardMaterial({
            color: 0xE0E0E0,
            roughness: 0.6,
            metalness: 0.2
        });
        const topFloor = new THREE.Mesh(topFloorGeometry, topFloorMaterial);
        topFloor.position.y = 19.5;
        this.mesh.add(topFloor);

        // Flag pole
        const poleGeometry = new THREE.CylinderGeometry(0.2, 0.2, 8);
        const poleMaterial = new THREE.MeshStandardMaterial({
            color: 0x757575,
            metalness: 0.8
        });
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.set(0, 26, 0);
        this.mesh.add(pole);

        // Vietnamese flag
        const flagGeometry = new THREE.PlaneGeometry(4, 2.4);
        const flagMaterial = new THREE.MeshStandardMaterial({
            color: 0xFF0000,
            side: THREE.DoubleSide
        });
        const flag = new THREE.Mesh(flagGeometry, flagMaterial);
        flag.position.set(2, 25, 0);
        flag.rotation.y = Math.PI / 2;
        this.mesh.add(flag);

        // Yellow star
        const starGeometry = new THREE.BufferGeometry();
        const starPoints = [];
        for (let i = 0; i < 5; i++) {
            const angle = (i * 4 * Math.PI) / 5;
            starPoints.push(
                Math.cos(angle) * 0.5,
                Math.sin(angle) * 0.5,
                0
            );
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPoints, 3));
        const starMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFEB3B,
            side: THREE.DoubleSide
        });
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.set(2, 25, 0.01);
        star.rotation.y = Math.PI / 2;
        this.mesh.add(star);
    }

    createWindows() {
        const windowMaterial = new THREE.MeshStandardMaterial({
            color: 0xBDBDBD,
            metalness: 0.8,
            roughness: 0.2
        });

        // Create window rows
        for (let y = 0; y < 3; y++) {
            for (let x = -12; x <= 12; x += 4) {
                // Front windows
                const frontWindow = this.createWindowPanel(windowMaterial);
                frontWindow.position.set(x, 6 + y * 4, 19.6);
                this.mesh.add(frontWindow);

                // Back windows
                const backWindow = this.createWindowPanel(windowMaterial);
                backWindow.position.set(x, 6 + y * 4, -19.6);
                this.mesh.add(backWindow);

                // Side windows
                if (x === -12 || x === 12) {
                    for (let z = -15; z <= 15; z += 4) {
                        const sideWindow = this.createWindowPanel(windowMaterial);
                        sideWindow.position.set(x * 1.3, 6 + y * 4, z);
                        sideWindow.rotation.y = Math.PI / 2;
                        this.mesh.add(sideWindow);
                    }
                }
            }
        }
    }

    createWindowPanel(material) {
        const panel = new THREE.Group();
        
        // Window frame
        const frameGeometry = new THREE.BoxGeometry(3, 3, 0.2);
        const frame = new THREE.Mesh(frameGeometry, material);
        panel.add(frame);

        // Window divisions
        const divisionGeometry = new THREE.BoxGeometry(0.2, 3, 0.3);
        const verticalDivision = new THREE.Mesh(divisionGeometry, material);
        panel.add(verticalDivision);

        const horizontalGeometry = new THREE.BoxGeometry(3, 0.2, 0.3);
        const horizontalDivision = new THREE.Mesh(horizontalGeometry, material);
        panel.add(horizontalDivision);

        return panel;
    }

    createFountain() {
        // Fountain base
        const baseGeometry = new THREE.CylinderGeometry(5, 5, 1, 32);
        const baseMaterial = new THREE.MeshStandardMaterial({
            color: 0x9E9E9E,
            roughness: 0.7
        });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.set(0, 0.5, 23);
        this.mesh.add(base);

        // Water pool
        const poolGeometry = new THREE.CylinderGeometry(4, 4, 0.5, 32);
        const poolMaterial = new THREE.MeshStandardMaterial({
            color: 0x2196F3,
            roughness: 0.2,
            metalness: 0.8
        });
        const pool = new THREE.Mesh(poolGeometry, poolMaterial);
        pool.position.set(0, 1, 23);
        this.mesh.add(pool);

        // Center pillar
        const pillarGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 16);
        const pillar = new THREE.Mesh(pillarGeometry, baseMaterial);
        pillar.position.set(0, 2.5, 23);
        this.mesh.add(pillar);
    }

    createPalmTrees() {
        // Create palm trees on both sides
        const positions = [
            [-18, 0, -20],
            [-18, 0, -10],
            [-18, 0, 0],
            [-18, 0, 10],
            [-18, 0, 20],
            [18, 0, -20],
            [18, 0, -10],
            [18, 0, 0],
            [18, 0, 10],
            [18, 0, 20]
        ];

        positions.forEach(pos => {
            const palmTree = new PalmTree(this.game);
            palmTree.mesh.position.set(...pos);
            this.mesh.add(palmTree.mesh);
        });
    }

    createFence() {
        // Fence material
        const fenceMaterial = new THREE.MeshStandardMaterial({
            color: 0x424242,
            roughness: 0.7,
            metalness: 0.3
        });

        // Create fence group
        const fenceGroup = new THREE.Group();
        
        // Fence dimensions
        const fenceWidth = 50;  // Total width of the fence
        const fenceLength = 60;  // Total length of the fence
        const fenceHeight = 4;   // Height of the fence
        const barSpacing = 2;    // Space between vertical bars
        const barWidth = 0.2;    // Width of each bar
        const barDepth = 0.2;    // Depth of each bar

        // Create horizontal bars
        const horizontalGeometry = new THREE.BoxGeometry(fenceWidth, barWidth, barDepth);
        const topBar = new THREE.Mesh(horizontalGeometry, fenceMaterial);
        const bottomBar = new THREE.Mesh(horizontalGeometry.clone(), fenceMaterial);
        const middleBar = new THREE.Mesh(horizontalGeometry.clone(), fenceMaterial);

        topBar.position.y = fenceHeight;
        middleBar.position.y = fenceHeight / 2;
        bottomBar.position.y = 0;

        fenceGroup.add(topBar);
        fenceGroup.add(middleBar);
        fenceGroup.add(bottomBar);

        // Create vertical bars
        const verticalGeometry = new THREE.BoxGeometry(barWidth, fenceHeight, barDepth);
        const numBars = Math.floor(fenceWidth / barSpacing);

        for (let i = 0; i < numBars; i++) {
            const x = (i * barSpacing) - (fenceWidth / 2);
            
            // Skip the gate area
            if (x > -5 && x < 5) continue;
            
            const bar = new THREE.Mesh(verticalGeometry, fenceMaterial);
            bar.position.set(x, fenceHeight / 2, 0);
            fenceGroup.add(bar);

            // Add decorative spike on top
            const spikeGeometry = new THREE.ConeGeometry(0.2, 0.5, 4);
            const spike = new THREE.Mesh(spikeGeometry, fenceMaterial);
            spike.position.set(x, fenceHeight + 0.25, 0);
            fenceGroup.add(spike);
        }

        // Create fence posts
        const postGeometry = new THREE.BoxGeometry(0.6, fenceHeight + 1, 0.6);
        const postPositions = [
            [-fenceWidth/2, 0, 0],  // Left corner
            [fenceWidth/2, 0, 0],   // Right corner
            [-5, 0, 0],             // Left gate post
            [5, 0, 0]               // Right gate post
        ];

        postPositions.forEach(pos => {
            const post = new THREE.Mesh(postGeometry, fenceMaterial);
            post.position.set(pos[0], (fenceHeight + 1) / 2, pos[2]);
            fenceGroup.add(post);

            // Add post cap
            const capGeometry = new THREE.BoxGeometry(0.8, 0.2, 0.8);
            const cap = new THREE.Mesh(capGeometry, fenceMaterial);
            cap.position.set(pos[0], fenceHeight + 0.5, pos[2]);
            fenceGroup.add(cap);
        });

        // Create and add the front fence
        const frontFence = fenceGroup.clone();
        frontFence.position.z = fenceLength / 2;
        this.mesh.add(frontFence);

        // Create and add the back fence
        const backFence = fenceGroup.clone();
        backFence.position.z = -fenceLength / 2;
        this.mesh.add(backFence);

        // Create side fences
        const sideFenceGeometry = new THREE.BoxGeometry(barWidth, fenceHeight, fenceLength);
        const leftFence = new THREE.Mesh(sideFenceGeometry, fenceMaterial);
        const rightFence = new THREE.Mesh(sideFenceGeometry.clone(), fenceMaterial);

        leftFence.position.set(-fenceWidth/2, fenceHeight/2, 0);
        rightFence.position.set(fenceWidth/2, fenceHeight/2, 0);

        this.mesh.add(leftFence);
        this.mesh.add(rightFence);
    }

    update(deltaTime) {
        // Add any animation or update logic here
    }
} 