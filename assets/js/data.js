// ==================== PORTFOLIO CONTENT DATA ====================

export const aboutData = {
    biography: "Formado em Gestão da Tecnologia da Informação pela Fatec Tatuí, atuo com foco estratégico em suporte técnico, administração de infraestruturas de rede e segurança da informação. Possuo experiência sólida no diagnóstico ágil e resolução de problemas complexos em ambientes corporativos de TI, com ênfase em estabilidade operacional e satisfação do usuário. Além disso, possuo noções sólidas em desenvolvimento front-end e no gerenciamento de CMS (WordPress), permitindo-me atuar com visão holística sobre a infraestrutura digital de empresas de qualquer porte. Meu perfil é proativo, focado em governança de TI e melhoria contínua dos processos de negócios."
};

export const skillsData = [
    {
        title: "Suporte & Hardware",
        icon: "bx-support",
        tags: [
            "Suporte Técnico (L1/L2/L3)",
            "Diagnóstico de Hardware",
            "Manutenção de Computadores",
            "Sistemas Operacionais Windows",
            "Sistemas Operacionais Linux",
            "Pacotes de Produtividade (M365)",
            "Gestão de Ativos de TI",
            "Metodologias ITIL"
        ]
    },
    {
        title: "Redes & Infraestrutura",
        icon: "bx-server",
        tags: [
            "Configuração de Roteadores/Switches",
            "Cabeamento Estruturado",
            "Protocolos TCP/IP & DNS/DHCP",
            "Administração de VPNs",
            "Monitoramento de Performance",
            "Infraestrutura de Rede Local (LAN)",
            "Configurações Wi-Fi Corporativo"
        ]
    },
    {
        title: "Segurança da Informação",
        icon: "bx-shield-quarter",
        tags: [
            "Políticas de Segurança Básicas",
            "Active Directory (AD)",
            "Group Policy Objects (GPO)",
            "Gestão de Antivírus Corporativos",
            "Auditoria de Vulnerabilidades",
            "Conscientização de Usuários",
            "Firewall Integrado"
        ]
    },
    {
        title: "Sistemas & Softwares",
        icon: "bx-cog",
        tags: [
            "Sistemas ERP",
            "Administração de Usuários",
            "Banco de Dados (Consulta)",
            "Integração de Sistemas",
            "Softwares de Inventário de Rede",
            "Ferramentas de Helpdesk/Chamados"
        ]
    },
    {
        title: "Desenvolvimento Web & CMS",
        icon: "bx-code-alt",
        tags: [
            "HTML5 (Estruturação)",
            "CSS3 (Estilização)",
            "Noções de JavaScript",
            "Gestão de WordPress",
            "Instalação de Plugins/Temas",
            "Otimização PageSpeed (SEO)",
            "Responsividade UX"
        ]
    }
];

export const experienceData = [
    {
        role: "Analista de Tecnologia",
        company: "TTL BRASIL - INFORMÁTICA",
        period: "Abril de 2025 - Presente (1 ano e 2 meses)",
        bullets: [
            "Atuação avançada (L2/L3) na análise e resolução de incidentes complexos de sistemas e infraestrutura, reduzindo de forma proativa o downtime de rede de clientes corporativos em 18%.",
            "Administração física e lógica de roteadores, switches e access points corporativos, assegurando alta conectividade e largura de banda otimizada.",
            "Gestão e implantação de plataformas EDR/Antivírus centralizados em mais de 120 estações de trabalho, neutralizando potenciais ameaças cibernéticas e vazamento de dados.",
            "Colaboração na integração e migração de novos módulos de sistemas ERP corporativos, alinhando regras de negócio e parametrização correta."
        ]
    },
    {
        role: "Técnico de Apoio ao Usuário de Informática (HELPDESK)",
        company: "Grupo Cowpig",
        period: "Janeiro de 2023 - Dezembro de 2024 (2 anos)",
        bullets: [
            "Prestação de suporte técnico de primeira linha (L1) focado na resolução rápida de chamados, atingindo uma média de First Contact Resolution (FCR) de 78% em mais de 80 usuários ativos.",
            "Manutenção preventiva e corretiva sistemática de hardware (placas, discos, memórias, periféricos), aumentando a vida útil média do parque computacional em 25%.",
            "Configuração e provisionamento de perfis de acesso no Active Directory corporativo, aplicando políticas de grupo básicas para conformidade regulatória interna.",
            "Desenvolvimento de tutoriais e manuais de onboarding tecnológico para novos colaboradores, diminuindo chamados de suporte de nível básico em 15%."
        ]
    }
];

export const projectsData = [
    {
        name: "Reestruturação de Ambiente de Rede Corporativa",
        tech: ["Windows Server", "Active Directory", "GPO", "Switches Cisco", "VLANs"],
        challenge: "O cliente sofria com lentidão no tráfego de rede interna, quedas de sinal e riscos severos de segurança cibernética devido à falta de controle sobre softwares instalados localmente nas máquinas corporativas.",
        solution: "Desenho e aplicação de arquitetura segmentada com VLANs separando dados operacionais de acessos externos. Implementação de políticas de grupo (GPOs) no Active Directory central para impedir downloads e instalações de arquivos suspeitos.",
        result: "Uptime da rede corporativa elevado para 99.9%, e redução de 90% nos chamados associados à segurança ou arquivos corrompidos."
    },
    {
        name: "Website Institucional WordPress Premium",
        tech: ["HTML5", "CSS3", "WordPress CMS", "Elementor", "SEO Best Practices"],
        challenge: "Desenvolver uma vitrine online profissional para divulgação de serviços de consultoria técnica, que carregasse de forma rápida e segura em dispositivos móveis e possuísse bom posicionamento de SEO.",
        solution: "Montagem de tema responsivo, parametrização de compressão de imagens automáticas (WebP), carregamento tardio de mídias (lazy load) e blindagem de segurança através do plugin Wordfence.",
        result: "Alcançou pontuação de 92/100 no Google PageSpeed Insights (Mobile) e elevou o fluxo orgânico de captação de clientes no primeiro mês."
    }
];
