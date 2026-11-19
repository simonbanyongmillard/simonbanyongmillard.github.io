const portfolio = {


    /* -----------------------------------------------
       PERSONAL INFORMATION
    ----------------------------------------------- */

    name: "Simon Banyong Millard",

    profession: "Game Designer and Programmer",

    github: "https://github.com/simonbanyongmillard/simonbanyongmillard.github.io",

    linkedin: "https://www.linkedin.com/in/simon-millard-24962652/",



    /* -----------------------------------------------
       SUMMARY
    ----------------------------------------------- */

    summary: [

        "I am a Game Developer, Gameplay Programmer and IT Consultant with an academic background in software development, media technology and games.",

        "I hold both a BSc in Software Development and an MSc in Media Technology and Games from the IT University of Copenhagen. I combine a strong technical foundation with experience in professional software and game development.",

        "My development experience includes working with Unity and Unreal Engine, using C++, C# and Unreal Engine Blueprints. I also enjoy developing personal projects, exploring new technologies and building gameplay systems."
    ],



    /* -----------------------------------------------
       EDUCATION
    ----------------------------------------------- */

    education: [

        {
            degree: "MSc. IT",

            title: "Media Technology and Games",

            institution: "IT University of Copenhagen",

            year: "2012"
        },

        {
            degree: "BSc.",

            title: "Software Development",

            institution: "IT University of Copenhagen",

            year: "2010"
        }

    ],



    /* -----------------------------------------------
       SKILLS
    ----------------------------------------------- */

    skills: [

        {
            category: "Programming Languages",

            icon: "fa-code",

            items: [
                { name: "C#", rating: 5 },
                { name: "C++", rating: 2 },
                { name: "Java", rating: 3 },
                { name: "Blueprint", rating: 4 }
            ]
        },

        {
            category: "Game Development",

            icon: "fa-gamepad",

            items: [
                { name: "Unity", rating: 4 },
                { name: "Unreal Engine", rating: 5 },
                { name: "Gameplay Programming", rating: 5 },
                { name: "Game Mechanics", rating: 3 },
                { name: "Game Systems", rating: 3 }
            ]
        },

        {
            category: "Software Development",

            icon: "fa-laptop-code",

            items: [
                { name: "Object-Oriented Programming", rating: 5 },
                { name: "Software Architecture", rating: 4 },
                { name: "Debugging", rating: 4 },
                { name: "Problem Solving", rating: 5 }
            ]
        },

        {
            category: "Development Tools",

            icon: "fa-screwdriver-wrench",

            items: [
                { name: "Git", rating: 5 },
                { name: "Perforce", rating: 3 },
                { name: "Visual Studio", rating: 5 },
                { name: "Jira", rating: 4 },
                { name: "Confluence", rating: 4 }
            ]
        }

    ],



    /* -----------------------------------------------
       PROJECTS
    ----------------------------------------------- */

    
projects: [

    {
        // BASIC INFORMATION

        title: "Local Multiplayer Games Platform",

        type: "Personal Project",

        role: "Game Developer / Programmer",

        description:
            "A roleplaying game featuring custom gameplay systems, interactive environments and character progression.",

        thumbnail: "assets/projects/gamenyte/gamenyte-thumbnail.jpg",


        // PROJECT DETAILS

        details: {

            overview:
                "Write a detailed description of the project. Explain the game concept, its objectives, intended audience and current development status.",

            contributions: [
                "Designed and implemented the gameplay architecture.",
                "Developed player and NPC gameplay systems.",
                "Created interactive environmental mechanics.",
                "Implemented custom Blueprint functionality."
            ],


            // TECHNICAL CHALLENGES

            challenges: [

                {
                    title: "Challenge: Gameplay Architecture",

                    problem:
                        "Describe the technical problem you encountered. Explain why the existing approach was insufficient or what made the problem difficult.",

                    solution:
                        "Explain your solution, the architecture or algorithms you implemented and why you chose this approach."
                },

                {
                    title: "Challenge: Character Systems",

                    problem:
                        "Describe another interesting technical challenge.",

                    solution:
                        "Explain how you solved it and what you learned."
                }

            ],


            // PROJECT SCREENSHOTS

            gallery: [

                {
                    src: "assets/projects/rpg-project/screenshot-01.jpg",
                    caption: "Gameplay environment"
                },

                {
                    src: "assets/projects/rpg-project/screenshot-02.jpg",
                    caption: "Gameplay systems"
                },

                {
                    src: "assets/projects/rpg-project/screenshot-03.jpg",
                    caption: "Technical implementation"
                }

            ]

        },


        // TECHNOLOGIES

        technologies: [
            "Unreal Engine",
            "Blueprint",
            "C++"
        ],


        // EXTERNAL LINKS

        links: [

            {
                label: "GitHub",
                url: "https://github.com/YOUR_USERNAME/YOUR_PROJECT"
            },

            {
                label: "Video",
                url: "https://www.youtube.com/"
            }

        ]

    }

],



    /* -----------------------------------------------
       PROFESSIONAL EXPERIENCE
    ----------------------------------------------- */

    experience: [

        {
            date: "YEAR – PRESENT",

            title: "Gameplay Programmer",

            company: "COMPANY NAME",

            description:
                "Describe your responsibilities, contributions and achievements. Mention relevant technologies and game development systems."
        },


        {
            date: "YEAR – YEAR",

            title: "Game Developer",

            company: "COMPANY NAME",

            description:
                "Describe the projects you worked on, your role in the development team and the technical work you performed."
        },


        {
            date: "YEAR – YEAR",

            title: "IT Consultant",

            company: "COMPANY NAME",

            description:
                "Describe your consulting responsibilities, technical expertise and the solutions you delivered."
        }

    ]

};




