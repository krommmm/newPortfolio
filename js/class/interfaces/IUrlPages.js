export class IUrlPages {
    constructor() {
        if (new.target === IUrlPages) {
            throw TypeError("Cannot construct IUrlPages instance directly");
        }
    }

    getPageName() {
        throw Error("getPageName isn't implemented yet");
    }


    boldCurrentPage(page) {
        throw Error("boldCurrentPage isn't implemented yet");
    }

    toggleBarsMenu() {
        throw Error("toggleBarsMenu isn't implemented yet");
    }

    displayMoreProjects() {
        throw Error("displayMoreProjects isn't implemented yet");
    }
}