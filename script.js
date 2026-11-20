const portfolio = {


    /* -----------------------------------------------
       PERSONAL INFORMATION
    ----------------------------------------------- */

    name: "Simon Banyong Millard",

    profession: "Game Designer, Programmer and IT Consultant",

    github: "https://github.com/simonbanyongmillard/simonbanyongmillard.github.io",

    linkedin: "https://www.linkedin.com/in/simon-millard-24962652/",

    portrait: "assets/portrait/profile.jpg",


    /* -----------------------------------------------
       SUMMARY
    ----------------------------------------------- */

    summary: [

        "I hold a BSc. in Software Development and an MSc. in Media Technology and Games from the IT University of Copenhagen. I combine a strong technical foundation with experience in professional software and game development.",

        "My game development experience primarily includes working with Unity3D and Unreal Engine, both as a programmer and designer. I also have experience as both project lead and team lead.",
        
        "I have experience with tools development, gameplay design and programming, deveveloping technical architecture, working with 2D and 3D animations, implementing networking code, user interfance, procedural generation, pathfinding and dialog systems, and much more."
    ],

    /* -----------------------------------------------
       HOBBIES AND INTERESTS
    ----------------------------------------------- */
    
    hobbies: [
        {
            name: "Dungeons & Dragons",
            description: "Playing tabletop role-playing games and exploring fantasy worlds with friends and colleagues. I have been playing as both a Dungeon Master and a player in various long term campaigns and separate one-shot adventures for many years."
        },
        {
            name: "Video Games",
            description: "Playing games across genres and platforms. I have a very varied taste, but some of my all time favourite games including RPG and RTS games, such as Fallout, Baldur's Gate, Warcraft, StarCraft and Diablo. I also have a passion for indie games."
        },
        {
            name: "Game Design",
            description: "Following developments in game design and discussing ideas, mechanics, and player experiences. Developing my design skills and knowledge is a passion I have pursued since a young age; both professionally and as a personal hobby."
        },
        {
            name: "Travel & Hiking",
            description: "I love to travel and I love hiking (especially up mountains!). Exploring the wild as well as experiencing different cultures and ways of living has been a great source of inspiration for my work with game design and world building."
        }
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
            degree: "BSc. IT",

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
            date: "2023 – PRESENT",

            title: "Manager",

            company: "Netcompany (netcompany.com)",

            description:
                "Project lead on the digital government project Digital Post. Also assisted with transition projects for NBS (Netcompany Banking Services), as the former SDC was acquired by Netcompany and rebranded to NBS."
        },

        {
            date: "2023 – 2024",

            title: "Developer",

            company: "Panik Studio (panikstudio.dk)",

            description:
                "Unreal Engine prototyping, technical infrastructure, coordination and problem solving while working on Panik Stuio's first game \"PTSD\"."
        },
        
        {
            date: "2019 – 2023",

            title: "Founder and app developer",

            company: "GameNyte",

            description:
                "Building a digital, mobile, social game platform. Worked on architecture, Unity3D app development (game app and game editor), networking code, and more."
        },

        {
            date: "2018 – 2021",

            title: "Senior Consultant",

            company: "Netcompany (netcompany.com)",

            description:
                "Team management and software development on several projects, incl. Falck,  Örsted, Topdanmark / IF, and internal Netcompany systems."
        },
        
        {
            date: "2016 – 2018",

            title: "Senior Developer",

            company: "Skidos Labs (skidos.com)",

            description:
                "I led the client-side Unity3D development of the Skidos SDK and Unity3D games, such as Skidos Bike Racing, and Brainy City Rush."
        },

        {
            date: "2012 – 2015",

            title: "Developer",

            company: "GameAnalytics (gameanalytics.com)",

            description:
                "I primarily worked with the design and implementation of GameAnalytics' Unity3D  SDK. I also worked on an Unreal Engine 4 SDK and a standalone C++ SDK."
        },


        {
            date: "2011 – 2018",

            title: "Founder, designer and programmer",

            company: "Frostwolf Studios",

            description:
                "Prototypes, design and implementation for a mobile game and two unreleased PC games."
        },

        {
            date: "2011 – 2011",

            title: "Lead programmer",

            company: "DADIU – National Academy of Digital Interactive Entertainment (dadiu.dk)",

            description:
                "I led a team of programmers working on the game \"A Mother’s Inferno\"."
        },

        {
            date: "2008 – 2009",

            title: "Technical translator",

            company: "Lund&Bendsen (logb.dk)",

            description:
                "Danish to English translation of java and web development educational material."
        },

        {
            date: "2000 – 2000",

            title: "Database programmer",

            company: "Danish Technological Institute (dti.dk)",

            description:
                "Worked mainly with MYSQL databases."
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

            <!-- PROFILE -->

            <div class="section-header">

                <div class="eyebrow">01 / PROFILE</div>

                <div class="summary-intro">
                    Hello, I am <span>Simon Banyong Millard</span>

                    <h2>Game Designer, Programmer and IT Consultant</h2>

                    <div class="summary-text">

                        ${portfolio.summary.map(paragraph => `
                            <p>${escapeHTML(paragraph)}</p>
                        `).join("")}

                    </div>

                </div>

            </div>


            <!-- EDUCATION -->

            <div class="summary-section">

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

            </div>


            <!-- HOBBIES & INTERESTS -->

            <div class="summary-section">

                <div class="section-header">

                    <div class="eyebrow">03 / PERSONAL</div>

                    <h2 class="section-title">Hobbies &amp; Interests</h2>

                    <p class="section-description">
                        Outside of development, I enjoy exploring games, creative ideas, and the outdoors.
                    </p>
                </div>

                <div class="hobbies-list">

                    ${portfolio.hobbies.map(hobby => `
                        <div class="hobby-item">

                            <h3>${escapeHTML(hobby.name)}</h3>

                            <p>${escapeHTML(hobby.description)}</p>

                        </div>
                    `).join("")}

                </div>

            </div>


            <!-- CONTACT -->

            <div class="summary-section">

                <div class="section-header">

                    <div class="eyebrow">04 / CONTACT</div>

                    <h2 class="section-title">Get in Touch</h2>

                    <p class="section-description">
                        Interested in working together or discussing a project?
                    </p>

                </div>

                <div class="contact-section">

                    <a
                        href="${safeURL(portfolio.linkedin) || '#'}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-link"
                    >
                        Send me a private message on LinkedIn
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

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

            <div class="eyebrow">05 / TECHNICAL EXPERTISE</div>

            <div class="section-header">

                <h2 class="section-title">
                    Skills &amp; Technologies
                </h2>

                <p class="section-description">
                    Highlighted skills, including programming languages, game engines and development tools.
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

            <div class="eyebrow">06 / SELECTED WORK</div>

            <div class="section-header">

                <h2 class="section-title">Projects</h2>

                <p class="section-description">
                    Highlighted professional and personal projects.
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

            <div class="eyebrow">07 / CAREER HISTORY</div>

            <div class="section-header">

                <h2 class="section-title">
                    Professional Experience
                </h2>

                <p class="section-description">
                    Career history - timeline of highlighted professional positions and achievements.
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
