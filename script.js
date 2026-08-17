// DYNAMIC FEATURED SLIDES CONTROLLER DATA
const FEATURED_SLIDES = [
  {
    title: "Niner Registration",
    desc: "From the creator of NinerRatings, Niner Registration is the expanded all-in-one registration tool for Charlotte students. Features grade distribution charts, inline RateMyProfessors ratings, calendar builder, and a completely redesigned course overview.",
    file: "assets/ninerRegChrome.png",
    links: [
      { label: "GitHub ↗", url: "https://github.com/ninersoftware/niner-registration" },
      { label: "Chrome ↗", url: "https://chromewebstore.google.com" },
      { label: "Firefox ↗", url: "https://chromewebstore.google.com" }
    ]
  },
  {
    title: "Gold Mine UNCC",
    desc: "Gold Mine is a comprehensive campus companion app for UNC Charlotte students, featuring real-time information on UREC gym status, class schedules, campus maps, and student discounts. The app seamlessly integrates university branding while providing essential tools like study room booking, dining options, and social event tracking, all customizable through a user-friendly interface that adapts to both light and dark modes.",
    file: "assets/goldMineUNCC.png", 
    links: [
      { label: "App Store ↗", url: "https://apps.apple.com/us/app/gold-mine-uncc/id6744618754" }
    ]
  }
];

let currentSlideIdx = 0;

// Subpage Render Lists Data (Images added here)
const PROJECTS = [
  {
    name: "Dine49",
    image: "assets/dine49.png",
    description: "(IN DEVELOPMENT) Out with the old, in with the new: a user-oriented app to be informed about dining options on campus.",
    tags: [],
    active: true,
    links: [

    ]
  },
  {
    name: "Niner Registration",
    image: "assets/ninerRegChrome.png",
    description: "The all-in-one registration tool: a browser extension that features RMP data in-line, grade data spanning back to 2015, and exportable schedules for Google & Apple Calendar +",
    tags: [],
    active: true,
    links: [
      { label: "GitHub", url: "https://github.com/ninersoftware/niner-registration" },
      { label: "Chrome Web Store", url: "https://chromewebstore.google.com/detail/ninerratings/fiboihoabbagmckkhjbbeiaoiiimfaec?hl=en-US&pli=1" },
    ]
  },
  {
    name: "Gold Mine UNCC",
    image: "assets/goldMineUNCC.png",
    description: "The comprehensive campus app for Charlotte students. Featuring real-time embedded data such as gym and parking status, campus maps, and student discounts. Access study room booking and much more.",
    tags: [],
    active: true,
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/gold-mine-uncc/id6744618754" },
    ]
  },
  {
    name: "NinerRatings",
    image: "assets/ninerRatings.jpeg",
    description: "Embeds RateMyProfessors data directly into UNCC's course catalog, merged development into Niner Registration.",
    tags: ["merged development"],
    active: false,
    links: [
      { label: "GitHub", url: "https://github.com/ausmango/NinerRatings" }
    ]
  }
];

const NEWS = [
  { year: 2026, month: "August", title: "Fall 2026 kickoff — first meeting details coming soon" },
  { year: 2026, month: "July", title: "ninersoftware officially part of Niner Engage" },
  { year: 2026, month: "April", title: "Idea of ninersoftware introduced" },
  { year: 2026, month: "March", title: "NinerRatings introduced and featured in the Niner Times", url: "https://www.ninertimes.com/news/ninerratings-a-new-addition-to-class-registration/article_8e4f4114-194b-476d-bc57-e95a2f3831a1.html" },
  { year: 2025, month: "August", title: "Gold Mine UNCC featured in the Niner Times", url: "https://www.ninertimes.com/news/charlotte-student-launches-gold-mine-app-to-help-users-navigate-campus-life/article_8ac8772f-b3c0-4bce-a44e-c7a4bbbd7786.html" }
];

const ROLES = [

];

const TEAM = [
  {
    name: "Austin Mangold",
    image: "assets/austin.png",
    role: "Founder & President",
    bio: "Junior student studying Computer Science, current Deltek intern. Built NinerRatings, expanded development into Niner Registration.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/austmang/" },
      { label: "GitHub", url: "https://github.com/ausmango" }
    ]
  },
  {
    name: "Aakash Shah",
    image: "assets/aakash.png",
    role: "Vice President",
    bio: "Senior student studying Computer Science, current Microsoft intern. Built the UNCC Gold Mine app, with over 3k+ downloads.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/aakash--shah/"},
      { label: "GitHub", url: "https://github.com/vvkash" }
    ]
  }, 
  {
    name: "Kareem Saif",
    image: "assets/kareem.png",
    role: "Treasurer",
    bio: "Junior student studying Computer Science, current Ingersoll Rand intern. Assisted development in Niner Registration.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/kareemsaif/"},
      { label: "GitHub", url: "https://github.com/KSaifStack"}
    ]
  }
];

// NAVIGATION VIEW CONTROLLER SWITCHER
function navigate(route, pushState = true) {
  const ROUTES = ["home", "news", "projects", "team", "join"];
  if (!ROUTES.includes(route)) route = "home";

  document.querySelectorAll(".route").forEach((el) => {
    el.classList.toggle("active", el.id === `route-${route}`);
  });

  document.querySelectorAll(".nav-btn, .mobile-menu-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.route === route);
  });

  document.title = route === "home" ? "ninersoftware" : `ninersoftware - ${route}`

  if (pushState) {
    window.location.hash = route === "home" ? "" : route;
  }

  window.scrollTo({ top: 0 });
}

const menuToggle = document.getElementById("mobile-menu-toggle");
const menuPopup = document.getElementById("mobile-menu-popup");

menuToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  menuToggle.classList.toggle("open");
  menuPopup.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!menuPopup?.contains(e.target) && !menuToggle?.contains(e.target)) {
    menuToggle?.classList.remove("open");
    menuPopup?.classList.remove("open");
  }
});

// SLIDER RENDER FUNCTION
function renderActiveFeaturedSlide() {
  const imgElement = document.getElementById("viewer-active-img");
  const titleElement = document.getElementById("viewer-project-title");
  const descElement = document.getElementById("viewer-project-desc");
  const indexElement = document.getElementById("viewer-project-index");
  const linksContainer = document.getElementById("viewer-project-links");

  if (!imgElement || !titleElement || !descElement || !indexElement || !linksContainer) return;

  const activeData = FEATURED_SLIDES[currentSlideIdx];

  imgElement.src = activeData.file;
  titleElement.textContent = activeData.title;
  descElement.textContent = activeData.desc;
  indexElement.textContent = `${currentSlideIdx + 1} / ${FEATURED_SLIDES.length}`;

  linksContainer.innerHTML = "";
  activeData.links.forEach(linkInfo => {
    const anchor = document.createElement("a");
    anchor.href = linkInfo.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = linkInfo.label;
    linksContainer.appendChild(anchor);
  });
}

// SUBPAGE ENGINE BUILDERS
function initSubpageLists() {
  const newsContainer = document.getElementById("news-list");
  if (newsContainer) {
    let html = "";
    let lastYear = null;
    let lastMonth = null;

    NEWS.forEach(n => {
      if (n.year !== lastYear) {
        if (lastYear !== null) html += "</div>";
        html += `<div class="news-year">${n.year}</div><div class="news-year-group">`;
        lastYear = n.year;
        lastMonth = null;
      }
      if (n.month !== lastMonth) {
        html += `<div class="news-month">${n.month}</div>`;
        lastMonth = n.month;
      }
      html += `
        <div class="news-item">
          <span class="news-item-text">${n.title}</span>
          ${n.url ? `<a href="${n.url}" target="_blank" rel="noopener noreferrer" class="news-link">Read ↗</a>` : ""}
        </div>`;
    });
    if (lastYear !== null) html += "</div>";

    newsContainer.innerHTML = html;
  }

  const projContainer = document.getElementById("projects-list");
  if (projContainer) {
    projContainer.innerHTML = PROJECTS.map(p => `
      <div class="project-card">
        
        <!-- Left Side: Typography and Metadata -->
        <div class="featured-info">
          <h3 class="project-name">${p.name}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-meta">
            ${p.tags.map(t => `<span class="tag ${!p.active ? 'inactive' : ''}">${t}</span>`).join('')}
          </div>
          <div class="featured-links">
            ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`).join('')}
          </div>
        </div>

        <!-- Right Side: Expandable Thumbnail Image -->
        <div class="project-list-img-frame">
          <img src="${p.image}" alt="${p.name} Preview Screenshot" />
        </div>

      </div>
    `).join('');
  }

  const teamContainer = document.getElementById("team-list");
  if (teamContainer) {
    teamContainer.innerHTML = TEAM.map(m => `
      <div class="team-member">
        <div class="member-role">${m.role}</div>
        <div class="member-photo">${m.image ? `<img src="${m.image}" alt="${m.name}" />` : 'photo'}</div>
        <div class="member-name">${m.name}</div>
        <div class="member-bio">${m.bio}</div>
        <div class="member-links">
          ${(m.links || []).map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="member-link">${l.label} ↗</a>`).join('')}
        </div>
      </div>
    `).join('');
  }
  const jobBoardContainer = document.getElementById("job-board-list");
  if (jobBoardContainer) {
    if (ROLES.length === 0) {
      jobBoardContainer.innerHTML = `
        <div class="job-board-empty">
          <p>No open positions right now, check back soon!</p>
        </div>`;
    } else {
      jobBoardContainer.innerHTML = ROLES.map(r => `
        <div class="job-role-card">
          <div class="job-role-info">
            <div class="job-role-project">${r.project}</div>
            <h3 class="job-role-title">${r.title}</h3>
            <p class="job-role-desc">${r.description}</p>
          </div>
          <a href="${r.formUrl}" target="_blank" rel="noopener noreferrer" class="job-role-apply">Apply ↗</a>
        </div>
      `).join('');
    }
  }
}

function routeFromHash() {
  const hash = window.location.hash.replace("#", "");
  return hash || "home";
}

window.addEventListener("popstate", () => navigate(routeFromHash(), false));
window.addEventListener("hashchange", () => navigate(routeFromHash(), false));

document.addEventListener("DOMContentLoaded", () => {
  navigate(routeFromHash(), false);
  initSubpageLists();
});

// GLOBAL INTERACTION ROUTER
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-route]");
  if (!el) return;
  
  if (el.classList.contains("viewer-arrow-btn")) return;
  
  e.preventDefault();
  navigate(el.dataset.route);

  menuToggle?.classList.remove("open");
  menuPopup?.classList.remove("open");
});

// INITIALIZE CONTROLS ON LIFE CYCLE LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderActiveFeaturedSlide();
  initSubpageLists();

  // Bind active script actions safely after elements assemble in the DOM
  document.getElementById("viewer-btn-prev")?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    currentSlideIdx = (currentSlideIdx === 0) ? FEATURED_SLIDES.length - 1 : currentSlideIdx - 1;
    renderActiveFeaturedSlide();
  });

  document.getElementById("viewer-btn-next")?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    currentSlideIdx = (currentSlideIdx === FEATURED_SLIDES.length - 1) ? 0 : currentSlideIdx + 1;
    renderActiveFeaturedSlide();
  });
});