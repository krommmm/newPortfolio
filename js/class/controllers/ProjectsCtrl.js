export class ProjectsCtrl {
    constructor(urlPages) {
        this.urlPages = urlPages;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("showMore")) {
            this.displayMoreProjects();
        }
    }

    displayMoreProjects() {
     this.urlPages.displayMoreProjects();
    }


}