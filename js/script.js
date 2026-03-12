document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        home:     { sectionId: "section-home",     theme: "theme-home" },
        about:    { sectionId: "section-about",    theme: "theme-about" },
        projects: { sectionId: "section-projects", theme: "theme-projects" },
        contact:  { sectionId: "section-contact",  theme: "theme-contact" },
    };

    function showSection(name) {
        const config = sections[name];
        if (!config) return;

        document.querySelectorAll(".content").forEach(s => s.classList.remove("active"));
        document.getElementById(config.sectionId).classList.add("active");
        document.body.className = config.theme;

        if (name === "projects") {
            var firstKey = Object.keys(projects)[0];
            if (firstKey) openProject(firstKey);
        }

        if (name === "about") {
            photoIndex = 0;
            updatePhotoStrip();
        }
    }

    document.querySelectorAll("[data-section]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(link.dataset.section);
        });
    });

    const skillsBtn = document.getElementById("skills");
    if (skillsBtn) {
        skillsBtn.addEventListener("click", function () {
            const skillItems = document.querySelectorAll(".skills-img div");
            const isVisible = skillItems[0].classList.contains("show");
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.toggle("show", !isVisible);
                }, index * 200);
            });
        });
    }
});


var photoIndex = 0;

function photoMove(n) {
    var imgs = document.querySelectorAll(".photo-strip img");
    photoIndex = (photoIndex + n + imgs.length) % imgs.length;
    updatePhotoStrip();
}

function updatePhotoStrip() {
    var imgs = document.querySelectorAll(".photo-strip img");
    imgs.forEach(function(img, i) {
        img.classList.toggle("active", i === photoIndex);
    });
    if (imgs[photoIndex]) {
        imgs[photoIndex].scrollIntoView({ block: "nearest", inline: "center" });
    }
}

updatePhotoStrip();


// ── Projects ───────────────────────────────────────────
var projects = {
    openbank: {
        title: "OpenBank DBMS",
        images: ["./images/dashboard.png", "./images/login.png", "./images/account.png"],
        description: "This project was made in my Open Source Development class. It is a database management system that includes a sign-up page, login, and account dashboard. The languages used were HTML, CSS, JavaScript, and PHP.",
        github: "https://github.com/MariahSalgado/CPSC254_Project"
    },

    horodaily: {
        title: "HoroDaily",
        images: ["./images/horoscope.png"],
        description: "This project was made in my Software Engineering class. It is a horoscope website that provides daily horoscopes for all zodiac signs. The languages used were HTML, CSS, and JavaScript.",
        github: "https://github.com/dnguyen1484/HoroscopeWebsite"
    },

    gomoku: {
        title: "Gomoku Game with Minimax AI",
        images: ["./images/gomoku.png"],
        description: "This project was made in my Artificial Intelligence class. It is a web-based implementation of the Gomoku game, featuring an AI opponent that uses the Minimax algorithm with alpha-beta pruning. The languages used were HTML, CSS, and JavaScript.",
        github: "https://github.com/knguyen196/481-Project-Gomoku"
    },

    mapletracker: {
        title: "MapleTracker",
        images: ["./images/mapletracker1.png", "./images/mapletracker2.png"],
        description: "This is a personal project that I worked on. It is a web application that allows users to grab their character(s) using the MapleStory Rankings API included in the add character section and track their weekly bosses and drops. The languages used were HTML, CSS, JavaScript",
        github: "https://github.com/knguyen196/MapleTracker"
    }
};  

var modalImgIndex = 0;
var modalImages = [];

var activeProjectId = null;

function openProject(id) {
    var p = projects[id];
    if (!p) return;
    activeProjectId = id;
    modalImages = p.images;
    modalImgIndex = 0;

    document.querySelectorAll(".project-thumb").forEach(function(el) {
        el.classList.toggle("active", el.getAttribute("onclick") === "openProject('" + id + "')");
    });

    var area = document.getElementById("project-detail-area");
    var slideshowBtns = p.images.length > 1
        ? '<button class="carousel-btn" onclick="modalSlide(-1)">&#8249;</button>' +
          '<img id="modal-img" src="' + p.images[0] + '" alt="">' +
          '<button class="carousel-btn" onclick="modalSlide(1)">&#8250;</button>'
        : '<img id="modal-img" src="' + p.images[0] + '" alt="">';
    area.innerHTML =
        '<h2 class="detail-title">' + p.title + '</h2>' +
        '<div class="detail-slideshow">' + slideshowBtns + '</div>' +
        '<p class="detail-desc">' + p.description + '</p>' +
        '<a class="detail-link" href="' + p.github + '" target="_blank">' +
            '<img src="./images/github-mark.png" alt="GitHub" style="width:16px;height:16px;vertical-align:middle;margin-right:6px;">' +
            'GitHub Repo' +
        '</a>';
    area.classList.add("active");
}

function modalSlide(n) {
    modalImgIndex = (modalImgIndex + n + modalImages.length) % modalImages.length;
    document.getElementById("modal-img").src = modalImages[modalImgIndex];
}
