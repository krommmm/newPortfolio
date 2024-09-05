export class IDarkMode {
    constructor() {
        if (new.target === IDarkMode) {
            throw TypeError("Cannot construct IDarkMode instance directly");
        }
    }

    toggleDarkTheme() {
        throw Error("toggleDarkTheme isn't implemented yet");
    }

    launchDarkTheme() {
        throw Error("launchDarkTheme isn't implemented yet");
    }

    dark() {
        throw Error("dark isn't implemented yet");
    }

    light() {
        throw Error("light isn't implemented yet");
    }


}