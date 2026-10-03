/* =========================================================
   TRADUÇÕES (PT / EN)
   Edite os textos abaixo para atualizar o conteúdo do site
   nos dois idiomas.
   ========================================================= */
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.certifications": "Certificações",
    "nav.articles": "Anotações",
    "nav.contact": "Contato",

    "hero.greeting": "Olá, eu sou",
    "hero.subtitle": "Transformando experiência em desenvolvimento de software em soluções orientadas a dados.",
    "hero.cta_projects": "Últimos projetos",
    "hero.cta_contact": "Fale comigo",
    "hero.cta_cv": "Baixar CV",

    "about.eyebrow": "sobre",
    "about.title": "Um pouco sobre mim.",
    "about.p1": "Comecei minha jornada com total certeza de que queria atuar como desenvolvedor back-end, trabalhando no desenvolvimento e na manutenção de softwares. Nesse processo, tive a oportunidade de atuar em uma área voltada a dados, o que despertou meu interesse pela possibilidade de ampliar minha área de atuação.",
    "about.p2": "A partir desse ponto, passei a buscar, de forma simultânea, o desenvolvimento de software e o trabalho com dados nas aplicações, aproveitando ao máximo minhas habilidades e buscando sempre extrair os melhores resultados.",

    "projects.eyebrow": "Portfólio",
    "projects.title": "Projetos recentes.",
    "project.link_code": "Código",
    "project.link_detail": "Ver detalhes →",
    "project.back": "← Voltar aos projetos",
    "projpage.overview": "Visão geral",
    "projpage.results": "Resultados",
    "projpage.stack": "Stack utilizada",
    "projpage.zoom_hint": "Clique para ampliar",
    "proj1.detail.p1": "Pipeline ETL em Python que processa 100.000 transações bancárias simuladas: valida e padroniza CPFs, datas e valores monetários, rejeita registros inválidos com motivo registrado em log e converte o resultado de CSV para Parquet.",
    "proj1.detail.r1": "63% de compressão — arquivo Parquet 63% menor que o CSV original",
    "proj1.detail.r2": "9,4× mais rápido — queries sobre o Parquet são 9,4x mais rápidas",
    "proj1.detail.r3": "6.937 registros inválidos rejeitados com motivo registrado no log",
    "proj1.detail.r4": "8 testes automatizados com Pytest cobrindo validação e conversão",
    "proj2.detail.p1": "Arquitetura de dados em tempo real projetada para um contact center bancário usando serviços AWS. O fluxo captura eventos do Amazon Connect, processa via Kinesis Data Streams e Lambda, persiste em S3 e expõe via Athena para consumo em dashboards operacionais.",
    "proj2.detail.r1": "Latência end-to-end abaixo de 60 segundos — do evento ao KPI no dashboard",
    "proj2.detail.r2": "Custo estimado de US$ 24/mês para o volume projetado de chamadas",
    "proj2.detail.r3": "Fluxo completo documentado: ingestão → processamento → storage → visualização",
    "proj2.detail.r4": "Justificativas técnicas registradas para cada escolha de serviço AWS",
    "proj3.detail.p1": "Pipeline de Engenharia de Dados em Python que implementa a arquitetura Medalhão (Bronze → Prata → Gold). Processa 50.000 propostas de crédito simuladas, aplicando limpeza, validação e enriquecimento em cada camada e entregando um star schema consultável via DuckDB, com documentação de decisões técnicas e estimativas de custo para migração futura para cloud.",
    "proj3.detail.r1": "Star schema com tabela fato_propostas + 4 dimensões consultável via SQL",
    "proj3.detail.r2": "9 testes automatizados com Pytest cobrindo cada camada do pipeline",
    "proj3.detail.r3": "Dados sintéticos gerados com Faker para simulação realista",
    "proj3.detail.r4": "Documentação de decisões técnicas e estimativas de custo para cloud",
    "proj1.tag": "Python · ETL",
    "proj1.title": "Pipeline de Dados Financeiros",
    "proj1.desc": "Pipeline de ETL que limpa e padroniza dados bancários (CPF, datas, valores) e converte CSV para Parquet — 63% menor e consultas 9,4x mais rápidas.",
    "proj2.tag": "AWS · Streaming",
    "proj2.title": "Diagrama de Arquitetura — Amazon Connect",
    "proj2.desc": "Arquitetura de dados em tempo real que transforma eventos de um contact center bancário em KPIs operacionais, com latência abaixo de 60 segundos.",
    "proj3.tag": "Python · DuckDB",
    "proj3.title": "Data Lake com Arquitetura Medalhão",
    "proj3.desc": "Pipeline Bronze→Prata→Gold que processa 50.000 propostas simuladas, aplica limpeza e validação em cada camada e entrega star schema consultável via DuckDB, com 9 testes automatizados.",

    "stack.eyebrow": "stack",
    "stack.title": "Ferramentas e tecnologias",
    "stack.group1": "Dados & Análise",
    "stack.group2": "Desenvolvimento",

    "certifications.eyebrow": "Certificações",
    "certifications.title": "Cursos e certificações",
    "certifications.empty_desc": "Reuni cursos, certificações e idiomas em um só lugar.",
    "certifications.empty_cta": "Ver certificações",

    "articles.eyebrow": "Artigos",
    "articles.title": "Artigos",
    "articles.read_more": "Ler mais →",
    "art1.title": "Desenvolvendo Softwares aos Dados",
    "art1.desc": "A construção de uma união de dois caminhos com um mesmo destino.",
    "art2.title": "O Excel que eu não sabia que precisaria",
    "art2.desc": "Como um curso que eu não queria fazer se tornou uma ferramenta essencial na minha jornada com dados.",

    "contact.eyebrow": "contato",
    "contact.desc": "Aberto a oportunidades de estágio e posições júnior em engenharia, desenvolvimento e análise de dados.",
    "contact.copied": "Copiado!",
    "footer.rights": "Todos os direitos reservados.",

    "article.back": "← Voltar aos artigos",

    "art1.full_title": "Desenvolvendo Softwares aos Dados: a construção de uma união de dois caminhos com um mesmo destino",
    "art1.date": "4 de agosto de 2026, às 11h59 (horário de Brasília — UTC−3)",
    "art1.p1": "Acredito que, desde quando iniciei minha primeira faculdade, de Análise e Desenvolvimento de Sistemas, antes mesmo de ter o primeiro contato, no segundo semestre, com a tão assustadora matéria \"Programação Orientada a Objetos\", utilizando a linguagem Java — também conhecida como o \"bicho-papão de sete cabeças\" e coisas do gênero —, eu já tinha em mente que seguiria na área de tecnologia, focado no desenvolvimento de software voltado ao backend.",
    "art1.p2": "Honestamente, nunca entendi bem o porquê, mas a linguagem Java sempre despertou em mim uma curiosidade e uma vontade de aprendê-la. Acredito que isso se deve ao fato de sempre ouvir de todos ao meu redor que era uma linguagem extremamente chata, cansativa, enlouquecedora, dentre outros \"elogios\". No entanto, ao mesmo tempo, surgiu um pensamento: \"por que não a área de dados?\".",
    "art1.p3": "Na adolescência, durante um breve período, dediquei-me a estudar para um concurso público do Banco do Brasil, para o cargo de bancário. Infelizmente, não passei para a fase seguinte; porém, naquele momento, acredito que foi plantada no fundo do meu pensamento uma semente: a de que a área financeira é algo realmente interessante de ser estudado. Essa semente demorou alguns anos para germinar e dar seus primeiros sinais de que poderia vir a gerar frutos no futuro.",
    "art1.p4": "Voltando ao período da faculdade, tive a oportunidade de estagiar por um ano e cinco meses na área de riscos integrados de um banco. Nesse período, não apenas tive contato com avaliação de riscos e construção de relatórios, como também com análise de dados, tomada de decisão baseada nessas informações e elaboração de modelos. Foi nesse momento que a mesma semente plantada anos antes voltou a demonstrar sinais de crescimento e fortalecimento.",
    "art1.p5": "Após essa experiência, busquei focar, primordialmente, na finalização da minha graduação. Ainda assim, constantemente me vinha o pensamento: \"será mesmo que eu quero apenas desenvolver softwares? E a área de dados? Seria uma mudança de destino completamente radical? Ou apenas uma correção de rota?\". São perguntas para as quais, aos poucos, venho construindo respostas — e, talvez, ainda não as tenha por completo.",
    "art1.p6": "Naturalmente, passei a me inclinar para a área de riscos, influenciado por reflexões internas, conversas com pessoas ao meu redor, experiências vividas e também observadas. Acredito que ainda estou em um processo de construção sobre como integrar tecnologia, dados, mercado financeiro, riscos, lógica de programação e engenharia de forma coesa. A ideia é que todos esses \"ingredientes\", quando combinados, formem um resultado consistente, relevante e agradável tanto na forma quanto no conteúdo.",
    "art1.p7": "Não vejo isso como um abandono da área de desenvolvimento de software, mas sim como uma evolução da minha trajetória profissional, na qual consigo integrar diferentes habilidades em prol de um resultado final com maior valor e efetividade.",
    "art1.p8": "Aos leitores que acompanharam esta reflexão até aqui, a criação deste portfólio tem como objetivo registrar a construção dessa trajetória: projetos que demonstram não apenas habilidades técnicas, mas também a capacidade de pensar com dados dentro de um contexto de negócios.",

    "art2.date": "11 de agosto de 2026, às 13h02 (horário de Brasília — UTC−3)",
    "art2.p1": "Em 2019, no \"auge\" dos meus 16 para 17 anos, eu fazia diversos cursos em uma escola: inglês, montagem e manutenção de computadores e notebooks, turismo e hotelaria, entre outros. Minha mãe havia iniciado um curso de Excel Avançado, porém, por falta de tempo, não conseguiu dar sequência e acabou \"passando\" o curso para mim.",
    "art2.p2": "Confesso que, na hora, não achei a melhor ideia do mundo. Era mais uma coisa para colocar na minha já apertada carga horária, e eu olhava para aquilo de uma forma meio atravessada: \"Excel? Eu sei lá quando vou usar isso.\"",
    "art2.p3": "Na época, fazia alguns exercícios práticos no estilo \"isso com isso, mais isso aqui e aquilo ali, resulta nisso aqui\". Até então, aquele Daniel via o Excel apenas como mais uma ferramenta do pacote Office entre tantas outras. Nunca tinha feito nada realmente relevante utilizando a ferramenta e, muito menos, a utilizado de forma profissional.",
    "art2.p4": "De certo ponto de vista, era até compreensível pensar daquela maneira.",
    "art2.p5": "Anos depois, comecei a utilizar o Excel para montar uma planilha de gastos pessoais e ter um maior controle das minhas finanças. Nada muito complexo: algumas formatações básicas, funções como SOMA, filtros e alguns gráficos para organizar melhor as informações.",
    "art2.p6": "Naquele momento, com um pensamento um pouco mais amadurecido, comecei a entender melhor a importância daquela ferramenta. E, provavelmente, meu subconsciente agradeceu à minha mãe por ter me colocado naquele curso.",
    "art2.p7": "Com o tempo, já em um ambiente de trabalho, aquela \"sobrecarga\" acabou se transformando em uma ferramenta utilizada profissionalmente. E foi aí que aconteceu uma grande virada de chave.",
    "art2.p8": "A diferença entre \"deixa eu anotar esses R$ 78 gastos na fatura do cartão de crédito\" e \"como todo aquele trabalho envolvendo sistemas, bancos de dados, SQL e ainda Power BI pode culminar em uma 'simples' planilha capaz de apontar um norte para decisões que podem custar milhões de reais?\"",
    "art2.p9": "Loucura, não? Talvez? Acho que sim.",
    "art2.p10": "Hoje consigo perceber que, indiretamente, aquelas primeiras planilhas foram meus primeiros passos na área de dados — mas de uma forma completamente despretensiosa.",
    "art2.p11": "Aos crentes no efeito borboleta ou na teoria do caos, certamente existe um universo onde eu tive contato com PowerPoint e hoje estou elaborando apresentações de \"tirar o chapéu\". Mas, no universo em que este texto está sendo escrito, o Daniel segue utilizando funções mais complexas, construindo dashboards com uma pitada de Power BI, aplicando Power Query em alguns projetos, conectando o Excel a arquivos e fontes externas, modelando dados e aprendendo a dar um \"direcionamento\" para eles.",
    "art2.p12": "Cada dia utilizando a \"sobrecarga\" é mais um dia que compreendo que é uma poderosa e aplicável ferramenta. É curioso pensar que tudo isso começou com um curso que eu não queria fazer.",
    "art2.p13": "Em 2019, eu me perguntava: \"Excel? Eu sei lá quando vou usar isso.\"",
    "art2.p14": "Hoje eu sei.",

    "art3.title": "41 dias, 30 candidaturas, testes e alguns outros insights.",
    "art3.desc": "41 dias de hiato, altos e baixos, candidaturas, testes técnicos e a primeira entrevista — e o que tirar de tudo isso.",
    "art3.date": "21 de setembro de 2026, às 18h43 (horário de Brasília — UTC−3)",
    "art3.p1": "41 dias. É com essa informação que inicio falando sobre o meu hiato em escrever um novo artigo. Coincidentemente, 41 dias é também a quantidade de dias desde a última publicação minha. Acho que não é tão coincidente assim.",
    "art3.p2": "Nesses 41 dias eu confesso que tive altos e baixos, dias em que eu não consegui ser produtivo \"vibe-codando\" e abri a ferramenta de IA e passei minutos encarando a tela de \"o que vamos fazer, Daniel?\" Sem conseguir escrever nada. Assim como houve dias em que me candidatei para várias oportunidades de estágio com o pensamento de \"hoje irei até o porão do porão dessa casa chamada LinkedIn\" e acho que parte dessa jornada é entender que esses dias, bons e ruins, estarão presentes na jornada e que faz parte do processo de amadurecimento, não só profissional, mas pessoal também. Cada dia, se olhado de um certo ponto de vista, pode ser (e acredito pessoalmente que deve ser) visto como uma oportunidade para rever e/ou melhorar algo.",
    "art3.p3": "Durante esses 41 dias me inscrevi para cerca de 30 processos de estágio, desses 30, até o presente momento tive 9 retornos não positivos, realizei 3 testes técnicos e hoje, no dia em que vos escrevo esse texto, tive a minha primeira entrevista/dinâmica em grupo. Eu acho que eu até posso tirar algumas informações sobre isso como: tive um avanço de 10%, ainda tenho 70% de chances de ingressar em algum programa, ou 70% dos processos ainda sem desfecho definido. Como eu falei, é sobre ponto de vista, 30% das empresas não deram sequência dentre outras métricas.",
    "art3.p4": "Também acho válido falar que durante esse meio tempo eu realizei um novo projeto de data warehouse no meu portfólio, inclusive, na aba de projetos, o mesmo já se encontra disponível (preciso vender meu peixe, não é?!), aumentei a carga de estudos pra ferramentas voltadas para dados, tive pesadelos com \"INNER JOIN\", \"LEFT JOIN\" e \"GROUP BY\" (assim como tive durante a matéria de Banco de Dados na faculdade) e também tive pesadelos com medidas complexas de \"CALCULATE\", \"FILTER\", \"ALLSELECTED\" e \"EARLIER\". Ao menos em Power BI, esses \"pesadelos são novos\".",
    "art3.p5": "Então ainda que de forma não explícita ou clara, esse hiato não foi \"tudo de ruim\", mas teve sim os seus momentos de euforia, anseios, altas descargas de dopamina cerebral e depois essa \"ressaca de dopamina\" e é completamente normal. Como eu falei antes, faz parte da jornada de amadurecimento e cabe a nós sermos flexíveis para lidar com essas situações ao invés de sermos fortes como uma pedra. Afinal, como bem diz o ditado popular: tanto bate até que fura.",
    "art3.p6": "Quais resultados eu posso trazer disso? Bom, irei colocá-los em um dashboard e voltarei com os insights em breve.",

    "certpage.back": "← Voltar ao portfólio",
    "certpage.title": "Cursos, certificações e idiomas",
    "certpage.intro": "Aqui reúno os cursos e certificações que venho concluindo ou cursando durante a transição para a área de dados, além dos idiomas que falo.",
    "certpage.tab_courses": "Cursos",
    "certpage.tab_certifications": "Certificações",
    "certpage.tab_languages": "Idiomas",
    "certpage.view_cert": "Ver certificado",
    "certpage.panel_empty_title": "Nenhuma certificação publicada ainda",
    "certpage.panel_empty_desc": "Estou definindo quais certificações faz mais sentido priorizar agora. Assim que decidir, elas aparecem aqui.",

    "course1.desc": "Bootcamp de 24 horas sobre fundamentos de Inteligência Artificial Generativa, concluído em 30/09/2025.",

    "lang.pt_name": "Português",
    "lang.en_name": "Inglês",
    "lang.es_name": "Espanhol",
    "lang.pt_level": "C2 · Nativo",
    "lang.en_level": "C2 · Fluente",
    "lang.es_level": "B1 · Intermediário",
    "nav.portfolio": "Portfólio",
    "nav.blog": "Artigos",
    "hero.welcome": "Sejam bem-vindos ao meu portfólio!",
    "hero.role": "Engenharia de Dados | Análise de Dados | Desenvolvimento de Software",
    "hero.cta_about": "Sobre mim",
    "hero.scroll": "Rolar para baixo",
    "about.kicker": "Sobre",
    "about.lead": "Um resumo de onde venho e para onde estou indo.",
    "about.hello": "Olá!",
    "about.p3": "Hoje meu foco é engenharia e análise de dados no mercado financeiro: pipelines, modelagem e relatórios que ajudam a tomar decisões.",
    "about.skills_title": "Minhas principais habilidades.",
    "about.cv": "Baixar currículo",
    "level.advanced": "Avançado",
    "level.intermediate": "Intermediário",
    "level.basic": "Básico",
    "resume.education": "Formação acadêmica.",
    "resume.experience": "Experiência profissional.",
    "resume.tools": "Ferramentas:",
    "edu1.date": "Fev 2026 – Em andamento",
    "edu1.title": "Engenharia de Software",
    "edu1.type": "Bacharelado.",
    "edu2.date": "Fev 2023 – Dez 2025",
    "edu2.title": "Análise e Desenvolvimento de Sistemas",
    "edu2.type": "Tecnólogo.",
    "exp1.date": "Jun 2023 – Out 2024",
    "exp1.role": "Analista de Riscos e Crédito — Estágio",
    "exp1.b1": "Elaborei relatórios regulatórios mensais (DRL, DLI, DDR e DRM) com SQL, SAS e Excel, dentro dos prazos exigidos pelo Banco Central.",
    "exp1.b2": "Extraí e tratei dados de bases relacionais via SQL para análises de risco de crédito, liquidez e risco reputacional, reduzindo o tempo de preparação dos relatórios.",
    "exp1.b3": "Desenvolvi e mantive dashboards no MicroStrategy, centralizando indicadores de risco para as áreas de negócio e gestão.",
    "exp1.b4": "Fui ponto de contato entre a área de riscos e as áreas clientes internas no alinhamento de informações regulatórias.",
    "certs.title": "Cursos e certificações.",
    "certs.view": "Ver certificado",
    "course1.date": "Set 2025",
    "course1.meta": "Carga horária: 24h.",
    "course2.date": "Abr 2026",
    "course2.title": "EF SET — Certificado de Inglês",
    "course2.meta": "Nível C2 (proficiente), nota 77/100.",
    "projects.kicker": "Portfólio",
    "projects.lead": "Clique em um projeto para ver os detalhes. Os códigos estão no meu",
    "cat.engineering": "Engenharia de Dados",
    "cat.architecture": "Arquitetura de Dados",
    "cat.etl": "Engenharia de Dados",
    "cat.career": "Carreira",
    "cat.tools": "Ferramentas",
    "blog.kicker": "Artigos",
    "blog.title": "Posts recentes.",
    "blog.lead": "Textos sobre a minha transição para dados: o que estou aprendendo, construindo e enfrentando no caminho.",
    "art1.short_date": "4 de agosto de 2026",
    "art2.short_date": "11 de agosto de 2026",
    "art3.short_date": "21 de setembro de 2026",
    "contact.kicker": "Contato",
    "contact.title": "Fale comigo.",
    "contact.lead": "Estou aberto a oportunidades de estágio e vagas júnior em engenharia e análise de dados. Me chame no LinkedIn ou por e-mail.",
    "contact.location_label": "Localização",
    "form.name": "Nome",
    "form.email": "E-mail",
    "form.subject": "Assunto",
    "form.message": "Mensagem",
    "form.send": "Enviar",
    "form.sent": "Seu aplicativo de e-mail foi aberto com a mensagem pronta. É só enviar por lá.",
    "form.missing": "Preencha nome, e-mail e mensagem para enviar.",
    "form.invalid_email": "Confira o e-mail: ele precisa ter o formato nome@exemplo.com.",
    "form.default_subject": "Contato pelo portfólio",
    "lightbox.hint": "Ctrl + scroll para ampliar"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.articles": "Notes",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.subtitle": "Turning software development experience into data-driven solutions.",
    "hero.cta_projects": "Latest projects",
    "hero.cta_contact": "Get in touch",
    "hero.cta_cv": "Download CV",

    "about.eyebrow": "about",
    "about.title": "A little about me.",
    "about.p1": "I started my journey completely certain that I wanted to work as a back-end developer, building and maintaining software. Along the way, I had the opportunity to work in a data-focused area, which sparked my interest in expanding my scope of work.",
    "about.p2": "From that point on, I began simultaneously pursuing software development and working with data within applications, making the most of my skills and always aiming to extract the best results.",

    "projects.eyebrow": "Portfolio",
    "projects.title": "Recent projects.",
    "project.link_code": "Code",
    "project.link_detail": "View details →",
    "project.back": "← Back to projects",
    "projpage.overview": "Overview",
    "projpage.results": "Results",
    "projpage.stack": "Stack",
    "projpage.zoom_hint": "Click to zoom",
    "proj1.detail.p1": "ETL pipeline in Python that processes 100,000 simulated banking transactions: validates and standardises CPFs, dates and monetary values, rejects invalid records with the reason logged, and converts the result from CSV to Parquet.",
    "proj1.detail.r1": "63% compression — Parquet file is 63% smaller than the original CSV",
    "proj1.detail.r2": "9.4× faster — queries on the Parquet are 9.4x faster",
    "proj1.detail.r3": "6,937 invalid records rejected with the reason logged",
    "proj1.detail.r4": "8 automated tests with Pytest covering validation and conversion",
    "proj2.detail.p1": "Real-time data architecture designed for a banking contact centre using AWS services. The flow captures events from Amazon Connect, processes them via Kinesis Data Streams and Lambda, persists in S3, and exposes them via Athena for consumption in operational dashboards.",
    "proj2.detail.r1": "End-to-end latency under 60 seconds — from event to KPI on the dashboard",
    "proj2.detail.r2": "Estimated cost of US$ 24/month for the projected call volume",
    "proj2.detail.r3": "Full flow documented: ingestion → processing → storage → visualisation",
    "proj2.detail.r4": "Technical justifications recorded for each AWS service choice",
    "proj3.detail.p1": "Data Engineering pipeline in Python implementing the Medallion Architecture (Bronze → Silver → Gold). Processes 50,000 simulated credit proposals, applying cleaning, validation and enrichment at each layer and delivering a star schema queryable via DuckDB, with technical decision documentation and cost estimates for future cloud migration.",
    "proj3.detail.r1": "Star schema with fato_propostas table + 4 dimensions queryable via SQL",
    "proj3.detail.r2": "9 automated tests with Pytest covering each pipeline layer",
    "proj3.detail.r3": "Synthetic data generated with Faker for realistic simulation",
    "proj3.detail.r4": "Technical decision documentation and cost estimates for cloud migration",
    "proj1.tag": "Python · ETL",
    "proj1.title": "Financial Data Pipeline",
    "proj1.desc": "ETL pipeline that cleans and standardizes banking data (CPF, dates, amounts) and converts CSV to Parquet — 63% smaller and 9.4x faster queries.",
    "proj2.tag": "AWS · Streaming",
    "proj2.title": "Architecture Diagram — Amazon Connect",
    "proj2.desc": "Real-time data architecture that turns banking contact center events into operational KPIs, with latency under 60 seconds.",
    "proj3.tag": "Python · DuckDB",
    "proj3.title": "Data Lake with Medallion Architecture",
    "proj3.desc": "Bronze→Silver→Gold pipeline that processes 50,000 simulated proposals, applies cleaning and validation at each layer, and delivers a star schema queryable via DuckDB, with 9 automated tests.",

    "stack.eyebrow": "stack",
    "stack.title": "Tools & technologies",
    "stack.group1": "Data & Analytics",
    "stack.group2": "Development",

    "certifications.eyebrow": "Certifications",
    "certifications.title": "Courses & certifications",
    "certifications.empty_desc": "I've gathered courses, certifications and languages in one place.",
    "certifications.empty_cta": "View certifications",

    "articles.eyebrow": "Articles",
    "articles.title": "Articles",
    "articles.read_more": "Read more →",
    "art1.title": "From Software Development to Data",
    "art1.desc": "Building a union between two paths leading to the same destination.",
    "art2.title": "The Excel I Didn't Know I'd Need",
    "art2.desc": "How a course I didn't want to take became an essential tool in my journey with data.",

    "contact.eyebrow": "contact",
    "contact.desc": "Open to internship and junior opportunities in engineering, development and data analysis.",
    "contact.copied": "Copied!",
    "footer.rights": "All rights reserved.",

    "article.back": "← Back to articles",

    "art1.full_title": "From Software Development to Data: building a union between two paths leading to the same destination",
    "art1.date": "August 4, 2026, at 11:59 AM (Brasília time — UTC−3)",
    "art1.p1": "I believe that ever since I started my first degree, in Systems Analysis and Development, even before my first encounter, in the second semester, with the intimidating subject \"Object-Oriented Programming\" using the Java language — also known as the \"seven-headed monster\" and other such nicknames —, I already had it in mind that I would pursue a career in technology, focused on backend software development.",
    "art1.p2": "Honestly, I never quite understood why, but the Java language always sparked a curiosity in me and a desire to learn it. I believe this is because I always heard from everyone around me that it was an extremely boring, tiring, maddening language, among other \"compliments.\" At the same time, though, a thought came up: \"why not the data field?\"",
    "art1.p3": "As a teenager, for a brief period, I dedicated myself to studying for a public exam for a bank teller position at Banco do Brasil. Unfortunately, I didn't make it to the next stage; but at that moment, I believe a seed was planted deep in my mind: that the financial field is genuinely interesting to study. That seed took a few years to germinate and show its first signs that it could eventually bear fruit.",
    "art1.p4": "Back in my college years, I had the opportunity to intern for a year and five months in the integrated risk area of a bank. During that time, I worked not only with risk assessment and report building, but also with data analysis, decision-making based on that information, and model development. That's when the same seed planted years before showed signs of growth and strength again.",
    "art1.p5": "After that experience, I focused primarily on finishing my degree. Still, a thought kept coming back to me: \"do I really just want to develop software? What about the data field? Would that be a completely radical change of direction, or just a course correction?\" These are questions I've been slowly building answers to — and, perhaps, I still don't have them all.",
    "art1.p6": "Naturally, I started leaning toward the risk field, influenced by internal reflection, conversations with people around me, and experiences both lived and observed. I believe I'm still in the process of figuring out how to cohesively integrate technology, data, the financial market, risk, programming logic, and engineering. The idea is that all these \"ingredients,\" when combined, produce a result that's consistent, relevant, and enjoyable in both form and content.",
    "art1.p7": "I don't see this as abandoning software development, but rather as an evolution of my professional path, where I'm able to integrate different skills toward a final result with greater value and effectiveness.",
    "art1.p8": "To the readers who followed this reflection this far, this portfolio was created to document the building of that journey: projects that demonstrate not just technical skills, but also the ability to think with data within a business context.",

    "art2.date": "August 11, 2026, at 1:02 PM (Brasília time — UTC−3)",
    "art2.p1": "In 2019, at the \"peak\" of my 16 to 17 years old, I was taking several courses at a school: English, computer and laptop assembly and maintenance, tourism and hospitality, among others. My mother had started an Advanced Excel course, but due to lack of time, she couldn't continue it and ended up \"passing\" the course on to me.",
    "art2.p2": "I confess that, at the time, I didn't think it was the best idea in the world. It was one more thing to squeeze into my already packed schedule, and I looked at it somewhat sideways: \"Excel? I have no idea when I'll ever use that.\"",
    "art2.p3": "Back then, I did some practical exercises along the lines of \"this plus this, plus this here and that there, results in this.\" Up to that point, that version of Daniel saw Excel as just another tool in the Office package among many others. I had never done anything truly relevant with the tool, let alone used it professionally.",
    "art2.p4": "From a certain point of view, it was even understandable to think that way.",
    "art2.p5": "Years later, I started using Excel to build a personal expense spreadsheet and get better control over my finances. Nothing too complex: some basic formatting, functions like SUM, filters, and a few charts to organize the information better.",
    "art2.p6": "At that point, with a somewhat more mature mindset, I started to better understand the importance of that tool. And my subconscious probably thanked my mother for enrolling me in that course.",
    "art2.p7": "Over time, already in a work environment, that \"burden\" ended up turning into a tool I used professionally. And that's when a major turning point happened.",
    "art2.p8": "The difference between \"let me jot down these R$78 spent on the credit card bill\" and \"how can all that work involving systems, databases, SQL, and even Power BI culminate in a 'simple' spreadsheet capable of pointing a direction for decisions that can cost millions of reais?\"",
    "art2.p9": "Crazy, right? Maybe? I think so.",
    "art2.p10": "Today I can see that, indirectly, those first spreadsheets were my first steps into the data field — but in a completely unpretentious way.",
    "art2.p11": "For believers in the butterfly effect or chaos theory, there's certainly a universe out there where I ended up working with PowerPoint instead and today I'm building \"hat-tipping\" presentations. But in the universe where this text is being written, Daniel keeps using more complex functions, building dashboards with a touch of Power BI, applying Power Query in some projects, connecting Excel to external files and sources, modeling data, and learning to give it \"direction.\"",
    "art2.p12": "Every day using that \"burden\" is one more day I realize just how powerful and applicable a tool it is. It's curious to think that all of this started with a course I didn't want to take.",
    "art2.p13": "In 2019, I asked myself: \"Excel? I have no idea when I'll ever use that.\"",
    "art2.p14": "Today I know.",

    "art3.title": "41 days, 30 applications, tests and a few other insights.",
    "art3.desc": "41 days of hiatus, highs and lows, applications, technical tests and the first interview — and what to make of all of it.",
    "art3.date": "September 21, 2026, at 6:43 PM (Brasília time — UTC−3)",
    "art3.p1": "41 days. That's the figure I'm opening with as I break my writing hiatus. Coincidentally, 41 days is also how long it has been since my last post. I don't think that's much of a coincidence.",
    "art3.p2": "In those 41 days I'll admit there were highs and lows — days when I couldn't be productive \"vibe-coding\" and opened the AI tool and spent minutes staring at the screen at \"so what are we doing today, Daniel?\" without being able to type anything. And then there were days when I applied to several internship opportunities with the mindset of \"today I'm going all the way to the basement of the basement of this house called LinkedIn.\" I think part of this journey is understanding that those days — good and bad — will be there along the way, and that they're part of growing up, not just professionally but personally too. Each day, looked at from a certain angle, can (and I personally believe should) be seen as a chance to review and/or improve something.",
    "art3.p3": "Over those 41 days I applied to around 30 internship processes. Of those 30, up to this point I've had 9 negative responses, completed 3 technical tests, and today — the day I'm writing this — had my first interview / group dynamic. I can pull some data points from this: I've advanced 10%, I still have a 70% chance of getting into some program, or 70% of processes still have no defined outcome. As I said, it's all about perspective — 30% of companies didn't move forward, among other metrics.",
    "art3.p4": "I also think it's worth mentioning that during this time I built a new data warehouse project for my portfolio — it's already available on the projects tab (gotta sell myself, right?!) — I ramped up my study load on data tools, had nightmares about INNER JOIN, LEFT JOIN, and GROUP BY (just like I did during the Database subject in college), and also had nightmares about complex measures like CALCULATE, FILTER, ALLSELECTED and EARLIER. At least in Power BI, those nightmares are new.",
    "art3.p5": "So even if not in an explicit or obvious way, this hiatus wasn't \"all bad\" — but it did have its moments of euphoria, anxiety, high bursts of brain dopamine followed by that dopamine hangover, and that's completely normal. As I said before, it's part of the journey of growing up, and it's on us to be flexible in handling these situations rather than being rigid like a rock. After all, as the popular saying goes: keep knocking and the door will open.",
    "art3.p6": "What results can I bring from all this? Well, I'll put them in a dashboard and come back with the insights soon.",

    "certpage.back": "← Back to portfolio",
    "certpage.title": "Courses, certifications and languages",
    "certpage.intro": "Here I gather the courses and certifications I've been completing or taking during my transition into data, along with the languages I speak.",
    "certpage.tab_courses": "Courses",
    "certpage.tab_certifications": "Certifications",
    "certpage.tab_languages": "Languages",
    "certpage.view_cert": "View certificate",
    "certpage.panel_empty_title": "No certifications published yet",
    "certpage.panel_empty_desc": "I'm still deciding which certifications make the most sense to prioritize right now. Once I do, they'll show up here.",

    "course1.desc": "24-hour bootcamp on the fundamentals of Generative Artificial Intelligence, completed on 09/30/2025.",

    "lang.pt_name": "Portuguese",
    "lang.en_name": "English",
    "lang.es_name": "Spanish",
    "lang.pt_level": "C2 · Native",
    "lang.en_level": "C2 · Fluent",
    "lang.es_level": "B1 · Intermediate",
    "nav.portfolio": "Portfolio",
    "nav.blog": "Articles",
    "hero.welcome": "Welcome to my portfolio!",
    "hero.role": "Data Engineering | Data Analysis | Software Development",
    "hero.cta_about": "About me",
    "hero.scroll": "Scroll down",
    "about.kicker": "About",
    "about.lead": "A short summary of where I come from and where I'm heading.",
    "about.hello": "Hello!",
    "about.p3": "Today my focus is data engineering and analysis in the financial market: pipelines, modeling and reports that support decisions.",
    "about.skills_title": "My main skills.",
    "about.cv": "Download résumé",
    "level.advanced": "Advanced",
    "level.intermediate": "Intermediate",
    "level.basic": "Basic",
    "resume.education": "Education.",
    "resume.experience": "Work experience.",
    "resume.tools": "Tools:",
    "edu1.date": "Feb 2026 – Present",
    "edu1.title": "Software Engineering",
    "edu1.type": "Bachelor's degree.",
    "edu2.date": "Feb 2023 – Dec 2025",
    "edu2.title": "Systems Analysis and Development",
    "edu2.type": "Associate degree (Technologist).",
    "exp1.date": "Jun 2023 – Oct 2024",
    "exp1.role": "Risk and Credit Analyst — Intern",
    "exp1.b1": "Prepared monthly regulatory reports (DRL, DLI, DDR and DRM) using SQL, SAS and Excel, within the deadlines set by Brazil's Central Bank.",
    "exp1.b2": "Extracted and processed data from relational databases via SQL for credit, liquidity and reputational risk analysis, cutting report preparation time.",
    "exp1.b3": "Built and maintained MicroStrategy dashboards, centralizing risk indicators for business and management teams.",
    "exp1.b4": "Acted as the point of contact between the risk team and internal client areas to align regulatory information.",
    "certs.title": "Courses & certifications.",
    "certs.view": "View certificate",
    "course1.date": "Sep 2025",
    "course1.meta": "Workload: 24h.",
    "course2.date": "Apr 2026",
    "course2.title": "EF SET — English Certificate",
    "course2.meta": "Level C2 (proficient), score 77/100.",
    "projects.kicker": "Portfolio",
    "projects.lead": "Click a project to see the details. The code is on my",
    "cat.engineering": "Data Engineering",
    "cat.architecture": "Data Architecture",
    "cat.etl": "Data Engineering",
    "cat.career": "Career",
    "cat.tools": "Tools",
    "blog.kicker": "Articles",
    "blog.title": "Recent posts.",
    "blog.lead": "Writing about my move into data: what I'm learning, building and facing along the way.",
    "art1.short_date": "August 4, 2026",
    "art2.short_date": "August 11, 2026",
    "art3.short_date": "September 21, 2026",
    "contact.kicker": "Contact",
    "contact.title": "Get in touch.",
    "contact.lead": "I'm open to internships and junior roles in data engineering and analysis. Reach me on LinkedIn or by email.",
    "contact.location_label": "Location",
    "form.name": "Name",
    "form.email": "Email",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send",
    "form.sent": "Your email app opened with the message ready. Just send it from there.",
    "form.missing": "Fill in name, email and message to send.",
    "form.invalid_email": "Check the email: it needs to look like name@example.com.",
    "form.default_subject": "Contact from portfolio",
    "lightbox.hint": "Ctrl + scroll to zoom"
  }
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentLang = "pt";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.pt[key] || "";
}

