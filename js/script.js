document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    home: { sectionId: "section-home", theme: "theme-home" },
    about: { sectionId: "section-about", theme: "theme-about" },
    projects: { sectionId: "section-projects", theme: "theme-projects" },
    contact: { sectionId: "section-contact", theme: "theme-contact" },
  };

  document.querySelectorAll("[data-section]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const config = sections[link.dataset.section];
      if (!config) return;
      const target = document.getElementById(config.sectionId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const themeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const name = entry.target.id.replace("section-", "");
        const config = sections[name];
        if (!config) return;
        document.body.className = config.theme;
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
          themeColorMeta.setAttribute(
            "content",
            getComputedStyle(document.body).getPropertyValue("--bg-color").trim(),
          );
        }
        document.querySelectorAll("[data-section]").forEach((link) => {
          link.classList.toggle("active", link.dataset.section === name);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
  );
  Object.values(sections).forEach((config) => {
    const el = document.getElementById(config.sectionId);
    if (el) themeObserver.observe(el);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll(".content").forEach((el) => revealObserver.observe(el));

  const navBar = document.querySelector(".header-wrapper");
  const progressBar = document.getElementById("scroll-progress");
  if (navBar) {
    const handleNavScroll = () => {
      navBar.classList.toggle("scrolled", window.scrollY > 40);
      if (progressBar) {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.transform =
          "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
      }
    };
    window.addEventListener("scroll", handleNavScroll);
    handleNavScroll();
  }

  renderProjectGrid();
  var firstKey = Object.keys(projects)[0];
  if (firstKey) openProject(firstKey);

  document.querySelectorAll(".photo-strip img").forEach((img, i) => {
    img.addEventListener("click", () => {
      photoIndex = i;
      updatePhotoStrip(true);
    });
  });
});

var photoIndex = 0;

function swapImage(img, src) {
  if (!img || img.src === src) return;
  img.classList.add("img-fading");
  setTimeout(function () {
    img.src = src;
    var reveal = function () {
      img.classList.remove("img-fading");
      img.onload = null;
    };
    if (img.complete) reveal();
    else img.onload = reveal;
  }, 200);
}

function photoMove(n) {
  var imgs = document.querySelectorAll(".photo-strip img");
  photoIndex = (photoIndex + n + imgs.length) % imgs.length;
  updatePhotoStrip(true);
}

function updatePhotoStrip(scrollIntoView) {
  var imgs = document.querySelectorAll(".photo-strip img");
  imgs.forEach(function (img, i) {
    img.classList.toggle("active", i === photoIndex);
  });
  var featured = document.getElementById("featured-photo");
  if (featured && imgs[photoIndex]) {
    swapImage(featured, imgs[photoIndex].src);
  }
  if (scrollIntoView && imgs[photoIndex]) {
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
      "Built in my Open Source Development class. A database management system with sign-up, login, and account dashboard functionality.",
    github: "https://github.com/MariahSalgado/CPSC254_Project",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
  },

  horodaily: {
    title: "HoroDaily",
    images: ["./images/horoscope.png"],
    description:
      "Built in my Software Engineering class. A horoscope website delivering daily readings for all zodiac signs.",
    github: "https://github.com/dnguyen1484/HoroscopeWebsite",
    stack: ["HTML", "CSS", "JavaScript"],
  },

  gomoku: {
    title: "Gomoku Game with Minimax AI",
    images: ["./images/gomoku.png"],
    description:
      "Built in my Artificial Intelligence class. A web-based implementation of Gomoku featuring an AI opponent powered by the Minimax algorithm with alpha-beta pruning.",
    github: "https://github.com/knguyen196/481-Project-Gomoku",
    stack: ["HTML", "CSS", "JavaScript"],
  },

  mapletracker: {
    title: "MapleTracker",
    images: ["./images/mapletracker1.png", "./images/mapletracker2.png"],
    description:
      "A web application for tracking MapleStory characters' weekly boss runs and drops. Add characters using the MapleStory Rankings API, then log and monitor progress from a central dashboard.",
    github: "https://github.com/knguyen196/MapleTracker",
    stack: ["HTML", "CSS", "JavaScript"],
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
      "Built for my senior capstone. A personalized music and podcast recommendation system combining audio feature analysis with user behavior patterns to surface recommendations that fit your taste.",
    github: "https://github.com/knguyen196/MusicRecommender",
    stack: ["React", "Python", "JavaScript", "CSS"],
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
      "A conversational decision-making app that guides you through a structured thinking process. Set your context, talk through your situation, and walk away with a clear analysis including pros, cons, key insights, and a confidence-rated recommendation. Past decisions save locally so you can revisit and build on them anytime.",
    github: "https://github.com/knguyen196/TWRDS",
    stack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
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
      "A full-stack mood tracking app that helps you understand what actually affects how you feel. Define your own factors to track, like sleep, caffeine, or exercise, log your mood daily alongside them, and let the app surface which factors move the needle most. View trends on a dashboard, browse full history, and see data-driven insights, all secured behind your own account.",
    github: "https://github.com/knguyen196/Mood-Tracker",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
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
      "A desktop pet app featuring a frog companion that lives on your screen, with a care system built around evolving need states rather than a static idle animation. Progress persists locally between sessions, and the window resizes dynamically to match the pet's behavior. Packaged as a standalone portable executable.",
    github: "https://github.com/knguyen196/Froggo",
    stack: ["Electron", "React", "JavaScript"],
  },

  paintbloom: {
    title: "PaintBloom",
    images: ["./images/paintbloom.png"],
    description:
      "A procedural flower painting tool that generates unique floral compositions using a seeded random number generator, so any piece can be recreated from its seed. Click to fill in generated regions with color, layer on freehand brush strokes, and adjust a grain texture for a more organic look. Includes a full undo history and PNG export.",
    github: "https://github.com/knguyen196/paintbloom",
    stack: ["React", "JavaScript", "Canvas 2D"],
  },
};

var modalImgIndex = 0;
var modalImages = [];

function renderProjectGrid() {
  var grid = document.getElementById("project-grid");
  if (!grid) return;
  grid.innerHTML = Object.keys(projects)
    .map(function (id) {
      var p = projects[id];
      return (
        '<div class="project-card" data-id="' +
        id +
        '" onclick="openProject(\'' +
        id +
        '\', true)">' +
        '<div class="project-card-img">' +
        '<img src="' +
        p.images[0] +
        '" alt="' +
        p.title +
        '" loading="lazy" decoding="async" />' +
        "</div>" +
        '<span class="project-card-name">' +
        p.title +
        "</span>" +
        "</div>"
      );
    })
    .join("");
}

function openProject(id, scrollToDetail) {
  var p = projects[id];
  if (!p) return;
  modalImages = p.images;
  modalImgIndex = 0;

  document.querySelectorAll(".project-card").forEach(function (el) {
    el.classList.toggle("active", el.dataset.id === id);
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
    '<div class="detail-media">' +
    '<div class="detail-slideshow">' +
    slideshowBtns +
    "</div>" +
    "</div>" +
    '<div class="detail-info">' +
    '<h2 class="detail-title">' +
    p.title +
    "</h2>" +
    '<div class="stack-chips">' +
    p.stack
      .map(function (tech) {
        return '<span class="stack-chip">' + tech + "</span>";
      })
      .join("") +
    "</div>" +
    '<p class="detail-desc">' +
    p.description +
    "</p>" +
    '<a class="detail-link" href="' +
    p.github +
    '" target="_blank">' +
    '<img src="./images/github-mark.png" alt="GitHub" style="width:16px;height:16px;vertical-align:middle;margin-right:6px;">' +
    "GitHub Repo" +
    "</a>" +
    "</div>";
  area.classList.add("active");

  if (scrollToDetail) {
    area.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function modalSlide(n) {
  modalImgIndex = (modalImgIndex + n + modalImages.length) % modalImages.length;
  swapImage(document.getElementById("modal-img"), modalImages[modalImgIndex]);
}
