export class ContactCtrl {
    constructor(copyInfos) {
        this.copyInfos = copyInfos;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("email")) {
            this.getInfo(e);
            this.displayWhatYouGet(e);
        } else if (e.target.classList.contains("phoneNumber")) {
            this.getInfo(e);
            this.displayWhatYouGet(e);
        }
    }

    getInfo(e) {
        const info = this.copyInfos.getInfo(e);
        this.copyInfos.copyText(info);
    }

    displayWhatYouGet(e) {
        const info = this.copyInfos.getInfo(e);
        this.copyInfos.displayCopied();
    }

}