/* =====================================================
   WEBSITE FUNCTIONALITY

   DO NOT NORMALLY EDIT BELOW THIS POINT.
===================================================== */


// Basic HTML escaping for portfolio content

function escapeHTML(value) {

    return String(value ?? "").replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];

    });

}


// Validate external links

function safeURL(url) {

    try {

        const parsed = new URL(url);

        if (parsed.protocol === "https:" ||
            parsed.protocol === "http:") {

            return parsed.href;

        }

    } catch (error) {

        return "";

    }

    return "";

}


// Set header information

document.getElementById("name").textContent =
    portfolio.name;

document.getElementById("profession").textContent =
    portfolio.profession;

document.getElementById("footer-name").textContent =
    portfolio.name;

document.getElementById("footer-year").textContent =
    new Date().getFullYear();


// Generate social links

const socialLinks = document.getElementById("social-links");

function addSocialLink(url, icon, label) {

    const safe = safeURL(url);

    if (!safe) return;

    const link = document.createElement("a");

    link.href = safe;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", label);

    link.innerHTML = `<i class="${icon}"></i>`;

    socialLinks.appendChild(link);

}

addSocialLink(
    portfolio.github,
    "fa-brands fa-github",
    "GitHub"
);

addSocialLink(
    portfolio.linkedin,
    "fa-brands fa-linkedin",
    "LinkedIn"
);

// Main content container

const content = document.getElementById("content");



// =====================================================
// SUMMARY
// =====================================================

function renderSummary() {

    return `

        <section class="section">

            <div class="eyebrow">01 / PROFILE</div>

            <div class="summary-intro">

                <h2>
                    Game Designer &amp; Programmer
                </h2>

                <div class="summary-text">

                    ${portfolio.summary.map(paragraph => `

                        <p>${escapeHTML(paragraph)}</p>

                    `).join("")}

                </div>

            </div>


            <div class="section-header">

                <div class="eyebrow">02 / ACADEMIC BACKGROUND</div>

                <h2 class="section-title">Education</h2>

                <p class="section-description">
                    Academic qualifications from the IT University of Copenhagen.
                </p>

            </div>


            <div class="education-grid">

                ${portfolio.education.map(item => `

                    <article class="education-card">

                        <div class="degree">
                            ${escapeHTML(item.degree)}
                        </div>

                        <h3>${escapeHTML(item.title)}</h3>

                        <p>${escapeHTML(item.institution)}</p>

                        <p>${escapeHTML(item.year)}</p>

                    </article>

                `).join("")}

            </div>


            <div class="contact-section">
                <h2>Get in Touch</h2>
            
                <p>
                    Interested in working together or discussing a project?
                </p>
            
                <a
                    href="${safeURL(portfolio.linkedin) || '#'}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-link"
                >
                    Private message on LinkedIn <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>

        </section>

    `;

}



// =====================================================
// SKILLS
// =====================================================


