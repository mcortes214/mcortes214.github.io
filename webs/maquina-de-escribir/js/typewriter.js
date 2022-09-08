class Typewriter {

    constructor({element, backgroundImageUrl, fontSize, lineHeightOffset, color, fontFamily = 'monospace'}){
        this.canvas = element;
        this.backgroundImageUrl = backgroundImageUrl;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.color = color;
        this.lineHeightOffset = lineHeightOffset;
        
        this.context = this.canvas.getContext('2d'),
        this.backgroundImage = document.createElement('img'),
        
        //Prevent writing before loading the background image
        new Promise((resolve) => {
            this.backgroundImage.addEventListener('load', () => {
                this.context.drawImage(this.backgroundImage, 0, 0);
                resolve();
            });
        })
        .then(() => {
            this.canvas.addEventListener('keydown', (e) => {
                this.catchKey(e.key);
            });
        });

        // load background image
        this.backgroundImage.src = this.backgroundImageUrl;

        //Setup font and style
        this.context.font = `${this.fontSize}px ${this.fontFamily}`;
        this.context.fillStyle = this.color;

        //Setup cursor
        this.lineHeight = this.context.measureText(' ').fontBoundingBoxAscent + this.lineHeightOffset;
        this.initialX = 100;
        this.initialY = 100 + this.lineHeight;
        this.cursorX = this.initialX;
        this.cursorY = this.initialY;
    }

    printKey(key) {
        this.context.fillText(key, this.cursorX, this.cursorY);
        this.cursorX += this.context.measureText(key).width;
    }

    backspace() {
        this.cursorX -= this.context.measureText(' ').width;
    }

    newLine() {
        this.cursorX = this.initialX;       //Carriage return
        this.cursorY += this.lineHeight;    //New line
    }

    catchKey(key) {
        switch (key) {
            case 'Enter':
                this.newLine();
                break;
            case 'Backspace':
                this.backspace();
                break;
            case 'Shift':
            case 'Control':
            case 'CapsLock':
            case 'Tab':
            case 'Escape':
            case 'Alt':
            case 'AltGraph':
            case 'ContextMenu':
            case 'Meta':
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
            case 'PageDown':
            case 'PageUp':
            case 'Delete':
            case 'Home':
            case 'Dead':
            case 'End':
                break;
            default:
                this.printKey(key);
        }
    }
}