export class ICopyInfos {
    constructor() {
        if (new.target === ICopyInfos) {
            throw TypeError("Cannot construct ICopyInfos instance directly");
        }
    }

    getInfo() {
        throw error("getInfo isn't implemented yet");
    }

    copyText() {
        throw error("copyEmail isn't implemented yet");
    }

    displayCopied() {
        throw error("displayCopied isn't implemented yet");
    }


}