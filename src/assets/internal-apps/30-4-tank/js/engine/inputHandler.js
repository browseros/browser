class InputHandler {
    constructor() {
        this.keys = {};
        this.mouseX = 0;
        this.mouseY = 0;
        this.mousePressed = false;

        // Keyboard event listeners
        window.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });

        // Mouse event listeners
        window.addEventListener('mousemove', (e) => {
            const rect = e.target.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        });

        window.addEventListener('mousedown', () => {
            this.mousePressed = true;
        });

        window.addEventListener('mouseup', () => {
            this.mousePressed = false;
        });
    }

    isKeyPressed(keyCode) {
        return this.keys[keyCode] || false;
    }

    getMousePosition() {
        return {
            x: this.mouseX,
            y: this.mouseY
        };
    }

    isMousePressed() {
        return this.mousePressed;
    }

    reset() {
        this.keys = {};
        this.mousePressed = false;
    }
} 