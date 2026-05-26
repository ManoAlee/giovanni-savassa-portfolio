// ==================== PORTFOLIO CONTENT DATA ====================

export const aboutData = {
    biography: "Profissional de Tecnologia da Informação com experiência sólida em suporte técnico e atuação prática em ambientes web (CMS). Possuo conhecimento em WordPress, realizando atualizações, publicação e ajustes de conteúdo em páginas, além de personalizações básicas com HTML e CSS. Familiarizado com ferramentas de gestão de chamados (tickets), sou focado em organização, qualidade e eficiência técnica. Busco constante evolução profissional na área de CMS e desenvolvimento front-end."
};

export const skillsData = [
    {
        title: "Suporte & Hardware",
        icon: "bx-support",
        tags: [
            "Suporte Técnico (L1/L2)",
            "Suporte Presencial & Remoto",
            "Manutenção de Workstations",
            "Hardware & Softwares",
            "Ferramentas de Helpdesk",
            "Gestão de Tickets/Chamados",
            "Zebra Software",
            "GoTo PBX (Telefonia IP)"
        ]
    },
    {
        title: "Redes & Infraestrutura",
        icon: "bx-server",
        tags: [
            "Configuração de Redes Corporativas",
            "Firewalls pfSense",
            "UniFi Network (Ubiquiti)",
            "Active Directory (AD)",
            "cPanel / Hospedagem Web",
            "Administração de Painéis de E-mail",
            "MailInspector"
        ]
    },
    {
        title: "Segurança da Informação",
        icon: "bx-shield-quarter",
        tags: [
            "Políticas de Acesso no AD",
            "Proteção de Endpoints (EDR/Antivírus)",
            "Configuração de Regras de Firewall",
            "Filtro de Conteúdo de E-mail",
            "Segurança de Servidores"
        ]
    },
    {
        title: "Sistemas & Softwares",
        icon: "bx-cog",
        tags: [
            "Ambientes Virtualizados (VMware)",
            "Sistemas ERP (Datavale)",
            "Configurações de E-mail Corporativo",
            "Instalação de Sistemas Operacionais",
            "Configuração de Impressoras Térmicas"
        ]
    },
    {
        title: "Desenvolvimento Web & CMS",
        icon: "bx-code-alt",
        tags: [
            "WordPress CMS",
            "HTML5 (Estruturação)",
            "CSS3 (Estilização)",
            "Ajustes Básicos de Design",
            "Publicação de Conteúdo",
            "Otimizações de SEO no CMS"
        ]
    }
];

export const experienceData = [
    {
        role: "Técnico de Tecnologia da Informação",
        company: "TTL Brasil",
        period: "Março de 2025 - Maio de 2026 (1 ano e 2 meses)",
        bullets: [
            "Atuação em empresa de consultoria, prestando suporte técnico (remoto e presencial) de alto nível para clientes de diversos segmentos mercadológicos.",
            "Manutenção preventiva e corretiva de workstations, garantia da integridade operacional do parque computacional de clientes.",
            "Suporte e administração de ambientes virtualizados com Máquinas Virtuais (VMs), painéis de e-mail corporativo e infraestrutura local.",
            "Configuração, monitoramento e suporte de firewalls pfSense e administração de redes corporativas seguras.",
            "Trabalho direto com WordPress na publicação, edição e atualização de conteúdos de websites, incluindo customizações básicas em HTML e CSS.",
            "Organização e rastreabilidade total de incidentes e requisições técnicas por meio de ferramentas de gerenciamento de chamados."
        ]
    },
    {
        role: "Assistente de Tecnologia da Informação",
        company: "Frigorífico Cowpig",
        period: "Janeiro de 2023 - Dezembro de 2024 (2 anos)",
        bullets: [
            "Responsável pelo suporte técnico local aos usuários da empresa, mantendo o controle de hardware e software local de modo proativo.",
            "Administração e monitoramento de servidores físicos, virtuais (VMware) e infraestrutura de rede corporativa com UniFi Network.",
            "Gerenciamento de políticas de usuários e permissões de segurança no Active Directory corporativo.",
            "Administração e suporte a ferramentas críticas: MailInspector (filtro de e-mail), telefonia GoTo PBX, cPanel e softwares de impressão Zebra.",
            "Suporte, atualizações de tabelas e parametrização operacional no sistema ERP Datavale.",
            "Ajustes de páginas, postagens e atualizações de layouts institucionais em WordPress."
        ]
    },
    {
        role: "Aprendiz Administrativo",
        company: "Frigorífico Cowpig",
        period: "Novembro de 2021 - Dezembro de 2022 (1 ano e 1 mês)",
        bullets: [
            "Apoio a operações administrativas de escritório, incluindo organização e digitalização de documentos e relatórios internos.",
            "Atendimento telefônico e direcionamento eficiente de ligações para os respectivos setores da empresa.",
            "Digitação de dados cadastrais e operacionais no sistema corporativo, reduzindo erros de processos de digitação manual."
        ]
    }
];

export const projectsData = [
    {
        name: "Gerenciamento e Proteção de Endpoints (TTL Brasil)",
        tech: ["pfSense Firewall", "Active Directory", "VMware VMs", "cPanel Hosting"],
        challenge: "Clientes de consultoria necessitavam de conectividade estável de internet e segurança contra invasões e vazamentos acidentais de dados de rede local.",
        solution: "Desenvolvimento e provisionamento de rotas seguras de firewalls pfSense redundantes, monitoramento ativo no UniFi Network e parametrização de bloqueios por GPO.",
        result: "Estabilidade de rede elevada para 99% e eliminação de infecções por malware nos endpoints corporativos administrados."
    },
    {
        name: "Portal Institucional & Manutenção Web (WordPress)",
        tech: ["HTML5", "CSS3", "WordPress CMS", "Elementor", "cPanel"],
        challenge: "Empresas necessitavam de agilidade na atualização de portais institucionais, mantendo as páginas rápidas e livres de falhas de carregamento em dispositivos móveis.",
        solution: "Refatoração de layouts obsoletos usando HTML/CSS limpos e otimizados, publicação imediata via WordPress e administração de DNS no cPanel.",
        result: "Otimização de 40% na velocidade do site institucional e zero tempo de indisponibilidade durante campanhas comerciais de grande tráfego."
    }
];
