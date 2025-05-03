class Palace extends GameObject {
    constructor(game) {
        // Place palace at the center-right of the screen
        super(game, 
            game.width - 300, // Move palace more to left to show full structure
            game.height/2 - 150,
            260,  // Make palace wider
            300   // Make palace taller
        );
        this.health = 100;
        this.isDestroyed = false;
        this.gateHealth = 100;
        this.cracks = [];
        this.gateCollapsed = false;
        this.gateDebris = [];
        this.debrisPhysics = true; // Enable physics for debris
        
        // Create palace shape
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.drawPalaceShape();
    }

    drawPalaceShape() {
        const ctx = this.canvas.getContext('2d');
        
        // Draw grass area
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(0, 250, this.width, 50);

        // Main building structure - white/gray color
        ctx.fillStyle = '#E0E0E0';
        
        // Base/foundation - darker gray
        ctx.fillStyle = '#9E9E9E';
        ctx.fillRect(20, 150, 220, 100);
        
        // Main building body - white
        ctx.fillStyle = '#F5F5F5';
        ctx.fillRect(20, 50, 220, 100);
        
        // Top floor with flag
        ctx.fillStyle = '#E0E0E0';
        ctx.fillRect(40, 20, 180, 30);
        
        // Vietnamese flag
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(120, 5, 20, 15);
        ctx.fillStyle = '#FFEB3B';
        ctx.beginPath();
        ctx.moveTo(130, 12);
        ctx.lineTo(133, 7);
        ctx.lineTo(136, 12);
        ctx.lineTo(132, 9);
        ctx.lineTo(128, 9);
        ctx.fill();

        // Windows pattern - characteristic of Independence Palace
        ctx.fillStyle = '#FFFFFF';
        for (let y = 60; y < 140; y += 25) {
            for (let x = 30; x < 230; x += 20) {
                ctx.fillRect(x, y, 8, 20);
            }
        }

        // Draw fountain
        ctx.beginPath();
        ctx.arc(130, 220, 15, 0, Math.PI * 2);
        ctx.fillStyle = '#2196F3';
        ctx.fill();
        
        // Fountain spray
        ctx.strokeStyle = '#90CAF9';
        for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
            ctx.beginPath();
            ctx.moveTo(130, 220);
            ctx.lineTo(
                130 + Math.cos(angle) * 20,
                220 + Math.sin(angle) * 20
            );
            ctx.stroke();
        }

        // Draw gate area
        this.drawGate(ctx);
        
        // Draw palm trees
        this.drawPalmTree(ctx, 10, 200);
        this.drawPalmTree(ctx, 230, 200);
    }

    drawPalmTree(ctx, x, y) {
        // Trunk
        ctx.fillStyle = '#795548';
        ctx.fillRect(x, y, 8, 30);
        
        // Leaves
        ctx.fillStyle = '#2E7D32';
        for (let angle = -Math.PI/3; angle <= Math.PI/3; angle += Math.PI/6) {
            ctx.beginPath();
            ctx.moveTo(x + 4, y);
            ctx.lineTo(
                x + 4 + Math.cos(angle) * 20,
                y + Math.sin(angle) * 20
            );
            ctx.lineTo(
                x + 4 + Math.cos(angle) * 25,
                y + Math.sin(angle) * 15
            );
            ctx.closePath();
            ctx.fill();
        }
    }

    drawGate(ctx) {
        if (this.gateCollapsed) {
            // Draw fallen gate debris
            this.gateDebris.forEach(debris => {
                ctx.save();
                ctx.translate(debris.x, debris.y);
                ctx.rotate(debris.rotation);
                ctx.fillStyle = debris.color;
                ctx.fillRect(-debris.width/2, -debris.height/2, debris.width, debris.height);
                ctx.restore();
            });
            return;
        }

        // Gate pillars
        ctx.fillStyle = '#9E9E9E';
        ctx.fillRect(80, 200, 15, 50);  // Left pillar
        ctx.fillRect(165, 200, 15, 50); // Right pillar
        
        // Pillar decorations
        ctx.fillStyle = '#757575';
        ctx.fillRect(75, 190, 25, 10);  // Left pillar top
        ctx.fillRect(160, 190, 25, 10); // Right pillar top
        
        // Gate top arch
        ctx.fillStyle = '#9E9E9E';
        ctx.beginPath();
        ctx.moveTo(80, 200);
        ctx.quadraticCurveTo(130, 180, 180, 200);
        ctx.fill();

        // Main gate
        ctx.fillStyle = '#795548';
        ctx.fillRect(95, 205, 70, 45);

        // Gate details - vertical bars
        ctx.fillStyle = '#5D4037';
        for (let x = 100; x < 160; x += 10) {
            ctx.fillRect(x, 205, 3, 45);
        }

        // Gate details - horizontal bars
        for (let y = 215; y < 245; y += 15) {
            ctx.fillRect(95, y, 70, 2);
        }

        // Draw cracks if gate is damaged
        if (this.cracks.length > 0) {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            this.cracks.forEach(crack => {
                this.drawCrack(ctx, crack.x, crack.y, crack.length, crack.angle);
            });
        }
    }

    drawCrack(ctx, x, y, length, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        
        // Create a jagged line for the crack
        for (let i = 0; i < length; i += 2) {
            const offset = Math.random() * 3 - 1.5;
            ctx.lineTo(i, offset);
        }
        
        ctx.stroke();
        ctx.restore();
    }

    addCrack(x, y) {
        const crack = {
            x: x + Math.random() * 70 + 95,
            y: y + Math.random() * 45 + 205,
            length: Math.random() * 15 + 8,
            angle: Math.random() * Math.PI
        };
        this.cracks.push(crack);
        
        // Redraw palace with new crack
        this.drawPalaceShape();
    }

    collapseGate() {
        if (this.gateCollapsed) return;
        
        this.gateCollapsed = true;
        this.gateDebris = [];
        
        // Create more detailed debris
        const colors = ['#795548', '#5D4037', '#9E9E9E']; // Gate colors
        const numDebris = 15; // More debris pieces
        
        // Gate area coordinates
        const gateArea = {
            x: 95,
            y: 205,
            width: 70,
            height: 45
        };

        // Create main gate pieces
        for (let i = 0; i < numDebris; i++) {
            const debris = {
                x: gateArea.x + Math.random() * gateArea.width,
                y: gateArea.y + Math.random() * gateArea.height,
                width: Math.random() * 15 + 8,
                height: Math.random() * 10 + 5,
                rotation: Math.random() * Math.PI * 2,
                velocityY: -Math.random() * 200, // Initial upward velocity
                velocityX: (Math.random() - 0.5) * 300,
                rotationSpeed: (Math.random() - 0.5) * Math.PI * 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                gravity: 500 // Gravity constant
            };
            this.gateDebris.push(debris);
        }

        // Create pillar pieces
        const pillarPositions = [[80, 200], [165, 200]]; // Left and right pillars
        pillarPositions.forEach(pos => {
            for (let i = 0; i < 5; i++) {
                const debris = {
                    x: pos[0],
                    y: pos[1] + i * 10,
                    width: 15,
                    height: 10,
                    rotation: Math.random() * Math.PI * 0.5,
                    velocityY: -Math.random() * 150,
                    velocityX: (pos[0] < 100 ? -1 : 1) * (Math.random() * 100 + 50),
                    rotationSpeed: (Math.random() - 0.5) * Math.PI,
                    color: '#9E9E9E',
                    gravity: 500
                };
                this.gateDebris.push(debris);
            }
        });
        
        // Play destruction sound
        this.game.soundManager.play('explosion');
        
        // Screen shake effect
        if (this.game.camera && typeof this.game.camera.shake === 'function') {
            this.game.camera.shake(1.5, 15);
        }
    }

    update(deltaTime) {
        if (this.gateCollapsed && this.debrisPhysics) {
            // Update debris physics
            this.gateDebris.forEach(debris => {
                // Apply gravity
                debris.velocityY += debris.gravity * deltaTime;
                
                // Update position
                debris.x += debris.velocityX * deltaTime;
                debris.y += debris.velocityY * deltaTime;
                debris.rotation += debris.rotationSpeed * deltaTime;
                
                // Ground collision with bounce
                if (debris.y > 250) { // Ground level
                    debris.y = 250;
                    debris.velocityY *= -0.4; // Bounce factor
                    debris.velocityX *= 0.8; // Friction
                    debris.rotationSpeed *= 0.9; // Rotation damping
                    
                    // Stop very small movements
                    if (Math.abs(debris.velocityY) < 50) {
                        debris.velocityY = 0;
                    }
                }
                
                // Slow down horizontal movement
                debris.velocityX *= (1 - Math.min(1, deltaTime * 2));
                
                // Dampen rotation
                debris.rotationSpeed *= (1 - Math.min(1, deltaTime));
            });
        }
        
        if (this.health <= 0 && !this.isDestroyed) {
            this.destroy();
        }
    }

    render(ctx) {
        // Draw palace
        ctx.drawImage(this.canvas, this.x, this.y);

        // Draw health bar
        const healthBarWidth = 100;
        const healthBarHeight = 10;
        const healthBarX = this.x + (this.width - healthBarWidth) / 2;
        const healthBarY = this.y - 20;

        // Background
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

        // Health
        ctx.fillStyle = `rgb(${255 - (this.health * 2.55)}, ${this.health * 2.55}, 0)`;
        ctx.fillRect(
            healthBarX,
            healthBarY,
            healthBarWidth * (this.health / 100),
            healthBarHeight
        );

        // Gate health bar
        const gateHealthBarY = this.y + 145;
        
        // Background
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(healthBarX, gateHealthBarY, healthBarWidth, healthBarHeight);

        // Health
        ctx.fillStyle = `rgb(${255 - (this.gateHealth * 2.55)}, ${this.gateHealth * 2.55}, 0)`;
        ctx.fillRect(
            healthBarX,
            gateHealthBarY,
            healthBarWidth * (this.gateHealth / 100),
            healthBarHeight
        );
    }

    takeDamage(amount) {
        // Check if tank is hitting the gate area
        const gateArea = {
            x: this.x + 50,
            y: this.y + 150,
            width: 60,
            height: 50
        };

        const tank = this.game.currentState.tank;
        const tankBounds = tank.getBounds();

        if (tankBounds.x < gateArea.x + gateArea.width &&
            tankBounds.x + tankBounds.width > gateArea.x &&
            tankBounds.y < gateArea.y + gateArea.height &&
            tankBounds.y + tankBounds.height > gateArea.y) {
            
            // Tank is hitting the gate
            this.gateHealth = Math.max(0, this.gateHealth - amount * 2);
            
            // Add cracks before collapse
            if (this.gateHealth < 80 && this.cracks.length < 8) {
                this.addCrack(gateArea.x - this.x, gateArea.y - this.y);
            }
            
            // Collapse gate when health reaches 0
            if (this.gateHealth <= 0 && !this.gateCollapsed) {
                this.collapseGate();
            }
            
            // Screen shake on hit
            if (this.game.camera && typeof this.game.camera.shake === 'function') {
                this.game.camera.shake(0.3, 3);
            }
        } else {
            // Normal damage to palace
            this.health = Math.max(0, this.health - amount);
        }
    }

    destroy() {
        super.destroy();
        this.isDestroyed = true;
        this.game.soundManager.play('explosion');
        
        // Create multiple explosions
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                new Explosion(
                    this.game,
                    this.x + Math.random() * this.width,
                    this.y + Math.random() * this.height
                );
            }, i * 200);
        }

        // Play victory sound after explosions
        setTimeout(() => {
            this.game.soundManager.play('victory');
            this.game.endGame();
        }, 1500);
    }
} 