function safeStorageGet(key) {
  try { return window.localStorage.getItem(key); } catch (e) { return null; }
}
function safeStorageSet(key, value) {
  try { window.localStorage.setItem(key, value); } catch (e) { /* sem persistência */ }
}

/* =========================================================
   IDIOMA (lembrado entre páginas)
   ========================================================= */
function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "pt";
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = translations[currentLang][el.getAttribute("data-i18n")];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = translations[currentLang][el.getAttribute("data-i18n-placeholder")];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === currentLang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  const cvBtn = document.getElementById("cvDownloadBtn");
  if (cvBtn) {
    const en = currentLang === "en";
    cvBtn.setAttribute("href", cvBtn.getAttribute(en ? "data-cv-en" : "data-cv-pt"));
    cvBtn.setAttribute("download", cvBtn.getAttribute(en ? "data-cv-en-filename" : "data-cv-pt-filename"));
  }

  const status = document.getElementById("formStatus");
  if (status) { status.textContent = ""; status.classList.remove("is-error"); }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    if (lang === currentLang) return;
    applyLanguage(lang);
    safeStorageSet("lang", lang);
  });
});

/* =========================================================
   MENU: fica preto depois que a apresentação sai da tela,
   marca a seção atual e mostra o botão "voltar ao topo"
   ========================================================= */
