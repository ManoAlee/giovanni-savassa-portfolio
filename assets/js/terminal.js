// ==================== INTERACTIVE TERMINAL SIMULATOR ====================

const COMMANDS = {
    help: `Comandos disponíveis:
  <span class="terminal__cmd">about</span>      - Sobre o Giovanni Savassa
  <span class="terminal__cmd">skills</span>     - Lista de competências técnicas
  <span class="terminal__cmd">experience</span> - Resumo da trajetória profissional
  <span class="terminal__cmd">projects</span>   - Casos reais de sucesso
  <span class="terminal__cmd">contact</span>    - Informações de contato direto
  <span class="terminal__cmd">clear</span>      - Limpar a tela do console
  <span class="terminal__cmd">secret</span>     - Rodar um script confidencial`,

    about: `<b>Giovanni Savassa</b>
------------------
CST em Gestão da Tecnologia da Informação pela Fatec Tatuí.
Especialista em Suporte Técnico L1/L2/L3, infraestrutura de redes locais,
firewalls, segurança de endpoint e parametrização de sistemas ERP.
Noções complementares em CMS (WordPress) e Front-End.`,

    skills: `<b>Habilidades Técnicas:</b>
----------------------
• <b>Suporte & OS:</b> Windows Server, Active Directory, GPOs, Linux, ITIL.
• <b>Redes:</b> TCP/IP, Switches Cisco, Roteadores, VPNs, Cabeamento.
• <b>Segurança:</b> Políticas EDR, Antivírus centralizados, Auditoria de vulnerabilidade.
• <b>CMS/Web:</b> HTML5, CSS3, JavaScript, WordPress, Elementor, SEO.`,

    experience: `<b>Trajetória Profissional:</b>
-------------------------
• <b>TTL BRASIL - INFORMÁTICA</b> | Analista de Tecnologia (2025 - Presente)
  - Redução de 18% no downtime de redes corporativas.
  - Implantação de EDR em +120 computadores de trabalho.
  
• <b>Grupo Cowpig</b> | Técnico Helpdesk (2023 - 2024)
  - Suporte L1 a +80 usuários (FCR médio de 78%).
  - Aumento de 25% na vida útil das estações de trabalho via manutenção preventiva.`,

    projects: `<b>Projetos Executados:</b>
----------------------
1. <b>Rede Segura AD/GPO:</b> Segmentação de VLANs e bloqueio central de segurança GPO.
   Uptime elevado para 99.9% e bloqueio de vírus e softwares suspeitos.
2. <b>Vitrine WordPress Premium:</b> Portal institucional de consultoria de TI de alta performance.
   Score de 92/100 no Google PageSpeed Insights.`,

    contact: `<b>Canais de Contato:</b>
-------------------
• E-mail: <a href="mailto:giovannisavassa4@gmail.com" class="terminal__link">giovannisavassa4@gmail.com</a>
• LinkedIn: <a href="https://www.linkedin.com/in/giovanni-savassa" target="_blank" class="terminal__link">linkedin.com/in/giovanni-savassa</a>
• Git/Portfólio: <a href="https://github.com/ManoAlee" target="_blank" class="terminal__link">github.com/ManoAlee</a>`,

    secret: `<span class="terminal__highlight">[CONFIDENCIAL]</span> Executando rotina secreta...
Loading dependencies... [OK]
Initializing Coffee-Injection.exe... [OK]
Bypassing local firewalls... [OK]
Estágio atual: Especialista de TI de Alta Performance.
Status da Carreira: Pronto para novos desafios de nível Master/Sênior.`
};

export function initTerminal() {
    const terminalBody = document.getElementById('terminal-body');
    const terminalInput = document.getElementById('terminal-input');
    
    if (!terminalBody || !terminalInput) return;

    // Foca no input ao clicar no corpo do terminal
    const terminalCard = document.querySelector('.terminal__card');
    if (terminalCard) {
        terminalCard.addEventListener('click', () => {
            terminalInput.focus();
        });
    }

    // Histórico de comandos
    let commandHistory = [];
    let historyIndex = -1;

    // Função interna para adicionar linhas de texto
    function appendLine(text) {
        const line = document.createElement('p');
        line.className = 'terminal__text';
        line.innerHTML = text;
        
        const inputLine = document.querySelector('.terminal__input-line');
        if (inputLine) {
            terminalBody.insertBefore(line, inputLine);
        } else {
            terminalBody.appendChild(line);
        }
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function clearTerminal() {
        const lines = terminalBody.querySelectorAll('.terminal__text:not(.terminal__welcome)');
        lines.forEach(line => line.remove());
    }

    // Event listener para digitação
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const rawCommand = terminalInput.value;
            const cleanCommand = rawCommand.trim().toLowerCase();
            
            if (cleanCommand !== '') {
                commandHistory.push(rawCommand);
                historyIndex = commandHistory.length;
                
                // Exibe o comando no terminal
                appendLine(`guest@savassa-ti:~$ ${rawCommand}`);
                
                // Processamento de comandos
                if (cleanCommand === 'clear') {
                    clearTerminal();
                } else if (COMMANDS[cleanCommand]) {
                    appendLine(COMMANDS[cleanCommand]);
                } else {
                    appendLine(`Comando não reconhecido: "${rawCommand}". Digite <span class="terminal__cmd">help</span> para ver a lista.`);
                }
            }
            
            terminalInput.value = '';
        } 
        else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
            }
            e.preventDefault();
        } 
        else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = '';
            }
            e.preventDefault();
        }
    });

    // ==================== SIMULAÇÃO DE INTRODUÇÃO (UX AUTOMATION) ====================
    // Simula a digitação automática de "help" ao carregar a página para orientar o usuário
    function runIntroSimulation() {
        const simulationText = 'help';
        let charIndex = 0;
        
        terminalInput.disabled = true;
        terminalInput.placeholder = 'Iniciando sistema...';
        
        function typeChar() {
            if (charIndex < simulationText.length) {
                terminalInput.value += simulationText.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 120);
            } else {
                setTimeout(() => {
                    terminalInput.disabled = false;
                    terminalInput.placeholder = 'digite um comando...';
                    
                    // Executa a impressão diretamente de forma robusta e limpa
                    appendLine(`guest@savassa-ti:~$ help`);
                    appendLine(COMMANDS.help);
                    terminalInput.value = '';
                    
                    terminalInput.focus();
                }, 400);
            }
        }
        
        // Inicia a digitação após 1.2 segundos da inicialização
        setTimeout(typeChar, 1200);
    }

    runIntroSimulation();
}
