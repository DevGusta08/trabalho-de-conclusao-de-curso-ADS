# 📚 Vest+

> Plataforma web educacional desenvolvida para auxiliar estudantes na preparação para o vestibular por meio da organização por áreas do conhecimento, da recomendação de conteúdos e do acompanhamento do progresso de estudo.

---

## 📖 Sobre o Projeto

O **Vest+** é uma plataforma web educacional criada para ajudar estudantes em sua preparação para o vestibular, oferecendo um ambiente centralizado para acesso e organização de conteúdos de estudo.

A plataforma estrutura os conteúdos de acordo com as **áreas do conhecimento** do ENEM, que são divididas em **matérias**. Para cada matéria, o estudante encontra **conteúdos recomendados** em três formatos: vídeos, artigos e livros.

O estudante também pode **acompanhar o próprio progresso**, marcando as matérias que já estudou. Elas passam a aparecer em uma seção própria do painel, e a plataforma sugere de onde continuar.

O projeto foi desenvolvido como parte do **Trabalho de Conclusão de Curso (TCC)** do curso de **Análise e Desenvolvimento de Sistemas**, da instituição **E.E. Itajahy Feitosa Martins**.

---

## 🎯 Objetivos

### Objetivo Geral

Desenvolver uma plataforma web educacional capaz de auxiliar estudantes na preparação para o vestibular por meio da organização e da recomendação de conteúdos das diferentes áreas do conhecimento, proporcionando uma experiência de estudo mais organizada e acessível.

### Objetivos Específicos

- Organizar conteúdos educacionais de acordo com as áreas do conhecimento;
- Estruturar as áreas do conhecimento em suas respectivas matérias;
- Reunir em um único ambiente vídeos, artigos e livros recomendados para cada matéria;
- Permitir que o estudante acompanhe seu progresso marcando as matérias já estudadas;
- Implementar um sistema de cadastro e autenticação de usuários;
- Desenvolver uma interface simples, intuitiva e responsiva.

---

## ❓ Problema

Atualmente, existe uma grande quantidade de conteúdos educacionais disponíveis na internet. Embora essa variedade seja positiva, a quantidade de materiais dificulta a identificação de conteúdos adequados às necessidades de cada estudante.

Além disso, os conteúdos estão distribuídos em diferentes plataformas e fontes, fazendo com que o estudante precise realizar diversas pesquisas para encontrar materiais de uma determinada matéria ou área do conhecimento.

Outro problema está relacionado à organização dos estudos. Sem uma estrutura adequada, o estudante pode ter dificuldade para saber o que já estudou, o que ainda falta e por onde continuar.

O Vest+ busca atender a essa necessidade por meio de uma plataforma que centraliza os conteúdos, organiza-os por áreas e matérias e permite acompanhar o progresso de estudo.

---

## 💡 Justificativa

A escolha pelo desenvolvimento do Vest+ surgiu da necessidade de oferecer aos estudantes uma ferramenta que facilite o acesso e a organização de conteúdos educacionais para o vestibular.

Ao reunir diferentes conteúdos em uma única plataforma e organizá-los por áreas do conhecimento e matérias, o sistema reduz a dificuldade encontrada durante a procura por materiais de estudo.

A recomendação de vídeos, artigos e livros por matéria auxilia o estudante a escolher o formato de estudo que prefere, enquanto o acompanhamento de progresso o ajuda a manter o controle sobre o que já foi estudado.

---

# 🚀 Funcionalidades

## 📚 Áreas do Conhecimento e Matérias

O conteúdo é organizado em cinco áreas, cada uma dividida em matérias:

| Área | Matérias |
|------|----------|
| Matemática e suas Tecnologias | 5 |
| Ciências da Natureza e suas Tecnologias | 3 |
| Ciências Humanas e suas Tecnologias | 3 |
| Linguagens, Códigos e suas Tecnologias | 2 |
| Redação | 1 |

As áreas funcionam como forma de classificação dos conteúdos e podem ser navegadas pela barra lateral do painel.

---

## 🎯 Conteúdos Recomendados

Ao clicar em uma matéria, o estudante acessa uma página com os conteúdos recomendados para ela, agrupados por tipo:

- **Vídeos**
- **Artigos**
- **Livros**

Os artigos levam a páginas específicas. Nas matérias de Matemática, Biologia, Química, Física e Redação, o topo dos vídeos traz uma playlist de um canal conhecido de preparação para o ENEM. Os demais vídeos e os livros levam a resultados de busca (YouTube e Google Livros) sobre o assunto. Todos os links abrem em uma nova aba.

---

## ✅ Acompanhamento de Progresso

Cada matéria possui uma caixa de seleção para ser marcada como estudada. A partir disso:

