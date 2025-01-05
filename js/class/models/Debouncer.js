export class Debouncer {
    constructor(delay) {
        this.delay = delay; 
        this.timer = null;
    }

    execute(callback, ...args) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => callback(...args), this.delay);
    }
}

