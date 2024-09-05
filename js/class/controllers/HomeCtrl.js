export class HomeCtrl {
    constructor(darkMode, urlPages) {
        this.mode = JSON.parse(sessionStorage.getItem("portfolio_darkMode")) || false;
        this.darkMode = darkMode;
        this.urlPages = urlPages;
        this.init();
    }

    init() {
        this.bindEvents();
        this.darkMode.launchDarkTheme(this.mode);
        this.definePage();
    }

    bindEvents() {
        document.addEventListener("click", this.handleClicks.bind(this));
    }

    handleClicks(e) {
        if (e.target.classList.contains("darkMode")) {
            this.darkTheme();
        } else if (e.target.classList.contains("bars_menu")) {
            this.toggleBarsMenu();
        }
    }

    darkTheme() {
        this.mode = !this.mode;
        this.darkMode.toggleDarkTheme(this.mode);
        this.darkMode.launchDarkTheme(this.mode);
    }

    definePage() {
        let page = this.urlPages.getPageName();
        if (page === "index") {
            page = "home";
        }
        this.urlPages.boldCurrentPage(page);
    }

    toggleBarsMenu() {
        document.querySelector("nav").style.display="flex";
        const bars = document.querySelector(".bars_menu");
        
    }

}