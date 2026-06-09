/* ================================================================
   ninersoftware — script.js
   To update content, edit the DATA section only.
   ================================================================ */


/* ----------------------------------------------------------------
   DATA
   Add/edit projects and team members here.
   ---------------------------------------------------------------- */

const PROJECTS = [
  {
    name: "Niner Registration",
    description:
      "A Chrome extension that supercharges UNC Charlotte's Self Service registration portal. Features grade history charts powered by FOIA-obtained data, RMP ratings inline, and a redesigned course search UI.",
    tags: ["Chrome Extension", "Active"],
    active: true,
    links: [
      { label: "GitHub", url: "https://github.com/ninersoftware/niner-registration" },
      { label: "Chrome Web Store", url: "https://chromewebstore.google.com" },
    ],
  },
  {
    name: "Niner Ratings",
    description:
      "Embeds RateMyProfessors data directly into UNCC's course catalog. GraphQL API, MutationObserver content script, and a 3-day Chrome storage cache. Shipped v1 with 400+ installs.",
    tags: ["Chrome Extension", "Merged into Niner Registration"],
    active: false,
    links: [
      { label: "GitHub", url: "https://github.com/ninersoftware/niner-ratings" },
    ],
  },
];

const TEAM = [
  {
    name: "Austin",
    role: "Founder & President",
    bio: "Rising junior in CS (Systems & Networks). Built Niner Ratings from scratch and leads all NinerSoftware initiatives.",
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    name: "Aakash Shah",
    role: "VP of Engineering",
    bio: "Author of Gold Mine (UNCC app), incoming Microsoft intern. Leads engineering standards and mentorship across the org.",
    links: [
      { label: "GitHub", url: "https://github.com" },
    ],
  },
];

const ROUTES = ["home", "projects", "team", "join"];

// Updates router listener engine to track native button actions seamlessly
function navigate(route) {
  const ROUTES = ["home", "projects", "team", "join"];
  if (!ROUTES.includes(route)) route = "home";

  document.querySelectorAll(".route").forEach((el) => {
    el.classList.toggle("active", el.id === `route-${route}`);
  });

  document.querySelectorAll("[data-route]").forEach((el) => {
    if (el.classList.contains('nav-btn')) {
      el.classList.toggle("active", el.dataset.route === route);
    }
  });

  history.pushState({ route }, "", `#${route}`);
  window.scrollTo({ top: 0 });
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-route]");
  if (!el) return;
  e.preventDefault();
  navigate(el.dataset.route);
});

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-route]");
  if (!el) return;
  e.preventDefault();
  navigate(el.dataset.route);
});

window.addEventListener("popstate", (e) => {
  navigate(e.state?.route ?? hashRoute());
});

function hashRoute() {
  const hash = location.hash.replace("#", "").trim();
  return ROUTES.includes(hash) ? hash : "home";
}


/* ----------------------------------------------------------------
   RENDER: PROJECTS
   ---------------------------------------------------------------- */

function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;

  container.innerHTML = PROJECTS.map((p) => {
    const tags = p.tags
      .map((t) => `<span class="tag${p.active ? "" : " inactive"}">${t}</span>`)
      .join("");

    const links = p.links
      .map((l) => `<a class="project-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`)
      .join("");

    return `
      <div class="project-card">
        <div>
          <div class="project-name">${p.name}</div>
          <div class="project-desc">${p.description}</div>
          <div class="project-meta">${tags}</div>
        </div>
        <div class="project-links">${links}</div>
      </div>
    `;
  }).join("");
}


/* ----------------------------------------------------------------
   RENDER: TEAM
   ---------------------------------------------------------------- */

function renderTeam() {
  const container = document.getElementById("team-list");
  if (!container) return;

  container.innerHTML = TEAM.map((m) => {
    const links = m.links
      .map((l) => `<a class="member-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`)
      .join("");

    return `
      <div class="team-member">
        <div class="member-role">${m.role}</div>
        <div>
          <div class="member-name">${m.name}</div>
          <div class="member-bio">${m.bio}</div>
          <div class="member-links">${links}</div>
        </div>
      </div>
    `;
  }).join("");
}


/* ----------------------------------------------------------------
   INIT
   ---------------------------------------------------------------- */

renderProjects();
renderTeam();
navigate(hashRoute());