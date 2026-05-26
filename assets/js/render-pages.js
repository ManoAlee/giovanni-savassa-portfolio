import { aboutData, skillsData, experienceData, projectsData } from './data.js';

/**
 * Renderiza o texto da página "Sobre Mim"
 */
function renderAbout() {
    const placeholder = document.getElementById('about-text-placeholder');
    if (placeholder) {
        placeholder.textContent = aboutData.biography;
    }
}

/**
 * Renderiza os cards de competências técnicas com suas tags de habilidades e cores por categoria
 */
function renderSkills() {
    const placeholder = document.getElementById('skills-list-placeholder');
    if (!placeholder) return;

    const categoryColors = {
        "Suporte & Hardware": "support",
        "Redes & Infraestrutura": "network",
        "Segurança da Informação": "security",
        "Sistemas & Softwares": "systems",
        "Desenvolvimento Web & CMS": "web"
    };

    let html = '';
    skillsData.forEach(skillCategory => {
        const colorClass = categoryColors[skillCategory.title] || 'default';
        const tagsHtml = skillCategory.tags
            .map(tag => `<span class="skills__tag skills__tag--${colorClass}">${tag}</span>`)
            .join('');

        html += `
            <div class="skills__card skills__card--${colorClass}">
                <div class="skills__card-header">
                    <div class="skills__icon-box skills__icon-box--${colorClass}">
                        <i class="bx ${skillCategory.icon} skills__card-icon"></i>
                    </div>
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
 * Renderiza a grade dos projetos em destaque com seções de Desafio, Solução e Impacto
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
                <div class="projects__header">
                    <h3 class="projects__project-title">${project.name}</h3>
                    <i class="bx bx-folder-open projects__folder-icon"></i>
                </div>
                
                <div class="projects__tech-list">
                    ${badgesHtml}
                </div>
                
                <div class="projects__body">
                    <div class="projects__detail-box projects__detail-box--challenge">
                        <span class="projects__detail-title">
                            <i class="bx bx-error-circle"></i> Desafio
                        </span>
                        <p class="projects__detail-text">${project.challenge}</p>
                    </div>
                    
                    <div class="projects__detail-box projects__detail-box--solution">
                        <span class="projects__detail-title">
                            <i class="bx bx-cog"></i> Solução
                        </span>
                        <p class="projects__detail-text">${project.solution}</p>
                    </div>
                    
                    <div class="projects__detail-box projects__detail-box--impact">
                        <span class="projects__detail-title">
                            <i class="bx bx-trending-up"></i> Impacto
                        </span>
                        <p class="projects__detail-text">${project.result}</p>
                    </div>
                </div>
            </div>
        `;
    });

    placeholder.innerHTML = html;
}

/**
 * Inicializador principal de renderização baseado nos placeholders presentes na página atual
 */
export function initRenderPages() {
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
}
