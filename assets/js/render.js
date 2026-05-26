import { aboutData, skillsData, experienceData, projectsData } from './data.js';

/**
 * Renderiza o texto da seção "Sobre Mim"
 */
function renderAbout() {
    const placeholder = document.getElementById('about-text-placeholder');
    if (placeholder) {
        placeholder.textContent = aboutData.biography;
    }
}

/**
 * Renderiza os cards de competências técnicas com suas tags de habilidades
 */
function renderSkills() {
    const placeholder = document.getElementById('skills-list-placeholder');
    if (!placeholder) return;

    let html = '';
    skillsData.forEach(skillCategory => {
        const tagsHtml = skillCategory.tags
            .map(tag => `<span class="skills__tag">${tag}</span>`)
            .join('');

        html += `
            <div class="skills__card">
                <div class="skills__card-header">
                    <i class="bx ${skillCategory.icon} skills__card-icon"></i>
                    <h3 class="skills__card-title">${skillCategory.title}</h3>
                </div>
                <div class="skills__tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
    });

    placeholder.innerHTML = html;
}

/**
 * Renderiza a timeline das experiências profissionais
 */
function renderExperience() {
    const placeholder = document.getElementById('experience-list-placeholder');
    if (!placeholder) return;

    let html = '';
    experienceData.forEach(exp => {
        const bulletsHtml = exp.bullets
            .map(bullet => `
                <div class="experience__bullet">
                    <i class="bx bx-check-circle experience__bullet-icon"></i>
                    <p>${bullet}</p>
                </div>
            `)
            .join('');

        html += `
            <div class="experience__item">
                <span class="experience__marker"></span>
                <h3 class="experience__role">${exp.role}</h3>
                <div class="experience__company-info">
                    <span class="experience__company">${exp.company}</span>
                    <span class="experience__period">| ${exp.period}</span>
                </div>
                <div class="experience__bullets">
                    ${bulletsHtml}
                </div>
            </div>
        `;
    });

    placeholder.innerHTML = html;
}

/**
 * Renderiza a grade dos projetos em destaque
 */
function renderProjects() {
    const placeholder = document.getElementById('projects-list-placeholder');
    if (!placeholder) return;

    let html = '';
    projectsData.forEach(project => {
        const badgesHtml = project.tech
            .map(tech => `<span class="projects__tech-badge">${tech}</span>`)
            .join('');

        html += `
            <div class="projects__card">
                <h3 class="projects__project-title">
                    ${project.name}
                    <i class="bx bx-folder"></i>
                </h3>
                <div class="projects__tech-list">
                    ${badgesHtml}
                </div>
                <div class="projects__body">
                    <p class="projects__detail"><strong>Desafio:</strong> ${project.challenge}</p>
                    <p class="projects__detail"><strong>Solução:</strong> ${project.solution}</p>
                    <p class="projects__detail"><strong>Impacto:</strong> ${project.result}</p>
                </div>
            </div>
        `;
    });

    placeholder.innerHTML = html;
}

/**
 * Inicializador principal de renderização
 */
export function initRender() {
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
}
