import { ContactCtrl } from "./class/controllers/ContactCtrl.js";
import { HomeCtrl } from "./class/controllers/HomeCtrl.js";
import { ProjectsCtrl } from "./class/controllers/ProjectsCtrl.js";
import { ProjectFocusCtrl } from "./class/controllers/ProjectFocusCtrl.js";
import { CopyInfos } from "./class/ui/CopyInfos.js";
import { DarkMode } from "./class/ui/DarkMode.js";
import { UrlPages } from "./class/ui/UrlPages.js";
import { Debouncer} from "./class/models/Debouncer.js";
import { Carrouselle } from "./class/ui/Carrouselle.js";

const copyInfos = new CopyInfos();
const darkMode = new DarkMode();
const urlPages = new UrlPages();
const debouncer = new Debouncer(300);
const carousselle = new Carrouselle();

new ContactCtrl(copyInfos,debouncer);
new HomeCtrl(darkMode, urlPages);
new ProjectsCtrl(urlPages);
new ProjectFocusCtrl(urlPages,carousselle);


const href = window.location.href;
const hrefTab = href.split("/");
const lastHrefTab = hrefTab[hrefTab.length - 1];
const page = lastHrefTab.replace(".html", "");



try {
    switch (page) {
        case 'home':
            break;

        case 'skills':
            break;

        case 'projects':
            break;

        case 'contact':
            break;

        default:
    }
}
catch (err) {
    console.error(`Error with the router : ${err}`);
}