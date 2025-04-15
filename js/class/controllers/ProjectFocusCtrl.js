export class ProjectFocusCtrl {
    constructor(urlPages, carousselle) {
        this.urlPages = urlPages;
        this.carousselle = carousselle;
        this.init();
    }

    init() {
        this.displayProject();
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("carrouselleLeft")) {
            this.carousselle.turnLeft();
        } else if (e.target.classList.contains("carrouselleRight")) {
            this.carousselle.turnRight();
        }
    }

    displayProject() {
        this.urlPages.displayProject();
    }




}