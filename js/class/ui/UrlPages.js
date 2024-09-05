import { IUrlPages } from "../interfaces/IUrlPages.js";

export class UrlPages extends IUrlPages {
    constructor() {
        super();
    }

    getPageName() {
        const href = window.location.href;
        const hrefTab = href.split("/");
        const lastHrefTab = hrefTab[hrefTab.length - 1];
        const page = lastHrefTab.replace(".html", "");
        return page;
    }

    boldCurrentPage(page) {
        const container = document.querySelectorAll(".nav__container__page");
        container.forEach((containerPage) => {
            const child = containerPage.children[1];

            if (child.textContent.toLowerCase() === page) {
                child.classList.add("bold");
                containerPage.style.backgroundColor = "rgba(0,0,0,.1)";
                containerPage.children[0].classList.add("bold");
            }
        })
    }

    toggleBarsMenu() {
        document.querySelector("nav").style.display = "flex";
        const bars = document.querySelector(".bars_menu");
    }

    displayMoreProjects() {
        const projects = document.querySelectorAll(".unvisible");
        projects.forEach((project)=>{
            project.classList.toggle("undisplayed");
        });
    }

}