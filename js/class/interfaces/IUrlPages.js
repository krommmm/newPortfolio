export class IUrlPages {
    constructor() {
        if (new.target === IUrlPages) {
            throw TypeError("Cannot construct IUrlPages instance directly");
        }
    }

    getPageName() {
        throw Error("getPageName isn't implemented yet");
    }



}