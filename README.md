# 💻 Portfólio Profissional | Giovanni Savassa

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge&logo=github" alt="Status">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Arquitetura-SOLID-blueviolet?style=for-the-badge" alt="SOLID">
  <img src="https://img.shields.io/badge/Foco-UX%2FUI-ff69b4?style=for-the-badge" alt="UX/UI">
</p>

---

## 📌 Sobre o Projeto

Este repositório contém o código-fonte do **Portfólio Profissional de Giovanni Savassa**, projetado especificamente para atração de talentos de alto nível técnico e recrutadores de TI. O projeto foi desenvolvido sob os mais rigorosos padrões de **Engenharia de Software (SOLID)** e **Acessibilidade/Experiência do Usuário (UX/UI)**.

O resultado é uma aplicação web rápida, moderna, responsiva, com suporte nativo a temas (Dark/Light) e **100% dinâmica**, onde a camada de conteúdo visual é completamente isolada da lógica de renderização e estrutura da página.

---

## 🛠️ Arquitetura do Projeto & Princípios SOLID

Diferente de portfólios comuns estruturados em arquivos HTML estáticos gigantescos e difíceis de manter, este projeto foi desenhado sob uma **arquitetura limpa e desacoplada**.

```mermaid
graph TD
    A[data.js <br> 'Camada de Dados'] -->|Exporta Arrays de Objetos| B[render.js <br> 'Camada de Renderização']
    B -->|Injeta HTML dinâmico| C[index.html <br> 'Estrutura Semântica']
    D[main.js <br> 'Orquestrador/Eventos'] -->|Inicializa| B
    D -->|Controla Interações| C
    E[variables.css <br> 'Design Tokens'] -->|Alimenta estilos globais| F[CSS Modulares <br> main/layout/components.css]
    F -->|Aplica Visual| C
```

### Como o SOLID é Aplicado na Prática:

1. **S - Single Responsibility Principle (Princípio da Responsabilidade Única):**
   - `index.html` tem a **única** responsabilidade de definir a estrutura semântica básica e os contêineres de ancoragem.
   - `data.js` tem a **única** responsabilidade de armazenar as informações profissionais estruturadas.
   - `render.js` tem a **única** responsabilidade de ler os dados e transformá-los em nós do DOM.
   - `main.js` tem a **única** responsabilidade de gerenciar eventos da página (scroll, troca de tema, ações de clique).
   - O CSS é fragmentado de forma modular (variáveis, reset, layout estrutural e componentes individuais).

2. **O - Open/Closed Principle (Princípio Aberto/Fechado):**
   - O sistema está **fechado para modificação** do código de apresentação, mas **aberto para extensão** do conteúdo. 
   - Se o Giovanni realizar um novo curso, ganhar uma nova certificação ou mudar de emprego, **nenhuma linha de HTML, CSS ou lógica JS precisa ser alterada**. Ele apenas adiciona o novo registro ao arquivo `data.js` e a interface se reconstrói sozinha.

---

## 🎨 Decisões de Design (UX/UI Premium)

- **Dark-First Moderno:** O portfólio inicia em um tema escuro premium (`#080c14`), reduzindo a fadiga visual dos recrutadores. Tons de azul neon e ciano criam contrastes que direcionam a leitura.
- **Micro-Interações Fluidas:** Hover com elevação de cards, botões com gradientes interativos, e efeito de cópia rápida no botão de e-mail (copia o texto e altera temporariamente o texto do botão para "Copiado!" com um checkmark).
- **Responsividade Absoluta:** O layout adapta-se de telas mobile de 320px até monitores ultrawide, reorganizando grids e colunas de forma fluida.
- **Glassmorphism:** O cabeçalho fixo utiliza `backdrop-filter: blur(12px)` gerando o efeito de vidro translúcido ao rolar a página, mantendo o usuário contextualizado sobre a navegação.

---

## 📂 Estrutura de Pastas

