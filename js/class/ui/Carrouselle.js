export class Carrouselle {
    constructor() {
        this.carrouselle = document.querySelector(".focus__footer__pictures__slideContainer");
        this.cpt = 0;
        this.largeurSlide = this.getSlideWidth();
        this.transfert = 0;
        this.init();
    }

    init() {
        // Attendre que urlPages créé le dom
        setTimeout(() => {
            const clone = this.carrouselle.firstElementChild.cloneNode(true);
            this.carrouselle.appendChild(clone);
        }, 1000);
    }


    getSlideWidth() {
        const frame = document.querySelector(".focus__footer__pictures__frame");
        if (!frame) return;
        const frameWidth = frame.offsetWidth;
        return frameWidth;
    }

    turnLeft() {
        this.cpt--;
        if (this.cpt < 0) {
            setTimeout(() => {
                this.carrouselle.style.transition = '1ms';
                this.transfert = this.cpt * this.largeurSlide;
                this.carrouselle.style.transform = `translateX(${-this.transfert}px)`;
                this.carrouselle.style.transition = '400ms';
                this.turnLeft();
            }, 1);

            this.carrouselle.style.transition = '0ms';
            this.cpt = this.carrouselle.childElementCount - 1;
        }
        this.transfert = this.cpt * this.largeurSlide;
        this.carrouselle.style.transform = `translateX(${-this.transfert}px)`;
    }

    turnRight() {
        this.cpt++;
        if (this.cpt == this.carrouselle.childElementCount - 1) {
            setTimeout(() => {
                this.cpt = 0;
                this.carrouselle.style.transition = '0ms';
                this.transfert = this.largeurSlide * this.cpt;
                this.carrouselle.style.transform = `translateX(${-this.transfert}px)`;
            }, 400);
        }

        this.carrouselle.style.transition = '400ms';
        this.transfert = this.largeurSlide * this.cpt;
        this.carrouselle.style.transform = `translateX(${-this.transfert}px)`;
    }
}