function renderSkills() {

    return `

        <section class="section">

            <div class="eyebrow">03 / TECHNICAL EXPERTISE</div>

            <div class="section-header">

                <h2 class="section-title">
                    Skills &amp; Technologies
                </h2>

                <p class="section-description">
                    Programming languages, game engines and development tools.
                </p>

            </div>

            <div class="skill-grid">

                ${portfolio.skills.map(group => `

                    <article class="skill-category">

                        <h3>
                            <i class="fa-solid ${escapeHTML(group.icon)}"></i>
                            ${escapeHTML(group.category)}
                        </h3>

                        <div class="skill-list">

                            ${group.items.map(skill => {

                                const rating = Math.max(
                                    1,
                                    Math.min(5, Number(skill.rating) || 1)
                                );

                                return `

                                    <div class="skill-entry">

                                        <div class="skill-name">
                                            ${escapeHTML(skill.name)}
                                        </div>

                                        <div class="skill-rating"
                                             role="img"
                                             aria-label="${rating} out of 5">

                                            ${[1, 2, 3, 4, 5].map(level => `

                                                <span class="rating-dot
                                                    ${level <= rating ? "filled" : ""}">
                                                </span>

                                            `).join("")}

                                        </div>

                                        <span class="rating-number">
                                            ${rating}/5
                                        </span>

                                    </div>

                                `;

                            }).join("")}

                        </div>

                    </article>

                `).join("")}

            </div>

        </section>

    `;

}



// =====================================================
// PROJECTS
// =====================================================


function renderProjects() {

    return `

        <section class="section">

            <div class="eyebrow">04 / SELECTED WORK</div>

            <div class="section-header">

                <h2 class="section-title">Projects</h2>

                <p class="section-description">
                    Professional work and personal development projects.
                </p>

            </div>


            <div class="project-grid">

                ${portfolio.projects.map((project, index) => `

                    <article class="project-card">

                        ${project.thumbnail ? `

                            <div class="project-thumbnail">

                                <img
                                    src="${safeImageURL(project.thumbnail)}"
                                    alt="${escapeHTML(project.title)}"
                                    loading="lazy"
                                >

                            </div>

                        ` : ""}


                        <div class="project-number">
                            PROJECT_${String(index + 1).padStart(2, "0")}
                        </div>

                        <h3>
                            ${escapeHTML(project.title)}
                        </h3>

                        <div class="project-type">
                            ${escapeHTML(project.type)}
                        </div>

                        <div class="project-role">
                            <strong>Role:</strong>
                            ${escapeHTML(project.role)}
                        </div>

                        <p class="project-description">
                            ${escapeHTML(project.description)}
                        </p>


                        <div class="project-technologies">

                            ${project.technologies.map(technology => `

                                <span>
                                    ${escapeHTML(technology)}
                                </span>

                            `).join("")}

                        </div>


                        <button
                            class="project-detail-button"
                            data-project-index="${index}"
                        >

                            View Case Study

                            <i class="fa-solid fa-arrow-right"></i>

                        </button>

                    </article>

                `).join("")}

            </div>

        </section>

    `;

}



/* =====================================================
   PROJECT DETAIL VIEW
===================================================== */


// Safely resolve project image paths.
// Supports local assets and HTTPS image URLs.

function safeImageURL(path) {

    if (!path) return "";

    const url = safeURL(path);

    if (url) return escapeHTML(url);

    if (
        typeof path === "string" &&
        /^[a-zA-Z0-9_./-]+$/.test(path) &&
        !path.includes("..") &&
        !path.startsWith("/")
    ) {
        return escapeHTML(path);
    }

    return "";

}


// Generate individual project presentation

