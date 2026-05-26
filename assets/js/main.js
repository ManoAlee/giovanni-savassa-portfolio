import { initRender } from './render.js';

/* ==================== INICIALIZAÇÃO DE RENDERIZAÇÃO ==================== */
document.addEventListener('DOMContentLoaded', () => {
    initRender();
    initApp();
});

function initApp() {
    /* ==================== SHOW/HIDE MENU MOBILE ==================== */
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    // Abre Menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Fecha Menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Remove Menu ao clicar em links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    /* ==================== ADICIONAR SOMBRA NO CABEÇALHO AO SCROLL ==================== */
    const header = document.getElementById('header');
    const scrollHeader = () => {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    };
    window.addEventListener('scroll', scrollHeader);

    /* ==================== EXIBIR BOTÃO SCROLL UP ==================== */
    const scrollUpButton = document.getElementById('scroll-up');
    const scrollUp = () => {
        if (window.scrollY >= 350) {
            scrollUpButton.classList.add('show-scroll');
        } else {
            scrollUpButton.classList.remove('show-scroll');
        }
    };
    window.addEventListener('scroll', scrollUp);

    /* ==================== HIGHLIGHT ATIVO DO MENU AO SCROLL ==================== */
    const sections = document.querySelectorAll('section[id]');
    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

            if (sectionsClass) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link');
                } else {
                    sectionsClass.classList.remove('active-link');
                }
            }
        });
    };
    window.addEventListener('scroll', scrollActive);

    /* ==================== ALTERNADOR DE TEMA ESCURO/CLARO ==================== */
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'bx-sun'; // Ícone alternativo para o tema claro

    // Recupera tema salvo anteriormente pelo usuário
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // Detecta o tema padrão atual do corpo HTML
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

    // Aplica o tema anterior salvo (caso exista)
    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Ação do botão de alternar tema
    themeButton.addEventListener('click', () => {
        // Inverte o estado da classe do tema no body
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        
        // Salva a preferência
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
    });

    /* ==================== COPIAR E-MAIL COM FEEDBACK DE INTERFACE ==================== */
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'giovannisavassa4@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                // Feedback visual do botão
                const originalText = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = `Copiado! <i class='bx bx-check'></i>`;
                copyEmailBtn.style.color = 'var(--second-color)';
                
                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalText;
                    copyEmailBtn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Erro ao copiar o e-mail: ', err);
            });
        });
    }
}