```text
giovanni-savassa-portfolio/
│
├── index.html                  # Arquivo principal (Semântico HTML5)
├── README.md                   # Documentação detalhada técnica (Este arquivo)
├── portfolio-content.md        # Conteúdo estruturado em Markdown para uso externo
│
└── assets/
    ├── css/
    │   ├── variables.css       # Design tokens (Cores, Fontes, Margens, Transições)
    │   ├── main.css            # Reset de estilos globais e classes utilitárias
    │   ├── layout.css          # Estilização de Cabeçalho, Footer e Menu Drawer
    │   └── components.css      # Estilização de Cards, Botões, Badges e Timeline
    │
    ├── js/
    │   ├── data.js             # Banco de dados local (Experiências, Projetos, Skills)
    │   ├── render.js           # Funções puras de renderização dinâmica do DOM
    │   └── main.js             # Gerenciador de eventos, temas e interatividade
    │
    └── img/                    # Diretório reservado para imagens/assets
```

---

## 🚀 Como Executar Localmente

Como o projeto utiliza **Módulos ES6 nativos** (`import`/`export`), os navegadores exigem que a aplicação rode sob um servidor HTTP local por razões de segurança.

Escolha uma das formas simples abaixo para iniciar:

### Opção 1: VS Code (Live Server)
1. Instale a extensão **Live Server** no VS Code.
2. Clique com o botão direito no `index.html`.
3. Selecione **"Open with Live Server"**.

### Opção 2: NodeJS
No diretório do projeto, execute:
```bash
# Executa servidor estático instantâneo
npx serve
```

### Opção 3: Python
Se você possui o Python instalado, execute no terminal do projeto:
```bash
python -m http.server 8000
```
Abra o navegador em: `http://localhost:8000`.

---

## 🛠️ Como Atualizar o Conteúdo do Portfólio

Para atualizar as informações exibidas no site, abra o arquivo `assets/js/data.js` e altere os objetos exportados:

### 1. Atualizar Biografia
Modifique o campo `biography`:
```javascript
export const aboutData = {
    biography: "Sua nova biografia de nível Master/Sênior..."
};
```

### 2. Adicionar Novas Competências
Insira tags ou novas categorias no array `skillsData`:
```javascript
{
    title: "Nova Categoria",
    icon: "bx-code-block", // Classe de ícone do Boxicons
    tags: ["Tecnologia A", "Tecnologia B", "Processo C"]
}
```

### 3. Inserir Nova Experiência Profissional
Adicione um novo objeto no topo do array `experienceData`:
```javascript
{
    role: "Analista Sênior de Redes",
    company: "Empresa Exemplo S.A.",
    period: "Junho de 2026 - Presente",
    bullets: [
        "Liderança técnica na implantação da infraestrutura X.",
        "Redução de custos operacionais em 20% com automações de rede."
    ]
}
```

---

## 🌐 Guia de Implantação (Deployment no GitHub Pages)

Para publicar o portfólio online gratuitamente utilizando o **GitHub Pages**, siga estes passos:

1. **Crie um repositório vazio no GitHub** com o nome `giovanni-savassa-portfolio` (ou o nome de sua preferência).
2. **Inicie o Git localmente** e faça o commit inicial:
   ```bash
   git init
   git add .
   git commit -m "feat: estrutura inicial do portfólio SOLID/UX"
   ```
3. **Vincule ao seu repositório remoto** e envie os arquivos (substitua pelo seu usuário do GitHub):
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/giovanni-savassa-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. **Ative o GitHub Pages**:
   - No GitHub, vá nas **Settings** (Configurações) do repositório.
   - Na barra lateral esquerda, clique em **Pages**.
   - Na seção *Build and deployment*, defina a Source como **Deploy from a branch**.
   - Selecione a branch `main` e a pasta `/ (root)`. Clique em **Save**.
5. **Pronto!** Em cerca de 1 a 2 minutos, seu portfólio estará online no endereço `https://SEU_USUARIO.github.io/giovanni-savassa-portfolio/`.

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

<p align="center">
  Desenvolvido com 💙 para destacar talentos na área de tecnologia.
</p>
