class InputHandler {
    constructor() {
        this.keys = {};
        this.mouse = {
            x: 0,
            y: 0,
            isDown: false
        };
        
        // Bind methods
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        
        // Add event listeners
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mousedown', this.onMouseDown);
        window.addEventListener('mouseup', this.onMouseUp);
    }

    onKeyDown(event) {
        this.keys[event.code] = true;
    }

    onKeyUp(event) {
        this.keys[event.code] = false;
    }

    onMouseMove(event) {
        // Convert mouse coordinates to normalized device coordinates (-1 to +1)
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    onMouseDown(event) {
        this.mouse.isDown = true;
    }

    onMouseUp(event) {
        this.mouse.isDown = false;
    }

    isKeyPressed(keyCode) {
        return this.keys[keyCode] === true;
    }

    // Tank movement controls
    getTankControls() {
        return {
            forward: this.isKeyPressed('KeyW'),
            backward: this.isKeyPressed('KeyS'),
            left: this.isKeyPressed('KeyA'),
            right: this.isKeyPressed('KeyD'),
            turretLeft: this.isKeyPressed('KeyQ'),
            turretRight: this.isKeyPressed('KeyE'),
            fire: this.mouse.isDown
        };
    }

    // Camera controls
    getCameraControls() {
        return {
            rotateLeft: this.isKeyPressed('ArrowLeft'),
            rotateRight: this.isKeyPressed('ArrowRight'),
            zoomIn: this.isKeyPressed('ArrowUp'),
            zoomOut: this.isKeyPressed('ArrowDown')
        };
    }

    // Clean up
    destroy() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mousedown', this.onMouseDown);
        window.removeEventListener('mouseup', this.onMouseUp);
    }
} 