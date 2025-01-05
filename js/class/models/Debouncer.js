export class Debouncer {
    constructor(timeout) {
        this.timeout = timeout; 
        this.timer = null;
    }

    execute(callback, ...args) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => callback(...args), this.timeout);
    }
}