- A matéria aparece na seção **Feitos** do painel, com a indicação da sua área;
- Na lista de matérias, as já estudadas ficam visualmente destacadas;
- O card **Continuar de onde parou** mostra a última matéria marcada.

O progresso é salvo no navegador (`localStorage`), separado por usuário.

---

## 🔐 Cadastro e Autenticação

O Vest+ possui cadastro e login para que cada estudante tenha acesso individualizado à plataforma.

- Os dados são validados no servidor: nome de até 100 caracteres, e-mail em formato válido de até 150 caracteres e senha de 8 caracteres a 72 bytes;
- A senha é armazenada com hash (**bcryptjs**), e os e-mails são normalizados e não podem ser repetidos;
- O login retorna um **token JWT**, com validade de 2 horas, usado para acessar as rotas protegidas;
- Ao abrir o painel ou uma matéria, o front-end confirma o token com o servidor; se ele estiver inválido ou expirado, o usuário é desconectado e volta para o login;
- As tentativas de login (10 a cada 15 minutos) e de cadastro (20 por hora, por IP) são limitadas para dificultar abusos.

---

## 🏠 Página Inicial

A página inicial apresenta a proposta do Vest+ e funciona como ponto de entrada, com acesso ao login e ao cadastro, e termina em um rodapé com os créditos do projeto.

---

## 📊 Painel (Dashboard)

Após o login, o estudante acessa o painel de estudos, composto por:

- **Barra lateral** com as áreas do conhecimento;
- **Feitos:** matérias já marcadas como estudadas;
- **Em destaque:** *Continuar de onde parou* e *Sugestão da semana*;
- **Matérias:** cards das matérias da área selecionada;
- **Cabeçalho** com o nome do usuário, avatar e botão **Sair**.

O painel e a página de matérias são responsivos.

---

# 🛠️ Tecnologias Utilizadas

## 🎨 Front-end

- **HTML5:** estruturação das páginas;
- **CSS3:** estilização e responsividade;
- **JavaScript:** interações, comunicação com a API (`fetch`) e armazenamento local (`localStorage`);
- **Google Fonts:** fontes Sora e Inter.

## ⚙️ Back-end

- **Node.js:** ambiente de execução do servidor;
- **Express.js (v5):** criação do servidor, definição das rotas e gerenciamento das requisições HTTP;
- **MySQL2:** comunicação com o banco de dados, com uso de *pool* de conexões;
- **bcryptjs:** hash das senhas dos usuários;
- **jsonwebtoken:** geração e validação dos tokens de autenticação (JWT);
- **express-rate-limit:** limitação de tentativas nas rotas de login e de cadastro;
- **helmet:** cabeçalhos HTTP de segurança (incluindo a Content-Security-Policy);
- **dotenv:** carregamento das variáveis de ambiente do arquivo `.env`.

## 🗄️ Banco de Dados

- **MySQL:** banco de dados relacional;
- **MySQL Workbench:** gerenciamento e administração do banco.

Atualmente, a aplicação utiliza a tabela `usuarios`. O arquivo `schema.sql` também define as tabelas `areas`, `materias`, `recomendacoes` e `progresso`, que já deixam modelada a migração futura dos conteúdos e do progresso para o banco. Por enquanto, os conteúdos ficam em `public/js/dados-dashboard.js` e o progresso no `localStorage`.

## 🔧 Ferramentas

- Visual Studio Code
- Git e GitHub
- npm
- MySQL Workbench
- Postman (testes das rotas)

---

# 🏗️ Arquitetura do Projeto

O Vest+ separa as responsabilidades entre diferentes partes da aplicação, o que facilita a manutenção e a evolução do código.

### `routes/`

Define as rotas da aplicação e direciona as requisições para os controllers correspondentes.

### `controllers/`

Contém a lógica de cada rota: validação dos dados, consultas ao banco e respostas. O gerenciamento de usuários (`usuarios.controller.js`) é separado da autenticação (`login.controller.js`).

### `middlewares/`

Contém o middleware de autenticação, que valida o token JWT antes de liberar o acesso às rotas protegidas.

### `scripts/`

Contém o `gerar-links.js`, um script de uso único que preenche os links de vídeos e livros do `dados-dashboard.js` (playlists por matéria e links de busca). Ele não faz parte da execução da aplicação.

### `utils/`

Contém as regras de validação de nome, e-mail e senha, compartilhadas entre o cadastro e a atualização de usuários.

### `views/`

Contém as páginas HTML da interface.

### `public/`

Arquivos estáticos usados pelo front-end: CSS, scripts JavaScript e imagens. O próprio servidor Express serve as pastas `public/` e `views/`.

### `config/`

Configuração da conexão com o banco de dados.

### `schema.sql`

Estrutura do banco de dados, com a criação do banco `tcc_vestibular` e das tabelas.

### `server.js`

Arquivo principal: inicializa o servidor e registra os middlewares e rotas.

