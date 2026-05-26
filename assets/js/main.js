import { initRenderPages } from './render-pages.js';
import { initTerminal } from './terminal.js';

/* ==================== INICIALIZAÇÃO DO PORTFÓLIO MULTI-PÁGINAS ==================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderiza o conteúdo dinâmico da página atual
    initRenderPages();
    
    // 2. Inicializa o terminal interativo (se estiver na Home)
    if (document.getElementById('terminal-body')) {
        initTerminal();
    }
    
    // 3. Inicializa funções globais (Tema, Menu, Eventos)
    initAppBehavior();
});

function initAppBehavior() {
    /* ==================== DETECTOR DE PÁGINA ATIVA NO MENU ==================== */
    const navLinks = document.querySelectorAll('.nav__link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Verifica se a página atual corresponde ao link (para navegação multi-páginas)
        if (currentPath.includes(linkPath) && linkPath !== 'index.html' && linkPath !== '#') {
            link.classList.add('active-link');
        } else if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && (linkPath === 'index.html' || linkPath === '#')) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });

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
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('show-menu');
        });
    });

    /* ==================== SOMBRA NO CABEÇALHO AO SCROLL ==================== */
    const header = document.getElementById('header');
    const scrollHeader = () => {
        if (header) {
            if (window.scrollY >= 50) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        }
    };
    window.addEventListener('scroll', scrollHeader);

    /* ==================== EXIBIR BOTÃO SCROLL UP ==================== */
    const scrollUpButton = document.getElementById('scroll-up');
    const scrollUp = () => {
        if (scrollUpButton) {
            if (window.scrollY >= 350) {
                scrollUpButton.classList.add('show-scroll');
            } else {
                scrollUpButton.classList.remove('show-scroll');
            }
        }
    };
    window.addEventListener('scroll', scrollUp);

    /* ==================== ALTERNADOR DE TEMA ESCURO/CLARO (PERSISTENTE) ==================== */
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'bx-sun'; // Sol para trocar para o claro, lua para o escuro

    // 1. Carrega a preferência salva ou respeita a configuração padrão do navegador
    const savedTheme = localStorage.getItem('selected-theme');
    
    if (savedTheme) {
        // Se já existe uma escolha do usuário
        if (savedTheme === 'dark') {
            document.body.classList.add(darkTheme);
            if (themeButton) {
                themeButton.classList.remove(iconTheme);
                themeButton.classList.add('bx-moon');
            }
        } else {
            document.body.classList.remove(darkTheme);
            if (themeButton) {
                themeButton.classList.add(iconTheme);
                themeButton.classList.remove('bx-moon');
            }
        }
    } else {
        // Se é a primeira visita, inicia com o tema escuro padrão
        document.body.classList.add(darkTheme);
        if (themeButton) {
            themeButton.classList.remove(iconTheme);
            themeButton.classList.add('bx-moon');
        }
    }

    // 2. Evento de clique para alternar
    if (themeButton) {
        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(darkTheme);
            
            const isDark = document.body.classList.contains(darkTheme);
            if (isDark) {
                themeButton.classList.remove(iconTheme);
                themeButton.classList.add('bx-moon');
                localStorage.setItem('selected-theme', 'dark');
            } else {
                themeButton.classList.add(iconTheme);
                themeButton.classList.remove('bx-moon');
                localStorage.setItem('selected-theme', 'light');
            }
        });
    }

    /* ==================== COPIAR E-MAIL COM FEEDBACK DE INTERFACE ==================== */
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'giovannisavassa@outlook.com';
            navigator.clipboard.writeText(email).then(() => {
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
