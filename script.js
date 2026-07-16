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
      { label: "App Store" },
      { label: "Google Play" },
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
      { label: "Chrome Web Store", url: "https://chromewebstore.google.com/NinerRatings" },
      { label: "Firefox", url: "firefox.com"}
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
  const ROUTES = ["home", "projects", "team", "join"];
  if (!ROUTES.includes(route)) route = "home";

  document.querySelectorAll(".route").forEach((el) => {
    el.classList.toggle("active", el.id === `route-${route}`);
  });

  document.querySelectorAll(".nav-btn").forEach((el) => {
    el.classList.toggle("active", el.dataset.route === route);
  });

  document.title = route === "home" ? "ninersoftware" : `ninersoftware - ${route}`

  if (pushState) {
    window.location.hash = route === "home" ? "" : route;
  }

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