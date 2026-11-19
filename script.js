const portfolio = {


    /* -----------------------------------------------
       PERSONAL INFORMATION
    ----------------------------------------------- */

    name: "Simon Banyong Millard",

    profession: "Game Developer | Gameplay Programmer | IT Consultant",

    email: "YOUR_EMAIL@example.com",

    github: "https://github.com/YOUR_USERNAME",

    linkedin: "https://www.linkedin.com/in/YOUR_USERNAME/",



    /* -----------------------------------------------
       SUMMARY
       Add or remove paragraphs as needed.
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

       Each category has:
       - category: Category heading
       - icon: Font Awesome icon name
       - items: List of skills
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

       Add one object for each project.

       Fields:
       - title: Project name
       - type: Professional or Personal Project
       - role: Your role in the project
       - description: What the project is about
       - technologies: Technologies used
       - links: URLs to project resources

       Leave links empty if you don't have a
       publicly accessible project page.
    ----------------------------------------------- */

    projects: [

        {
            title: "YOUR PROJECT NAME",

            type: "Personal Project",

            role: "Game Developer / Programmer",

            description:
                "Describe your project here. Explain the concept, its main features and what makes it interesting. Highlight the systems and mechanics you developed.",

            technologies: [
                "Unreal Engine",
                "Blueprint",
                "C++"
            ],

            links: [
                // { label: "GitHub", url: "https://github.com/..." },
                // { label: "Video", url: "https://youtube.com/..." }
            ]
        },


        {
            title: "YOUR PROJECT NAME",

            type: "Professional Project",

            role: "Gameplay Programmer",

            description:
                "Describe your contribution to this professional project. Focus on your responsibilities, technical challenges and the systems you worked on.",

            technologies: [
                "Unity",
                "C#"
            ],

            links: []
        },


        {
            title: "YOUR PROJECT NAME",

            type: "Personal Project",

            role: "Game Developer",

            description:
                "Describe another personal project, including its purpose, development process and the technologies you used.",

            technologies: [
                "Unity",
                "C#"
            ],

            links: []
        }

    ],



    /* -----------------------------------------------
       PROFESSIONAL EXPERIENCE

       Add one object for each job.

       Fields:
       - date: Employment period
       - title: Your job title
       - company: Company name
       - description: Your responsibilities
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

if (portfolio.email &&
    portfolio.email !== "YOUR_EMAIL@example.com") {

    const emailLink = document.createElement("a");

    emailLink.href = `mailto:${encodeURIComponent(portfolio.email)}`;
    emailLink.setAttribute("aria-label", "Email");
    emailLink.innerHTML = '<i class="fa-solid fa-envelope"></i>';

    socialLinks.appendChild(emailLink);

}


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
                    Game Developer &amp;
                    <span>Software Programmer</span>
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


            <div class="contact-card">

                <h3>Contact</h3>

                <p>
                    Interested in discussing game development,
                    programming or professional opportunities?
                </p>

                ${portfolio.email &&
                  portfolio.email !== "YOUR_EMAIL@example.com"
                    ? `<p>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:${encodeURIComponent(portfolio.email)}">
                            ${escapeHTML(portfolio.email)}
                        </a>
                    </p>`
                    : ""
                }

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


                        ${project.links && project.links.length > 0 ? `

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

                        ` : ""}

                    </article>

                `).join("")}

            </div>

        </section>

    `;

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

}


// Navigation event listeners

document.querySelectorAll(".nav-button").forEach(button => {

    button.addEventListener("click", () => {

        showTab(button.dataset.tab);

    });

});


// Load default tab

showTab("summary");