function setupHeader() {
  const header = document.getElementById("siteHeader") || document.querySelector(".site-header");
  const backToTop = document.getElementById("backToTop");
  const isHome = document.body.classList.contains("home");

  const update = () => {
    const y = window.scrollY;
    if (header && isHome) header.classList.toggle("is-solid", y > 80);
    if (backToTop) backToTop.classList.toggle("is-visible", y > window.innerHeight * 0.8);
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupScrollspy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const linkFor = { certificacoes: "sobre" }; // cursos ficam dentro de "Sobre" no menu
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = linkFor[entry.target.id] || entry.target.id;
      navLinks.forEach((link) => link.classList.toggle("is-current", link.getAttribute("href") === `#${id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));
}

function setupScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    document.getElementById("siteHeader")?.classList.add("is-solid");
  });
  nav.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

/* =========================================================
   APRESENTAÇÃO: rede de pontos ligados (dados conectados)
   ========================================================= */
function setupNetworks() {
  document.querySelectorAll("canvas.hero-network").forEach(setupNetwork);
}

function setupNetwork(canvas) {
  if (!canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const LINK_DIST = 150;
  let points = [];
  let width = 0, height = 0, dpr = 1, running = false, rafId = null;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(110, (width * height) / 14000));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      for (let j = i + 1; j < points.length; j++) {
        const b = points[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          ctx.strokeStyle = `rgba(255,255,255,${0.22 * (1 - Math.sqrt(d2) / LINK_DIST)})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    points.forEach((p) => { ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2); ctx.fill(); });
  }

  function step() {
    points.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });
    draw();
    if (running) rafId = requestAnimationFrame(step);
  }

  function start() { if (!running && !prefersReducedMotion) { running = true; rafId = requestAnimationFrame(step); } }
  function stop() { running = false; if (rafId) cancelAnimationFrame(rafId); }

  resize();
  draw();
  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { resize(); draw(); }, 150); });

  // só anima enquanto a apresentação está visível
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop())).observe(canvas);
  } else {
    start();
  }
}