---

# 📂 Estrutura do Projeto

```text
trabalho-de-conclusao-de-curso-ADS/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── login.controller.js
│   └── usuarios.controller.js
│
├── middlewares/
│   └── auth.middleware.js
│
├── public/
│   ├── css/
│   │   ├── cadastro.css
│   │   ├── dashboard.css
│   │   ├── home.css
│   │   └── style.css
│   │
│   ├── img/
│   │   ├── foto1.png
│   │   └── logo1.svg
│   │
│   └── js/
│       ├── auth.js
│       ├── cadastro.js
│       ├── dados-dashboard.js
│       ├── dashboard.js
│       ├── login.js
│       └── materia.js
│
├── routes/
│   ├── login.routes.js
│   └── usuarios.routes.js
│
├── scripts/
│   └── gerar-links.js
│
├── utils/
│   └── validacoes.js
│
├── views/
│   ├── cadastro.html
│   ├── dashboard.html
│   ├── home.html
│   ├── login.html
│   └── materia.html
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── schema.sql
└── server.js
```

---

# 🔄 Funcionamento Geral

```text
        ┌──────────────────┐
        │  Página Inicial  │
        └────────┬─────────┘
                 │
                 ▼
        ┌──────────────────┐
        │  Cadastro/Login  │
        └────────┬─────────┘
                 │
                 ▼
        ┌──────────────────┐
        │     Dashboard    │
        │ (áreas, matérias │
        │   e progresso)   │
        └────────┬─────────┘
                 │
                 ▼
        ┌──────────────────┐
        │ Página da matéria│
        │ (vídeos, artigos │
        │     e livros)    │
        └──────────────────┘
```

---

# 🔌 Rotas da API

| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| `POST` | `/usuarios` | Cadastra um novo usuário (limite de 20 por hora, por IP) | Não |
| `POST` | `/login` | Autentica o usuário e retorna o token JWT | Não |
| `GET` | `/usuarios/:id` | Busca os dados (id, nome, e-mail) do usuário | Sim |
| `PUT` | `/usuarios/:id` | Atualiza nome e e-mail do usuário | Sim |
| `DELETE` | `/usuarios/:id` | Remove o usuário | Sim |

As rotas protegidas exigem o cabeçalho `Authorization: Bearer <token>`, e o usuário só pode acessar ou alterar a **própria** conta. Dados inválidos retornam `400`, e-mail já cadastrado retorna `409`, e excesso de tentativas retorna `429`.

---

