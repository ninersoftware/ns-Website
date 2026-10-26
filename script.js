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
      { label: "Chrome Web Store", url: "https://chromewebstore.google.com/detail/ninerratings/fiboihoabbagmckkhjbbeiaoiiimfaec?hl=en-US&pli=1" },
      { label: "Firefox", url: "https://addons.mozilla.org/en-US/firefox/addon/ninerratings/"},
      { label: "GitHub", url: "https://github.com/ninersoftware/niner-registration" }
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
  { year: 2026, month: "September", title: "ns: an introductory meeting | September 9th, Friday 386 @5:30PM" },
  { year: 2026, month: "August", title: "Fall 2026 kickoff — first meeting details coming soon" },
  { year: 2026, month: "July", title: "ninersoftware officially part of Niner Engage" },
  { year: 2026, month: "April", title: "Idea of ninersoftware introduced" },
  { year: 2026, month: "March", title: "NinerRatings introduced and featured in the Niner Times", url: "https://www.ninertimes.com/news/ninerratings-a-new-addition-to-class-registration/article_8e4f4114-194b-476d-bc57-e95a2f3831a1.html" },
  { year: 2025, month: "August", title: "Gold Mine UNCC featured in the Niner Times", url: "https://www.ninertimes.com/news/charlotte-student-launches-gold-mine-app-to-help-users-navigate-campus-life/article_8ac8772f-b3c0-4bce-a44e-c7a4bbbd7786.html" }
];

// Add future coverage here, newest first. Credit the original publication and author.
// Optional: author: "Confirmed author name". Never use a guessed byline.
// Thumbnail: set image to a local path such as "assets/story-thumbnail.jpg".
// Leave image empty for a text-only row. Use imageAlt to describe the image.
const PRESS = [
  {
    title: "NinerRatings rebrands as Niner Registration, sparking a broader student software collective",
    date: "September 2026",
    publication: "Annie Waskey: Niner Times",
    image: "assets/thumbnail2.png",
    imageAlt: "",
    url: "https://www.ninertimes.com/news/ninerratings-a-new-addition-to-class-registration/article_8e4f4114-194b-476d-bc57-e95a2f3831a1.html"
  },
  {
    title: "The Gold Mine’s one-year anniversary: Here’s what’s new",
    date: "April 2026",
    publication: "Deonna Dickens: Niner Times",
    image: "assets/thumbnail4.png",
    imageAlt: "",
    url: "https://www.ninertimes.com/news/the-gold-mine-s-one-year-anniversary-here-s-what-s-new/article_cef68ac6-9bfa-49ab-8c8c-f8fccc4573f1.html"
  },
  {
    title: "NinerRatings: A new addition to class registration",
    date: "March 2026",
    publication: "Annie Waskey: Niner Times",
    image: "assets/thumbnail1.png",
    imageAlt: "",
    url: "https://www.ninertimes.com/news/ninerratings-a-new-addition-to-class-registration/article_8e4f4114-194b-476d-bc57-e95a2f3831a1.html"
  },
  {
    title: "Charlotte student launches 'Gold Mine' App to help users navigate campus life",
    date: "August 2025",
    publication: "Deonna Dickens: Niner Times",
    image: "assets/thumbnail3.png",
    imageAlt: "",
    url: "https://www.ninertimes.com/news/charlotte-student-launches-gold-mine-app-to-help-users-navigate-campus-life/article_8ac8772f-b3c0-4bce-a44e-c7a4bbbd7786.html"
  }
];

const ROLES = [

];

const TEAM = [
  {
    name: "Austin Mangold",
    image: "assets/austin.png",
    role: "Founder & President",
    bio: "Junior student studying Computer Science, prev. @ Deltek. Built NinerRatings, expanded development into Niner Registration.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/austmang/" },
      { label: "Website", url: "https://austinmangold.com/" }
    ]
  },
  {
    name: "Aakash Shah",
    image: "assets/aakash.png",
    role: "Vice President",
    bio: "Senior student studying Computer Science, current intern @ IBM, prev. @ Microsoft. Built the UNCC Gold Mine app, with over 3k+ downloads.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/aakash--shah/"},
      { label: "Website", url: "https://aakashxyz.com/" }
    ]
  }, 
  {
    name: "Kareem Saif",
    image: "assets/kareem.png",
    role: "Treasurer",
    bio: "Junior student studying Computer Science, current intern @ Ingersoll Rand. Co-developed Niner Market.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/kareemsaif/"},
      { label: "GitHub", url: "https://github.com/KSaifStack"}
    ]
  }
];

// DEVELOPERS: copy the example object into this list for each new member.
// Use a local photo path, and remove any profile links you do not need.
const DEVELOPERS = [
 {
    name: "Chand Mallangi",
    image: "assets/chandpng.png",
    role: "Full-Stack",
    bio: "Junior student studying Computer Science, prev. intern @ Commscope, Superstars. Created Niner Market.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gnanachand-mallangi" },
      { label: "GitHub", url: "https://github.com/gmallang" }
    ]
 },
 {
    name: "Qudrat Siyal",
    image: "assets/qudratjpg.jpg",
    role: "UI/UX",
    bio: "Graduate student studying Data Science. Previous intern at Project: Human City. UI/UX developer of Dine49.",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/qudrat-siyal" },
      { label: "GitHub", url: "https://github.com/qudratusa" }
    ]
 }
];

// NAVIGATION VIEW CONTROLLER SWITCHER
function navigate(route, pushState = true) {
  if (route === "news") route = "press"; // Preserve existing #news bookmarks.
  const ROUTES = ["home", "press", "projects", "team", "join"];
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

// Shared by Executive Board and Developers so their cards stay identical.
function renderMembers(container, members) {
  if (container) {
    container.innerHTML = members.map(m => `
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

// SUBPAGE ENGINE BUILDERS
function initSubpageLists() {
  const pressContainer = document.getElementById("press-list");
  if (pressContainer) {
    pressContainer.innerHTML = PRESS.map(story => `
      <article class="press-story">
        <a class="press-story-link${story.image ? ' has-thumbnail' : ''}" href="${story.url}" target="_blank" rel="noopener noreferrer">
          ${story.image ? `<img class="press-thumbnail" src="${story.image}" alt="${story.imageAlt || ''}" loading="lazy" decoding="async" />` : ''}
          <div class="press-story-copy">
            <h3>${story.title} <span class="press-external" aria-hidden="true">↗</span></h3>
            <p class="press-story-meta">${story.publication} · ${story.date}${story.author ? ' · ' + story.author : ''}</p>
          </div>
        </a>
      </article>
    `).join('');
  }
  const announcementsContainer = document.getElementById("announcements-list");
  if (announcementsContainer) {
    announcementsContainer.innerHTML = NEWS.filter(item => !item.url).map(item => `
      <div class="press-announcement">
        <span class="press-announcement-date">${item.month} ${item.year}</span>
        <p>${item.title}</p>
      </div>
    `).join('');
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

  renderMembers(document.getElementById("team-list"), TEAM);
  renderMembers(document.getElementById("developers-list"), DEVELOPERS);
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
          <a href="${r.formUrl}" target="_blank" rel="noopener noreferrer" class="job-role-apply">apply ↗</a>
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