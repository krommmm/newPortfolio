import { IDarkMode } from "../interfaces/IDarkMode.js";

export class DarkMode extends IDarkMode {
    constructor() {
        super();
    }

    toggleDarkTheme(mode) {
        sessionStorage.setItem("portfolio_darkMode", JSON.stringify(mode));
    }

    launchDarkTheme(mode) {
        mode ? this.dark() : this.light();
        this.moveBall();
    }

    dark() {
        const filter = document.querySelector("div[name='filter']");
        filter.classList.add("theme");
        document.querySelector(".dark").style.backgroundColor="rgba(0,0,0,.5)";
    }

    light() {
        const filter = document.querySelector("div[name='filter']");
        filter.classList.remove("theme");
        document.querySelector(".dark").style.backgroundColor="rgb(4, 162, 159)";
    }

    moveBall(){
        const ball = document.querySelector(".darkMode");
        ball.classList.toggle("move");
    }


}