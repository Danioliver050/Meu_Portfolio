# Portfólio — Daniel M.

Portfólio pessoal de **Daniel Oliveira Machado**, desenvolvedor back-end em transição para engenharia e análise de dados, com foco no mercado financeiro brasileiro.

**🔗 Site no ar:** [portfolio-danielm.vercel.app](https://portfolio-danielm.vercel.app/)

---

## Sobre o projeto

Site estático (HTML, CSS e JavaScript puros — sem frameworks, sem build step), pensado como uma landing page interativa e bilíngue (PT/EN), com tema claro/escuro, artigos próprios e uma página dedicada para cursos e certificações.

## ✨ Funcionalidades

- **Bilíngue (PT/EN)** — troca de idioma instantânea via JavaScript, sem recarregar a página
- **Tema claro/escuro** — com preferência salva entre visitas
- **Landing page interativa** — barra de progresso de leitura, menu que destaca a seção atual (scrollspy), tilt 3D na foto de perfil ao passar o mouse
- **Currículo em PDF** — botão de download direto no hero
- **Cópia rápida de e-mail** — clique no botão de contato e o endereço já vai pra área de transferência
- **Artigos com página própria** — cada anotação publicada ganha uma URL limpa (sem `.html`), com layout de leitura dedicado
- **Página própria para certificações** — estrutura pronta para listar cursos e certificações à medida que forem sendo concluídos
- **SEO básico** — meta tags Open Graph/Twitter Card, `sitemap.xml`, `robots.txt` e URLs canônicas

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (custom properties para os temas, Grid/Flexbox, sem pré-processador)
- JavaScript vanilla (sem dependências de runtime)
- Fonte [Albert Sans](https://fonts.google.com/specimen/Albert+Sans) (Google Fonts)
- [live-server](https://www.npmjs.com/package/live-server) como servidor de desenvolvimento local
- Deploy via [Vercel](https://vercel.com)

## 📁 Estrutura do projeto

```
portfolio-daniels/
├── index.html                              # Página principal
├── artigo-desenvolvendo-softwares-aos-dados/
│   └── index.html                          # Primeiro artigo publicado
├── certificacoes/
│   └── index.html                          # Landing page de cursos/certificações
├── css/
│   └── style.css                           # Todos os estilos (temas, layout, componentes)
├── js/
│   └── script.js                           # Traduções, interações e lógica do site
├── assets/
│   ├── cv-daniel.pdf                       # Currículo
│   ├── daniel-photo.jpg                    # Foto de perfil
│   ├── favicon.svg
│   └── og-image.png                        # Imagem de compartilhamento (Open Graph)
├── robots.txt
├── sitemap.xml
├── package.json                            # Só o script de dev (live-server)
└── .gitignore
```

## 🚀 Rodando localmente

Pré-requisito: [Node.js](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:3000`, recarregando automaticamente a cada alteração salva.

Alternativa sem instalar dependências:
```bash
npx serve
```

## 📦 Deploy

O projeto está hospedado no **Vercel**, com deploy automático: todo `git push` na branch `main` gera uma nova versão em produção.

```bash
git add .
git commit -m "descrição da alteração"
git push
```

Como é um site 100% estático, nenhuma configuração de build é necessária — o Vercel detecta e publica direto.

## ✍️ Como adicionar conteúdo

### Novo projeto
Edite a seção `#projetos` em `index.html`, substituindo (ou complementando) o estado vazio por um `<article class="project-card">`. Adicione as traduções correspondentes em `js/script.js`.

### Nova tecnologia na Stack
Dentro de `#stack` em `index.html`, adicione um `<li>` na `tag-list` do grupo correspondente ("Dados & Análise" ou "Engenharia & Cloud").

### Novo curso/certificação
Em `certificacoes/index.html` há um modelo comentado no HTML (`<!-- MODELO PARA ADICIONAR UM NOVO CURSO/CERTIFICAÇÃO -->`) — é só copiar o bloco `.cert-card` e preencher (título, instituição e uma descrição de até 2 linhas).

### Novo artigo/anotação
1. Duplique a pasta `artigo-desenvolvendo-softwares-aos-dados/`, renomeie com o slug do novo artigo
2. Ajuste título, data/hora e corpo do texto dentro do `index.html` copiado
3. Adicione um novo card em `#anotacoes` (`index.html`) apontando para a nova pasta

Todas as traduções do site (PT/EN) ficam centralizadas no topo de `js/script.js`, no objeto `translations`.

## 📌 Status atual do conteúdo

- [x] CV real
- [x] Foto de perfil real
- [x] Links de LinkedIn/GitHub
- [x] Primeiro artigo publicado
- [ ] Projetos de dados (em construção)
- [ ] Stack de tecnologias (em definição)
- [ ] Cursos e certificações (em definição)

## 👤 Contato

**Daniel Oliveira Machado**
- E-mail: [danioliver050@outlook.com](mailto:danioliver050@outlook.com)
- LinkedIn: [linkedin.com/in/daniel-o-machado](https://www.linkedin.com/in/daniel-o-machado/)
- GitHub: [github.com/Danioliver050](https://github.com/Danioliver050/)

---

© 2026 Daniel Oliveira Machado. Todos os direitos reservados.
