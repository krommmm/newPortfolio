import { IUrlPages } from "../interfaces/IUrlPages.js";
import { projects } from "../../data/projects.js";

export class UrlPages extends IUrlPages {
    constructor() {
        super();
        this.boolShowMore = false;
        this.container = document.querySelector(".projects__presentation__container");
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
        projects.forEach((project) => {
            project.classList.toggle("undisplayed");
        });
    }

    toggleShowMore() {
        const showMore = document.querySelector(".showMore");
        this.boolShowMore = !this.boolShowMore;
        if (this.boolShowMore) {
            showMore.textContent = "Moins de projets";
        } else {
            showMore.textContent = "Plus de projets";
        }

    }

    displayProjects(){
        this.container.innerHTML = "";
      projects.forEach((project)=>{
        const fiche = document.createElement("a");
        fiche.href=`./project-focus.html?id=${project.id}`;
        fiche.className="projects__presentation__container__project";

        const ficheLeft = document.createElement("div");
            const ficheLeftImg = document.createElement("div");
            ficheLeftImg.className="projects__presentation__container__project--img";
                const imgProject = document.createElement("img");
                imgProject.src= `../assets/pictures/projets/${project.img}`;
                ficheLeftImg.appendChild(imgProject);
            const ficheLeftName = document.createElement("div");
            ficheLeftName.className="projects__presentation__container__project--name";
                 const ficheLeftNameLeft = document.createElement("div");
                    const circle = document.createElement("div");
                    circle.className=`circle ${project.isOnline? "circle-green" : "circle-red"}`;
                    const projectName = document.createElement("p");
                    projectName.textContent = project.name;
                ficheLeftNameLeft.appendChild(circle);
                ficheLeftNameLeft.appendChild(projectName);
            ficheLeftName.appendChild(ficheLeftNameLeft);

            const technos = document.createElement("div");
            technos.className="projects__presentation__container__project--technos";
            project.techno_logos.forEach((techno)=>{
                const technoImg = document.createElement("img");
                technoImg.src=`../assets/pictures/icons/${techno}`;
                technos.appendChild(technoImg);
            });

            ficheLeft.appendChild(ficheLeftImg);
            ficheLeft.appendChild(ficheLeftName);
            ficheLeft.appendChild(technos);


            //description ...
            const buttonA = document.createElement("a");
            buttonA.href=`./project-focus.html?id=${project.id}`;
                const btn = document.createElement("div");
                btn.className=`btn btn-blue`;
                btn.textContent = "Would you like to know more ...";
                buttonA.appendChild(btn);

                fiche.appendChild(ficheLeft);
                fiche.appendChild(buttonA);

         this.container.appendChild(fiche);
      });
    }

}