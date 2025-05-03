class Ground {
    constructor(game) {
        this.game = game;
        
        // Create ground geometry
        const geometry = new THREE.PlaneGeometry(200, 200, 32, 32);
        
        // Create ground material with grass texture
        const material = new THREE.MeshStandardMaterial({
            color: 0x9E9E9E,
            roughness: 0.8,
            metalness: 0.2
        });
        
        // Create mesh
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = -Math.PI / 2; // Rotate to be horizontal
        this.mesh.receiveShadow = true;
        
        // Add grid lines
        this.addGridLines();
    }

    addGridLines() {
        // Create grid helper
        const gridHelper = new THREE.GridHelper(200, 20, 0x000000, 0x000000);
        gridHelper.material.opacity = 0.2;
        gridHelper.material.transparent = true;
        this.mesh.add(gridHelper);

        // Add some random variations to create terrain effect
        const vertices = this.mesh.geometry.attributes.position.array;
        for (let i = 0; i < vertices.length; i += 3) {
            if (i > 0) { // Don't modify the center point
                vertices[i + 1] = Math.random() * 0.3; // Small random height variations
            }
        }
        this.mesh.geometry.attributes.position.needsUpdate = true;
        
        // Update normals for proper lighting
        this.mesh.geometry.computeVertexNormals();
    }

    update(deltaTime) {
        // Ground doesn't need updates
    }
} 