# ⚙️ Como Executar o Projeto

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) e npm
- [Git](https://git-scm.com/)
- MySQL e MySQL Workbench

---

## 1. 📥 Clonar o Repositório

```bash
git clone https://github.com/DevGusta08/trabalho-de-conclusao-de-curso-ADS.git
cd trabalho-de-conclusao-de-curso-ADS
```

---

## 2. 📦 Instalar as Dependências

```bash
npm install
```

---

## 3. 🗄️ Criar o Banco de Dados

Abra o **MySQL Workbench** e execute o arquivo `schema.sql`. Ele cria o banco `tcc_vestibular` e todas as tabelas.

---

## 4. 🔐 Configurar as Variáveis de Ambiente

Na raiz do projeto, copie o arquivo `.env.example` com o nome `.env` e preencha com os seus dados:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=tcc_vestibular
PORT=3000
JWT_SECRET=troque_por_uma_chave_aleatoria_longa
```

- `JWT_SECRET` é **obrigatória**: sem ela o servidor não inicia. Use uma chave longa e aleatória. Uma forma de gerar:

  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

- Mantenha `PORT=3000`: as telas de login e cadastro enviam as requisições para `http://localhost:3000`.
- Opcionalmente, defina `DB_PORT` caso o seu MySQL não use a porta padrão (3306).

> **Importante:** o arquivo `.env` contém credenciais e não deve ser enviado ao GitHub. Ele já está no `.gitignore`.

---

## 5. ▶️ Iniciar o Servidor

```bash
npm start
```

Acesse a aplicação em:

```text
http://localhost:3000
```

---

# 🖥️ Telas da Aplicação

## 🏠 Página Inicial

Apresenta a proposta do Vest+ e leva ao login ou ao cadastro.

## 🔐 Login

Permite que usuários cadastrados se autentiquem na plataforma.

## 📝 Cadastro

Permite que novos estudantes criem uma conta, com confirmação de senha.

## 📊 Dashboard

Ambiente principal do estudante após o login: áreas, matérias, matérias concluídas e destaques.

## 📚 Matéria

Página que exibe os conteúdos recomendados (vídeos, artigos e livros) da matéria escolhida.

---

# 🎓 Público-Alvo

O Vest+ é voltado a **estudantes que se preparam para o vestibular** e buscam um ambiente centralizado para:

- Explorar as áreas do conhecimento;
- Acessar matérias e conteúdos recomendados;
- Acompanhar o que já estudaram;
- Organizar sua rotina de estudo.

---

# 📈 Resultados Esperados

Espera-se que o Vest+ torne o acesso aos conteúdos de estudo mais organizado e eficiente. Ao organizar o material em áreas e matérias, o estudante encontra os assuntos de maneira estruturada, e o acompanhamento de progresso ajuda a manter o controle sobre o que já foi estudado.

---

# 🔒 Segurança

- **Senhas:** nunca são armazenadas em texto simples; o hash é feito com **bcryptjs**, e a senha nunca é retornada pela API;
- **Autenticação:** o login gera um token **JWT** (algoritmo HS256) com validade de 2 horas, exigido nas rotas de usuários (exceto o cadastro) e verificado pelo front-end ao abrir o painel e as matérias;
- **Autorização:** o usuário só consegue consultar, alterar ou remover a própria conta;
- **Força bruta e abuso:** o login limita as tentativas (10 a cada 15 minutos) e o cadastro limita a criação de contas (20 por hora, por IP);
- **Validação de entrada:** nome, e-mail e senha são validados no servidor antes de chegar ao banco;
- **Cabeçalhos HTTP:** o **helmet** adiciona cabeçalhos de segurança, como a Content-Security-Policy;
- **Consultas ao banco:** utilizam parâmetros (`?`), o que protege contra SQL Injection;
- **Variáveis de ambiente:** credenciais do banco e a chave do JWT ficam no `.env`, protegido pelo `.gitignore`.

---

# 📌 Considerações Técnicas

A aplicação utiliza uma arquitetura baseada em Node.js e Express.js, com separação entre rotas, controllers, middlewares, arquivos de interface e recursos públicos. O mesmo servidor Express entrega o front-end e a API.

O MySQL armazena os dados dos usuários. Os conteúdos recomendados ficam em um arquivo JavaScript no front-end (`dados-dashboard.js`) e o progresso de estudo fica no `localStorage` do navegador, decisão tomada para manter o escopo do projeto adequado ao prazo do TCC. Os links de vídeos e livros desse arquivo são gerados pelo script `scripts/gerar-links.js`.

## Limitações conhecidas

- O progresso é salvo no navegador, portanto não é sincronizado entre dispositivos;
- O link "Esqueci minha senha" ainda não possui funcionalidade;
- O token de autenticação é guardado no `localStorage` do navegador;
- Os conteúdos recomendados são fixos e iguais para todos os usuários;
- As matérias de Matemática, Biologia, Química, Física e Redação têm uma playlist de um canal conhecido; os demais vídeos e todos os livros levam a resultados de busca (YouTube e Google Livros), e não a um vídeo ou livro específico.

---

# 🔮 Trabalhos Futuros

- **Simulados** por área do conhecimento, para que o estudante teste seus conhecimentos;
- **Acompanhamento de desempenho** com histórico dos resultados nos simulados;
- **Recomendações personalizadas**, baseadas nos interesses e no desempenho do estudante;
- **Área de perfil** do estudante;
- Migração dos conteúdos e do progresso para o banco de dados (tabelas já modeladas no `schema.sql`);
- Recuperação de senha ("Esqueci minha senha");
- Telas de edição e exclusão de conta, com confirmação de senha para excluir;
- Armazenar o token em cookie `HttpOnly`, em vez do `localStorage`;
- Curadoria de playlists para as matérias de Humanas e Linguagens, e de vídeos e livros específicos para cada assunto;
- Expansão das áreas, matérias e conteúdos disponíveis;
- Histórico de conteúdos acessados e sistema de favoritos;
- Indicador de progresso percentual por matéria e por área;
- Melhorias de acessibilidade;
- Testes automatizados.

---

# 👨‍💻 Equipe

Projeto desenvolvido pelos alunos do curso de **Análise e Desenvolvimento de Sistemas**.

### Integrantes

- **Gustavo Gabriel Miranda**
- **Arthur Emanuel Araujo Fernandes**
- **Larissa França da Silva**
- **Geovana Aparecida da Silva Souza**
- **José Francisco Silva Freitas Junior**
- **Fernanda Araújo Nogueira**

---

# 🎓 Projeto Acadêmico

Este projeto foi desenvolvido como parte do **Trabalho de Conclusão de Curso (TCC)** do curso de:

**Análise e Desenvolvimento de Sistemas**

### Instituição

**E.E. Itajahy Feitosa Martins**

### Projeto

**Vest+ — Plataforma Educacional**

### Ano

**2026**

---

# 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos e educacionais**, como parte do Trabalho de Conclusão de Curso.

---

<p align="center">
  📚 <strong>Vest+</strong> — Organizar, estudar e evoluir.
</p>