function renderProjectDetail(project) {

    const details = project.details || {};


    return `

        <section class="section project-detail">


            <button class="back-button" id="back-to-projects">

                <i class="fa-solid fa-arrow-left"></i>

                Back to Projects

            </button>


            <div class="eyebrow">PROJECT CASE STUDY</div>


            <h2 class="detail-title">
                ${escapeHTML(project.title)}
            </h2>


            <div class="detail-meta">

                <span>${escapeHTML(project.type)}</span>

                <span>${escapeHTML(project.role)}</span>

            </div>


            <!-- PROJECT OVERVIEW -->

            <div class="detail-section">

                <h3>Project Overview</h3>

                <p>
                    ${escapeHTML(details.overview || project.description)}
                </p>

            </div>


            <!-- TECHNOLOGIES -->

            <div class="detail-section">

                <h3>Technologies</h3>

                <div class="project-technologies">

                    ${project.technologies.map(technology => `

                        <span>
                            ${escapeHTML(technology)}
                        </span>

                    `).join("")}

                </div>

            </div>


            <!-- PERSONAL CONTRIBUTIONS -->

            ${details.contributions?.length ? `

                <div class="detail-section">

                    <h3>My Contributions</h3>

                    <ul class="contribution-list">

                        ${details.contributions.map(item => `

                            <li>${escapeHTML(item)}</li>

                        `).join("")}

                    </ul>

                </div>

            ` : ""}


            <!-- TECHNICAL CHALLENGES -->

            ${details.challenges?.length ? `

                <div class="detail-section">

                    <h3>Technical Challenges &amp; Solutions</h3>

                    ${details.challenges.map(challenge => `

                        <article class="challenge-card">

                            <h4>
                                ${escapeHTML(challenge.title)}
                            </h4>

                            <div class="challenge-label">
                                THE CHALLENGE
                            </div>

                            <p>
                                ${escapeHTML(challenge.problem)}
                            </p>

                            <div class="solution-label">
                                THE SOLUTION
                            </div>

                            <p>
                                ${escapeHTML(challenge.solution)}
                            </p>

                        </article>

                    `).join("")}

                </div>

            ` : ""}


            <!-- PROJECT GALLERY -->

            ${details.gallery?.length ? `

                <div class="detail-section">

                    <h3>Project Gallery</h3>

                    <div class="project-gallery">

                        ${details.gallery.map(image => {

                            const src = safeImageURL(image.src);

                            if (!src) return "";

                            return `

                                <figure class="gallery-item">

                                    <a href="${src}" target="_blank"
                                       rel="noopener noreferrer">

                                        <img
                                            src="${src}"
                                            alt="${escapeHTML(image.caption)}"
                                            loading="lazy"
                                        >

                                    </a>

                                    <figcaption>
                                        ${escapeHTML(image.caption)}
                                    </figcaption>

                                </figure>

                            `;

                        }).join("")}

                    </div>

                </div>

            ` : ""}


            <!-- EXTERNAL LINKS -->

            ${project.links?.length ? `

                <div class="detail-section">

                    <h3>Project Links</h3>

                    <div class="project-links">

                        ${project.links.map(link => {

                            const url = safeURL(link.url);

                            return url ? `

                                <a href="${escapeHTML(url)}"
                                   target="_blank"
                                   rel="noopener noreferrer">

                                    ${escapeHTML(link.label)}

                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>

                                </a>

                            ` : "";

                        }).join("")}

                    </div>

                </div>

            ` : ""}


        </section>

    `;

}


// Open individual project

function showProjectDetail(index) {

    const project = portfolio.projects[index];

    if (!project) return;


    content.innerHTML = renderProjectDetail(project);


    // Back navigation

    document.getElementById("back-to-projects")
        .addEventListener("click", () => {

            showTab("projects");

        });

}


// =====================================================
// EXPERIENCE TIMELINE
// =====================================================

function renderExperience() {

    return `

        <section class="section">

            <div class="eyebrow">05 / CAREER HISTORY</div>

            <div class="section-header">

                <h2 class="section-title">
                    Professional Experience
                </h2>

                <p class="section-description">
                    Professional positions and career history.
                </p>

            </div>


            <div class="timeline">

                ${portfolio.experience.map(item => `

                    <article class="timeline-item">

                        <div class="timeline-date">
                            ${escapeHTML(item.date)}
                        </div>

                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>

                        <div class="timeline-company">
                            ${escapeHTML(item.company)}
                        </div>

                        <p class="timeline-description">
                            ${escapeHTML(item.description)}
                        </p>

                    </article>

                `).join("")}

            </div>

        </section>

    `;

}



// =====================================================
// NAVIGATION
// =====================================================

const renderers = {

    summary: renderSummary,

    skills: renderSkills,

    projects: renderProjects,

    experience: renderExperience

};



function showTab(tabName) {

    if (!renderers[tabName]) return;


    // Update active navigation button

    document.querySelectorAll(".nav-button").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.tab === tabName
        );

    });


    // Render selected section

    content.innerHTML = renderers[tabName]();


    // Add project detail click handlers

    if (tabName === "projects") {

        content.querySelectorAll(".project-detail-button")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const index = Number(
                        button.dataset.projectIndex
                    );

                    showProjectDetail(index);

                });

            });

    }

}


// Navigation event listeners

document.querySelectorAll(".nav-button").forEach(button => {

    button.addEventListener("click", () => {

        showTab(button.dataset.tab);

    });

});


// Load default tab

showTab("summary");
