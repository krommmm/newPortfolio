export class ProjectsCtrl {
    constructor() {
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
        const projects = document.querySelectorAll(".unvisible");
        projects.forEach((project)=>{
            project.classList.toggle("undisplayed");
        });
    }


}