class PhysicsEngine {
    constructor() {
        this.gravity = -9.81;
        this.objects = [];
        this.groundY = 0;
    }

    addObject(object) {
        if (!this.objects.includes(object)) {
            this.objects.push(object);
        }
    }

    removeObject(object) {
        const index = this.objects.indexOf(object);
        if (index !== -1) {
            this.objects.splice(index, 1);
        }
    }

    update(deltaTime) {
        this.objects.forEach(object => {
            if (object.physics) {
                // Apply gravity if object is affected by it
                if (object.physics.useGravity) {
                    object.physics.velocity.y += this.gravity * deltaTime;
                }

                // Update position based on velocity
                object.mesh.position.x += object.physics.velocity.x * deltaTime;
                object.mesh.position.y += object.physics.velocity.y * deltaTime;
                object.mesh.position.z += object.physics.velocity.z * deltaTime;

                // Apply rotation based on angular velocity
                if (object.physics.angularVelocity) {
                    object.mesh.rotation.x += object.physics.angularVelocity.x * deltaTime;
                    object.mesh.rotation.y += object.physics.angularVelocity.y * deltaTime;
                    object.mesh.rotation.z += object.physics.angularVelocity.z * deltaTime;
                }

                // Ground collision
                if (object.physics.useGravity && object.mesh.position.y < this.groundY + object.physics.boundingRadius) {
                    object.mesh.position.y = this.groundY + object.physics.boundingRadius;
                    
                    if (object.physics.bounce) {
                        // Bounce with energy loss
                        object.physics.velocity.y = -object.physics.velocity.y * object.physics.bounce;
                        
                        // Apply friction to horizontal velocity
                        object.physics.velocity.x *= 0.8;
                        object.physics.velocity.z *= 0.8;
                        
                        // Stop very small bounces
                        if (Math.abs(object.physics.velocity.y) < 0.1) {
                            object.physics.velocity.y = 0;
                        }
                    } else {
                        object.physics.velocity.y = 0;
                    }
                }

                // Air resistance
                if (object.physics.useAirResistance) {
                    const drag = 0.99;
                    object.physics.velocity.x *= drag;
                    object.physics.velocity.y *= drag;
                    object.physics.velocity.z *= drag;
                    
                    if (object.physics.angularVelocity) {
                        object.physics.angularVelocity.x *= drag;
                        object.physics.angularVelocity.y *= drag;
                        object.physics.angularVelocity.z *= drag;
                    }
                }
            }
        });
    }

    // Apply an impulse force to an object
    applyImpulse(object, force) {
        if (object.physics) {
            object.physics.velocity.x += force.x;
            object.physics.velocity.y += force.y;
            object.physics.velocity.z += force.z;
        }
    }

    // Apply an angular impulse to an object
    applyAngularImpulse(object, torque) {
        if (object.physics && object.physics.angularVelocity) {
            object.physics.angularVelocity.x += torque.x;
            object.physics.angularVelocity.y += torque.y;
            object.physics.angularVelocity.z += torque.z;
        }
    }

    // Create physics properties for an object
    createPhysicsBody(object, options = {}) {
        object.physics = {
            velocity: new THREE.Vector3(0, 0, 0),
            angularVelocity: new THREE.Vector3(0, 0, 0),
            useGravity: options.useGravity || false,
            useAirResistance: options.useAirResistance || false,
            bounce: options.bounce || 0,
            mass: options.mass || 1,
            boundingRadius: options.boundingRadius || 1
        };
    }

    // Remove physics properties from an object
    removePhysicsBody(object) {
        delete object.physics;
        this.removeObject(object);
    }
} 