/* =========================================================
   CARROSSEL DE CURSOS (mais antigo à esquerda, mais recente à direita)
   ========================================================= */
function setupCarousel() {
  const root = document.getElementById("certCarousel");
  if (!root) return;
  const track = root.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prev = root.querySelector('.carousel-arrow[data-dir="-1"]');
  const next = root.querySelector('.carousel-arrow[data-dir="1"]');
  let index = 0;

  const perView = () => (window.matchMedia("(max-width: 860px)").matches ? 1 : 2);

  function render() {
    const maxIndex = Math.max(0, slides.length - perView());
    index = Math.min(Math.max(index, 0), maxIndex);
    track.style.transform = `translateX(-${(index * 100) / perView()}%)`;
    prev.disabled = index === 0;
    next.disabled = index === maxIndex;
    slides.forEach((slide, i) => {
      const visible = i >= index && i < index + perView();
      slide.setAttribute("aria-hidden", String(!visible));
      slide.querySelectorAll("button, a").forEach((el) => (el.tabIndex = visible ? 0 : -1));
    });
  }

  prev.addEventListener("click", () => { index -= 1; render(); });
  next.addEventListener("click", () => { index += 1; render(); });
  window.addEventListener("resize", render);

  // arrastar com o dedo no celular
  let startX = null;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { index += dx < 0 ? 1 : -1; render(); }
    startX = null;
  });

  render();
}

