// DYNAMIC FEATURED SLIDES CONTROLLER DATA
const FEATURED_SLIDES = [
  {
    title: "Niner Registration",
    desc: "A browser extension that features FOIA-obtained grade distribution charts, inline RateMyProfessors ratings, and a redesigned course presentation interface.",
    file: "assets/ninerRegChrome.png",
    links: [
      { label: "GitHub ↗", url: "https://github.com/ninersoftware/niner-registration" },
      { label: "Chrome ↗", url: "https://chromewebstore.google.com" },
      { label: "Firefox ↗ ", url: "google.com"}
    ]
  },
  {
    title: "Gold Mine",
    desc: "Gold Mine is a comprehensive campus companion app for UNC Charlotte students, featuring real-time information on UREC gym status, class schedules, campus maps, and student discounts.",
    file: "assets/goldMineUNCC.png", 
    links: [
      { label: "App Store ↗", url: "https://apps.apple.com/us/app/gold-mine-uncc/id6744618754" }
    ]
  }
];

let currentSlideIdx = 0;

// Subpage Render Lists Data
const PROJECTS = [
  {
    name: "Niner Registration",
    description: "A Chrome extension that supercharges UNC Charlotte's Self Service registration portal. Features grade history charts powered by FOIA-obtained data, RMP ratings inline, and a redesigned course search UI.",
    tags: ["Chrome Extension", "Active"],
    active: true,
    links: [
      { label: "GitHub", url: "https://github.com/ninersoftware/niner-registration" },
      { label: "Chrome Web Store", url: "https://chromewebstore.google.com" }
    ]
  },
  {
    name: "Niner Ratings",
    description: "Embeds RateMyProfessors data directly into UNCC's course catalog. GraphQL API, MutationObserver content script, and a 3-day Chrome storage cache. Shipped v1 with 400+ installs.",
    tags: ["Chrome Extension", "Merged into Niner Registration"],
    active: false,
    links: [
      { label: "GitHub", url: "https://github.com/ninersoftware/niner-ratings" }
    ]
  }
];

const TEAM = [
  {
    name: "Austin",
    role: "Founder & President",
    bio: "Rising junior in CS (Systems & Networks). Built Niner Ratings from scratch and leads all NinerSoftware initiatives.",
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "LinkedIn", url: "https://linkedin.com" }
    ]
  },
  {
    name: "Aakash Shah",
    role: "VP of Engineering",
    bio: "Author of Gold Mine (UNCC app), incoming Microsoft intern. Leads engineering standards and mentorship across the org.",
    links: [
      { label: "GitHub", url: "https://github.com" }
    ]
  }
];

// NAVIGATION VIEW CONTROLLER SWITCHER
function navigate(route) {
  const ROUTES = ["home", "projects", "team", "join"];
  if (!ROUTES.includes(route)) route = "home";

  // Toggle subpage visibility
  document.querySelectorAll(".route").forEach((el) => {
    el.classList.toggle("active", el.id === `route-${route}`);
  });

  // Dynamically update active states across all navbar options
  document.querySelectorAll(".nav-btn").forEach((el) => {
    el.classList.toggle("active", el.dataset.route === route);
  });

  window.scrollTo({ top: 0 });
}

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
  const projContainer = document.getElementById("projects-list");
  if (projContainer) {
    projContainer.innerHTML = PROJECTS.map(p => `
      <div class="project-card">
        <div>
          <div class="project-name">${p.name}</div>
          <div class="project-desc">${p.description}</div>
          <div class="project-meta">
            ${p.tags.map(t => `<span class="tag ${!p.active ? 'inactive' : ''}">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-links">
          ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="project-link">${l.label} ↗</a>`).join('')}
        </div>
      </div>
    `).join('');
  }

  const teamContainer = document.getElementById("team-list");
  if (teamContainer) {
    teamContainer.innerHTML = TEAM.map(m => `
      <div class="team-member">
        <div class="member-role">${m.role}</div>
        <div>
          <div class="member-name">${m.name}</div>
          <div class="member-bio">${m.bio}</div>
          <div class="member-links">
            ${m.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="member-link">${l.label} ↗</a>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
}

// GLOBAL INTERACTION ROUTER
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-route]");
  if (!el) return;
  
  // Guard clause to let slide pagination arrows bypass route navigation entirely
  if (el.classList.contains("viewer-arrow-btn")) return;
  
  e.preventDefault();
  navigate(el.dataset.route);
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