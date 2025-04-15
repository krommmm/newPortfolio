export const projects = [
    {
        id: 1,
        name: "App culinaire",
        description: "Application pour recettes de cuisine",
        img: "cuisine_img.png",
        techno_logos: ["react_logo.png", "nodejs_logo.png", "mysql_logo.png"],
        isOnline: true, // css : circle circle-green  ou circle-red
        github_url: "https://github.com/krommmm/cuisine_sql",
        site_url: "https://cuisine-five.vercel.app",
        fonctionalities: [
            "Application culinaire qui utilise react (vite), nodejs (express) et mySql.",
            "Pagination (url)",
            "Chat (socket.io)",
            "Authentification (regex, token et cookie http only)",
            "Etat centralisé (context)",
            "Recherche et trie (SQL)",
            "Architecture modulaire et composants réutilisables",
            "Api restfull"
        ],
        github_img: ["cuisine_1.png", "cuisine_2.png", "cuisine_3.png"]
    },
    {
        id: 2,
        name: "Chat Msn",
        description: "Réseau social avec messagerie instantanée",
        img: "msn_img.png",
        techno_logos: ["react_logo.png", "nodejs_logo.png", "mysql_logo.png"],
        isOnline: true,
        github_url: "https://github.com/krommmm/msn.git",
        site_url: "https://msn-front.vercel.app",
        fonctionalities: [
            "Réseau social qui utilise React(vite), nodeJs(express) et mySql.",
            "Chat (socket.io)",
            "Service de messagerie avec plusieurs états de messagerie (socket.io)",
            "Authentification (token et cookie http only)",
            "Recherche et trie (SQL)",
            "Architecture modulaire et composants réutilisables",
            "Api restfull"
        ],
        github_img: ["msn_1.png", "msn_2.png", "msn_3.png", "msn_4.png", "msn_5.png"]
    },
    {
        id: 3,
        name: "App e-commerce",
        description: "Application pour gestion de produits en ligne",
        img: "trendtangle.png",
        techno_logos: ["react_logo.png", "nodejs_logo.png", "mongodb_logo.png"],
        isOnline: false,
        github_url: "https://github.com/krommmm/trendtangle",
        site_url: null, // Site non mentionné comme actif
        fonctionalities: [
            "Application e-commerce avec React(vite), nodeJs(express) et mongoDb Atlas.",
            "Pagination (url)",
            "Authentification et droits d'administration",
            "Console d'administration",
            "Gestion de paniers",
            "Promotion individuelles",
            "Soldes temporaires sur un ensemble d'articles",
            "Execution automatique de tâches (Cron)",
            "Api restfull"
        ],
        github_img: ["trend_1.png", "trend_2.png", "trend_3.png", "trend_4.png", "trend_5.png", "trend_6.png", "trend_7.png", "trend_8.png"]
    },
    {
        id: 4,
        name: "Gestionnaire de révision",
        description: "Application pour organiser des révisions selon la répétition espacée",
        img: "boxRevision.png",
        techno_logos: ["js.png", "poo.png"],
        isOnline: true,
        github_url: "https://github.com/krommmm/gestionnaireRevision2.git",
        site_url: "https://boxrevision.netlify.app/",
        fonctionalities: [
            "Projet en Js (poo) & css (BEM)",
            "L'application permet d'enregistrer des leçons à réviser et de les afficher selon le principe de la répétition espacée.",
            "Respect des principes SOLID",
            "Pagination (url)",
            "Application 100% dynamique",
            "Agenda",
            "Opérations CRUD",
            "Etat centralisé dans l'api du navigateur (localStorage)"
        ],
         github_img: ["revi_0.png", "revi_1.png", "revi_2.png", "revi_3.png"]
    },
    {
        id: 5,
        name: "Portfolio",
        description: "Portfolio présentant mes projets personnels",
        img: "portfolio.png",
        techno_logos: ["js.png", "poo.png"],
        isOnline: true,
        github_url: "https://github.com/krommmm/newPortfolio",
        site_url: "https://portfoliotb.netlify.app/",
        fonctionalities: [
            "Projet en JS (Poo) et css (BEM)",
            "Portfolio qui présente mes projets"
        ]
    },
    {
        id: 6,
        name: "To-Do-List Agenda",
        description: "Application pour gérer une to-do-list avec fonctionnalités d'agenda.",
        img: "todoList.jpg",
        techno_logos: ["react_logo.png", "nodejs_logo.png", "mongodb_logo.png"],
        isOnline: true,
        github_url: "https://github.com/krommmm/app_todolist_agenda",
        site_url: "https://todolistmulti.netlify.app",
        fonctionalities: [
            "Gestion des tâches avec des dates d'échéance.",
            "Intégration d'un calendrier pour visualiser les tâches planifiées.",
            "Possibilité de classer les tâches par priorité.",
            "Interface utilisateur intuitive et facile à utiliser.",
            "Gestion centralisé par l'api du navigateur"
        ],
        github_img: ["todo_1.png", "todo_2.png", "todo_3.png"]
    },
    {
        id: 7,
        name: "Trieuse de films",
        description: "Application pour organiser et trier des films selon divers critères.",
        img: "netflix.jpg",
        techno_logos: ["js.png", "nodejs_logo.png", "mongodb_logo.png"],
        isOnline: false,
        github_url: "https://github.com/krommmm/app_creation_fiches_cine",
        site_url: null,
        fonctionalities: [
            "Application qui utilise React (vite), Node.js (Express) et MySQL.",
            "Tri des films par genre, année, et popularité.",
            "Recherche avancée avec filtres SQL.",
            "Authentification par token.",
            "Gestion des favoris pour les utilisateurs.",
            "API RESTful."
        ],
        github_img: ["tri_1.png", "tri_2.png", "tri_3.png", "tri_4.png", "tri_5.png"]
    }
];
