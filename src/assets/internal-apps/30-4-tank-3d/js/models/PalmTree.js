class PalmTree {
    constructor(game) {
        this.game = game;
        
        // Create palm tree group
        this.mesh = new THREE.Group();
        
        // Create trunk and leaves
        this.createTrunk();
        this.createLeaves();
        
        // Add shadows
        this.mesh.traverse(object => {
            if (object instanceof THREE.Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
            }
        });
    }

    createTrunk() {
        // Create trunk segments with slight curve
        const segments = 5;
        const segmentHeight = 1.5;
        const trunkMaterial = new THREE.MeshStandardMaterial({
            color: 0x795548,
            roughness: 0.8,
            metalness: 0.2
        });

        for (let i = 0; i < segments; i++) {
            const segmentGeometry = new THREE.CylinderGeometry(
                0.3 - (i * 0.02), // Top radius gets slightly smaller
                0.4 - (i * 0.02), // Bottom radius gets slightly smaller
                segmentHeight,
                8
            );
            const segment = new THREE.Mesh(segmentGeometry, trunkMaterial);
            
            // Position each segment with slight curve
            const curve = Math.sin(i / segments * Math.PI) * 0.3;
            segment.position.set(
                curve,
                i * segmentHeight + segmentHeight/2,
                0
            );
            
            // Rotate each segment slightly
            segment.rotation.x = curve * 0.2;
            
            this.mesh.add(segment);
        }

        // Add trunk texture details
        this.addTrunkDetails();
    }

    addTrunkDetails() {
        const detailMaterial = new THREE.MeshStandardMaterial({
            color: 0x5D4037,
            roughness: 0.9,
            metalness: 0.1
        });

        // Add random bark details
        for (let i = 0; i < 20; i++) {
            const detailGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.1);
            const detail = new THREE.Mesh(detailGeometry, detailMaterial);
            
            // Random position around trunk
            const angle = Math.random() * Math.PI * 2;
            const height = Math.random() * 7;
            const radius = 0.35;
            
            detail.position.set(
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius
            );
            
            detail.rotation.y = angle;
            detail.rotation.x = Math.random() * 0.5 - 0.25;
            
            this.mesh.add(detail);
        }
    }

    createLeaves() {
        const leafMaterial = new THREE.MeshStandardMaterial({
            color: 0x2E7D32,
            roughness: 0.8,
            metalness: 0.2,
            side: THREE.DoubleSide
        });

        // Create leaf clusters at top
        const clusters = 3;
        for (let i = 0; i < clusters; i++) {
            const cluster = this.createLeafCluster(leafMaterial);
            cluster.position.y = 7 + i * 0.5;
            cluster.rotation.y = i * (Math.PI * 2 / clusters);
            this.mesh.add(cluster);
        }
    }

    createLeafCluster(material) {
        const cluster = new THREE.Group();
        
        // Create multiple leaves in a fan pattern
        const leavesCount = 7;
        for (let i = 0; i < leavesCount; i++) {
            const leaf = this.createSingleLeaf(material);
            
            // Arrange leaves in a fan pattern
            const angle = (i - (leavesCount - 1) / 2) * 0.3;
            leaf.rotation.z = angle;
            leaf.rotation.y = Math.random() * 0.2 - 0.1;
            
            cluster.add(leaf);
        }
        
        return cluster;
    }

    createSingleLeaf(material) {
        // Create a curved leaf shape
        const points = [];
        const segments = 10;
        const length = 4;
        const width = 0.3;
        
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            points.push(
                new THREE.Vector3(
                    t * length,
                    Math.sin(t * Math.PI) * width,
                    Math.sin(t * Math.PI * 2) * width * 0.5
                )
            );
        }

        const leafGeometry = new THREE.BufferGeometry();
        const positions = [];
        const indices = [];
        
        // Create leaf mesh by connecting points
        for (let i = 0; i < segments; i++) {
            const p1 = points[i];
            const p2 = points[i + 1];
            
            // Add vertices
            positions.push(
                p1.x, p1.y, p1.z,
                p2.x, p2.y, p2.z,
                p1.x, -p1.y, p1.z,
                p2.x, -p2.y, p2.z
            );
            
            // Add faces
            const baseIndex = i * 4;
            indices.push(
                baseIndex, baseIndex + 1, baseIndex + 2,
                baseIndex + 1, baseIndex + 3, baseIndex + 2
            );
        }
        
        leafGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        leafGeometry.setIndex(indices);
        leafGeometry.computeVertexNormals();
        
        return new THREE.Mesh(leafGeometry, material);
    }

    update(deltaTime) {
        // Add gentle swaying animation
        const time = Date.now() * 0.001;
        this.mesh.children.forEach((child, index) => {
            if (index >= 5) { // Only animate leaves, not trunk
                child.rotation.x = Math.sin(time + index) * 0.1;
                child.rotation.z = Math.cos(time + index) * 0.1;
            }
        });
    }
} 