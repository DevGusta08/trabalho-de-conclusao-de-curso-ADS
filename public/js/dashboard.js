const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario) {
    window.location.href = "login.html";
};

// Mostra o nome do usuário no header
document.getElementById("nome-usuario").textContent = `Olá, ${usuario.nome}`;
const areasContainer = document.getElementById("areas-container");

const listaAreas = document.getElementById("lista-areas");
let areaSelecionada = areas[0].nome; // começa com a primeira área selecionada

function renderizarSidebar() {
  listaAreas.innerHTML = "";

  areas.forEach((area) => {
    const botao = document.createElement("button");
    botao.textContent = area.nome;

    if (area.nome === areaSelecionada) {
      botao.classList.add("area-ativa");
    }

    botao.addEventListener("click", () => {
      areaSelecionada = area.nome;
      renderizarSidebar(); // redesenha a sidebar pra marcar o botão certo
      // (aqui depois vamos chamar a função que redesenha os cards de matéria)
    });

    listaAreas.appendChild(botao);
  });
}

renderizarSidebar();

// cria cards para ser inserido no HTML
areas.forEach((area) => {
  const areaDiv = document.createElement("div");
  areaDiv.classList.add("area-card");

  const areaTitulo = document.createElement("h2");
  areaTitulo.textContent = area.nome;
  areaDiv.appendChild(areaTitulo);

  area.materias.forEach((materia) => {
    const materiaDiv = document.createElement("div");
    materiaDiv.classList.add("materia-card");

    const materiaTitulo = document.createElement("h3");
    materiaTitulo.textContent = materia.nome;
    materiaDiv.appendChild(materiaTitulo);

    const listaRecomendacoes = document.createElement("ul");

    materia.recomendacoes.forEach((rec) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = rec.link;
      link.textContent = `[${rec.tipo}] ${rec.titulo}`;
      link.target = "_blank";
      item.appendChild(link);
      listaRecomendacoes.appendChild(item);
    });

    materiaDiv.appendChild(listaRecomendacoes);
    areaDiv.appendChild(materiaDiv);
  });

  areasContainer.appendChild(areaDiv);
});