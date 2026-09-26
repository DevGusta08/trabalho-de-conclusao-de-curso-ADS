const usuario = JSON.parse(localStorage.getItem("usuario"));

if (!usuario) {
    window.location.href = "login.html";
};

// Mostra o nome do usuário no header
document.getElementById("nome-usuario").textContent = `Olá, ${usuario.nome}`;

const listaAreas = document.getElementById("lista-areas");
const materiasContainer = document.getElementById("materias-container");
let areaSelecionada = areas[0].nome;

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
      renderizarSidebar();
      renderizarMaterias();
      renderizarDestaques();
    });

    listaAreas.appendChild(botao);
  });
};
renderizarSidebar();
renderizarMaterias();

function renderizarMaterias() {
  materiasContainer.innerHTML = "";
  const area = areas.find((a) => a.nome === areaSelecionada);

  area.materias.forEach((materia) => {
    const materiaDiv = document.createElement("div");
    materiaDiv.classList.add("materia-card");

    const materiaTitulo = document.createElement("h3");
    materiaTitulo.textContent = materia.nome;
    materiaDiv.appendChild(materiaTitulo);
    materiasContainer.appendChild(materiaDiv);
  });
};

const destaquesContainer = document.getElementById("destaques-container");
function renderizarDestaques() {
  destaquesContainer.innerHTML = "";

  const areaAtual = areas.find((a) => a.nome === areaSelecionada);
  const materiaContinuar = areaAtual.materias[0];

  const ultimaArea = areas[areas.length - 1];
  const materiaSugestao = ultimaArea.materias[0];

  const cardContinuar = document.createElement("div");
  cardContinuar.classList.add("destaque-card");
  cardContinuar.innerHTML = `<p class="destaque-label">Continuar de onde parou</p><h3>${materiaContinuar.nome}</h3>`;

  const cardSugestao = document.createElement("div");
  cardSugestao.classList.add("destaque-card");
  cardSugestao.innerHTML = `<p class="destaque-label">Sugestão da semana</p><h3>${materiaSugestao.nome}</h3>`;

  destaquesContainer.appendChild(cardContinuar);
  destaquesContainer.appendChild(cardSugestao);
}
renderizarDestaques();