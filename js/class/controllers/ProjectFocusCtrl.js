export class ProjectFocusCtrl{
    constructor(urlPages) {
        this.urlPages = urlPages;
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
        if (e.target.classList.contains("showMore")) { 
            // this.displayMoreProjects();  
        }
    }

    displayProject() {
        this.urlPages.displayProject();
    }

 


}