/* =========================================================
   CERTIFICADO AMPLIADO (lightbox com zoom)
   Ctrl + scroll amplia; arraste para navegar; duplo clique volta ao normal.
   ========================================================= */
function setupLightboxes() {
  const MIN_ZOOM = 1, MAX_ZOOM = 4, ZOOM_STEP = 0.15;

  document.querySelectorAll(".lightbox").forEach((lightbox) => {
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const img = lightbox.querySelector(".lightbox-img");
    const triggers = document.querySelectorAll(`[data-lightbox-target="${lightbox.id}"]`);
    if (!closeBtn || !triggers.length) return;

    let lastFocused = null, scale = 1, posX = 0, posY = 0;
    let isDragging = false, justDragged = false, dragStartX = 0, dragStartY = 0;

    const applyTransform = () => { if (img) img.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`; };
    const resetZoom = () => {
      scale = 1; posX = 0; posY = 0;
      if (img) { img.classList.remove("is-zoomed"); img.style.transform = ""; }
    };
    const open = () => {
      lastFocused = document.activeElement;
      resetZoom();
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    };
    const close = () => {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      resetZoom();
      if (lastFocused) lastFocused.focus();
    };

    triggers.forEach((trigger) => trigger.addEventListener("click", (e) => { e.preventDefault(); open(); }));
    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (justDragged) { justDragged = false; return; }
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) close(); });

    if (!img) return;
    lightbox.addEventListener("wheel", (e) => {
      if (lightbox.hidden || !e.ctrlKey) return;
      e.preventDefault();
      scale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, scale + (e.deltaY < 0 ? 1 : -1) * ZOOM_STEP));
      if (scale === MIN_ZOOM) { posX = 0; posY = 0; }
      img.classList.toggle("is-zoomed", scale > MIN_ZOOM);
      applyTransform();
    }, { passive: false });
    img.addEventListener("dblclick", resetZoom);
    img.addEventListener("mousedown", (e) => {
      if (scale <= MIN_ZOOM) return;
      isDragging = true;
      img.classList.add("is-dragging");
      dragStartX = e.clientX - posX; dragStartY = e.clientY - posY;
      e.preventDefault();
    });
    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      posX = e.clientX - dragStartX; posY = e.clientY - dragStartY;
      applyTransform();
    });
    window.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false; justDragged = true;
      img.classList.remove("is-dragging");
    });
  });
}

/* =========================================================
   ABAS DA PÁGINA DE CERTIFICAÇÕES
   ========================================================= */
function setupCertTabs() {
  const buttons = document.querySelectorAll(".cert-tabs .tab-btn");
  const panels = document.querySelectorAll(".cert-panel");
  buttons.forEach((btn) => btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");
    buttons.forEach((b) => b.classList.toggle("is-active", b === btn));
    panels.forEach((p) => p.classList.toggle("is-active", p.getAttribute("data-panel") === target));
  }));
}

/* =========================================================
   ROLAGEM SUAVE
   Ao clicar num item do menu (ou em qualquer link #secao),
   a página desliza até a seção em vez de pular direto.
   ========================================================= */
function setupSmoothScroll() {
  const easeInOutCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  let animId = null;

  function scrollToY(targetY) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 2) return;
    const duration = Math.min(1400, Math.max(600, Math.abs(distance) * 0.35));
    const startTime = performance.now();
    if (animId) cancelAnimationFrame(animId);

    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = id === "top" ? document.body : document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerH = id === "top" ? 0 : 72;
      const y = id === "top" ? 0 : target.getBoundingClientRect().top + window.scrollY - headerH;
      scrollToY(Math.max(0, y));
      history.replaceState(null, "", `#${id}`);
    });
  });

  // parar a animação se a pessoa rolar com o mouse no meio do caminho
  window.addEventListener("wheel", () => { if (animId) cancelAnimationFrame(animId); }, { passive: true });
}

/* =========================================================
   INÍCIO
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(safeStorageGet("lang") || "pt");
  setupHeader();
  setupScrollspy();
  setupScrollProgress();
  setupMobileMenu();
  setupNetworks();
  setupSmoothScroll();
  setupCarousel();
  setupLightboxes();
  setupCertTabs();
});
