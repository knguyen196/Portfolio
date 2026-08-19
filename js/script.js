document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    home: { sectionId: "section-home", theme: "theme-home" },
    about: { sectionId: "section-about", theme: "theme-about" },
    projects: { sectionId: "section-projects", theme: "theme-projects" },
    contact: { sectionId: "section-contact", theme: "theme-contact" },
  };

  function showSection(name) {
    const config = sections[name];
    if (!config) return;

    document
      .querySelectorAll(".content")
      .forEach((s) => s.classList.remove("active"));
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

  document.querySelectorAll("[data-section]").forEach((link) => {
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
  imgs.forEach(function (img, i) {
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
    images: [
      "./images/dashboard.png",
      "./images/login.png",
      "./images/account.png",
    ],
    description:
      "Built in my Open Source Development class. A database management system with sign-up, login, and account dashboard functionality. The languages used were HTML, CSS, JavaScript, and PHP.",
    github: "https://github.com/MariahSalgado/CPSC254_Project",
  },

  horodaily: {
    title: "HoroDaily",
    images: ["./images/horoscope.png"],
    description:
      "Built in my Software Engineering class. A horoscope website delivering daily readings for all zodiac signs. The languages used were HTML, CSS, and JavaScript.",
    github: "https://github.com/dnguyen1484/HoroscopeWebsite",
  },

  gomoku: {
    title: "Gomoku Game with Minimax AI",
    images: ["./images/gomoku.png"],
    description:
      "Built in my Artificial Intelligence class. A web-based implementation of Gomoku featuring an AI opponent powered by the Minimax algorithm with alpha-beta pruning. The languages used were HTML, CSS, and JavaScript.",
    github: "https://github.com/knguyen196/481-Project-Gomoku",
  },

  mapletracker: {
    title: "MapleTracker",
    images: ["./images/mapletracker1.png", "./images/mapletracker2.png"],
    description:
      "A web application for tracking MapleStory characters' weekly boss runs and drops. Add characters using the MapleStory Rankings API, then log and monitor progress from a central dashboard. The languages used were HTML, CSS, and JavaScript.",
    github: "https://github.com/knguyen196/MapleTracker",
  },

  musicrecommender: {
    title: "Hybrid Music Recommender",
    images: [
      "./images/musicrecommender1.png",
      "./images/musicrecommender2.png",
      "./images/musicrecommender3.png",
      "./images/musicrecommender4.png",
      "./images/musicrecommender5.png",
      "./images/musicrecommender6.png",
      "./images/musicrecommender7.png",
    ],
    description:
      "Built for my senior capstone. A personalized music and podcast recommendation system combining audio feature analysis with user behavior patterns to surface recommendations that fit your taste. The languages and tools used were React, Python, JavaScript, and CSS.",
    github: "https://github.com/knguyen196/MusicRecommender",
  },

  twrds: {
    title: "TWRDS",
    images: [
      "./images/twrds1.png",
      "./images/twrds2.png",
      "./images/twrds3.png",
      "./images/twrds4.png",
      "./images/twrds5.png",
      "./images/twrds6.png",
    ],
    description:
      "A conversational decision-making app that guides you through a structured thinking process. Set your context, talk through your situation, and walk away with a clear analysis including pros, cons, key insights, and a confidence-rated recommendation. Past decisions save locally so you can revisit and build on them anytime. The languages and tools used were React, JavaScript, Tailwind CSS, and Framer Motion.",
    github: "https://github.com/knguyen196/TWRDS",
  },

  moodge: {
    title: "Moodge",
    images: [
      "./images/moodge1.png",
      "./images/moodge2.png",
      "./images/moodge3.png",
      "./images/moodge4.png",
      "./images/moodge5.png",
      "./images/moodge6.png",
      "./images/moodge7.png",
    ],
    description:
      "A full-stack mood tracking app that helps you understand what actually affects how you feel. Define your own factors to track, like sleep, caffeine, or exercise, log your mood daily alongside them, and let the app surface which factors move the needle most. View trends on a dashboard, browse full history, and see data-driven insights, all secured behind your own account. The languages and tools used were React, Node.js, Express, PostgreSQL, and Prisma.",
    github: "https://github.com/knguyen196/Mood-Tracker",
  },

  froggo: {
    title: "Froggo",
    images: [
      "./images/froggo-idle.gif",
      "./images/froggo-hop.gif",
      "./images/froggo-eat.gif",
      "./images/froggo-drink.gif",
      "./images/froggo-tired.gif",
    ],
    description:
      "A desktop pet app featuring a frog companion that lives on your screen, with a care system built around evolving need states rather than a static idle animation. Progress persists locally between sessions, and the window resizes dynamically to match the pet's behavior. Packaged as a standalone portable executable. The languages and tools used were Electron, React, and JavaScript.",
    github: "https://github.com/knguyen196/Froggo",
  },

  paintbloom: {
    title: "PaintBloom",
    images: ["./images/paintbloom.png"],
    description:
      "A procedural flower painting tool that generates unique floral compositions using a seeded random number generator, so any piece can be recreated from its seed. Click to fill in generated regions with color, layer on freehand brush strokes, and adjust a grain texture for a more organic look. Includes a full undo history and PNG export. The languages and tools used were React, JavaScript, and the Canvas 2D API.",
    github: "https://github.com/knguyen196/paintbloom",
  },
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

  document.querySelectorAll(".project-thumb").forEach(function (el) {
    el.classList.toggle(
      "active",
      el.getAttribute("onclick") === "openProject('" + id + "')",
    );
  });

  var area = document.getElementById("project-detail-area");
  var slideshowBtns =
    p.images.length > 1
      ? '<button class="carousel-btn" onclick="modalSlide(-1)">&#8249;</button>' +
        '<img id="modal-img" src="' +
        p.images[0] +
        '" alt="">' +
        '<button class="carousel-btn" onclick="modalSlide(1)">&#8250;</button>'
      : '<img id="modal-img" src="' + p.images[0] + '" alt="">';
  area.innerHTML =
    '<h2 class="detail-title">' +
    p.title +
    "</h2>" +
    '<div class="detail-slideshow">' +
    slideshowBtns +
    "</div>" +
    '<p class="detail-desc">' +
    p.description +
    "</p>" +
    '<a class="detail-link" href="' +
    p.github +
    '" target="_blank">' +
    '<img src="./images/github-mark.png" alt="GitHub" style="width:16px;height:16px;vertical-align:middle;margin-right:6px;">' +
    "GitHub Repo" +
    "</a>";
  area.classList.add("active");
}

function modalSlide(n) {
  modalImgIndex = (modalImgIndex + n + modalImages.length) % modalImages.length;
  document.getElementById("modal-img").src = modalImages[modalImgIndex];
}
