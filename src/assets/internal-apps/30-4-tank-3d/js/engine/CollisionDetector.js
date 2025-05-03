class CollisionDetector {
    constructor() {
        this.raycaster = new THREE.Raycaster();
    }

    checkCollisions(objects) {
        for (let i = 0; i < objects.length; i++) {
            const obj1 = objects[i];
            if (!obj1.collider) continue;

            for (let j = i + 1; j < objects.length; j++) {
                const obj2 = objects[j];
                if (!obj2.collider) continue;

                // Skip if objects are not in the same collision layers
                if (!(obj1.collider.layer & obj2.collider.layer)) continue;

                // Check collision based on collider type
                if (this.testCollision(obj1, obj2)) {
                    // Call collision handlers if they exist
                    if (obj1.onCollision) obj1.onCollision(obj2);
                    if (obj2.onCollision) obj2.onCollision(obj1);
                }
            }
        }
    }

    testCollision(obj1, obj2) {
        switch (obj1.collider.type) {
            case 'sphere':
                return obj2.collider.type === 'sphere' ? 
                    this.sphereSphereCollision(obj1, obj2) :
                    this.sphereBoxCollision(obj1, obj2);
            
            case 'box':
                return obj2.collider.type === 'sphere' ?
                    this.sphereBoxCollision(obj2, obj1) :
                    this.boxBoxCollision(obj1, obj2);
            
            default:
                return false;
        }
    }

    sphereSphereCollision(obj1, obj2) {
        const distance = obj1.mesh.position.distanceTo(obj2.mesh.position);
        return distance < (obj1.collider.radius + obj2.collider.radius);
    }

    boxBoxCollision(obj1, obj2) {
        const box1 = new THREE.Box3().setFromObject(obj1.mesh);
        const box2 = new THREE.Box3().setFromObject(obj2.mesh);
        return box1.intersectsBox(box2);
    }

    sphereBoxCollision(sphere, box) {
        // Get box bounds
        const boxBounds = new THREE.Box3().setFromObject(box.mesh);
        
        // Get closest point on box to sphere center
        const closestPoint = new THREE.Vector3();
        closestPoint.copy(sphere.mesh.position);
        
        // Clamp to box bounds
        closestPoint.x = Math.max(boxBounds.min.x, Math.min(boxBounds.max.x, closestPoint.x));
        closestPoint.y = Math.max(boxBounds.min.y, Math.min(boxBounds.max.y, closestPoint.y));
        closestPoint.z = Math.max(boxBounds.min.z, Math.min(boxBounds.max.z, closestPoint.z));
        
        // Check if distance to closest point is less than sphere radius
        const distance = sphere.mesh.position.distanceTo(closestPoint);
        return distance < sphere.collider.radius;
    }

    // Ray casting methods
    raycast(origin, direction, objects, maxDistance = Infinity) {
        this.raycaster.set(origin, direction);
        const intersects = this.raycaster.intersectObjects(
            objects.map(obj => obj.mesh),
            false
        );
        
        if (intersects.length > 0 && intersects[0].distance <= maxDistance) {
            // Find the corresponding game object
            const hitObject = objects.find(obj => obj.mesh === intersects[0].object);
            return {
                object: hitObject,
                point: intersects[0].point,
                normal: intersects[0].face ? intersects[0].face.normal : null,
                distance: intersects[0].distance
            };
        }
        
        return null;
    }

    // Create collision properties for an object
    createCollider(object, type, options = {}) {
        object.collider = {
            type: type,
            layer: options.layer || 1, // Default to layer 1
            isTrigger: options.isTrigger || false
        };

        switch (type) {
            case 'sphere':
                object.collider.radius = options.radius || 1;
                break;
            
            case 'box':
                object.collider.size = options.size || new THREE.Vector3(1, 1, 1);
                break;
        }
    }

    // Remove collision properties from an object
    removeCollider(object) {
        delete object.collider;
    }
} 