const usuario = JSON.parse(localStorage.getItem("usuario"));

const params = new URLSearchParams(window.location.search);
const nomeMateria = params.get("materia");

let materia = null;
let area = null;

areas.forEach((a) => {
  const encontrada = a.materias.find((m) => m.nome === nomeMateria);
  if (encontrada) {
    materia = encontrada;
    area = a;
  }
});

const NOMES_TIPO = { video: "Vídeo", artigo: "Artigo", livro: "Livro" };

function criarLink(item) {
  const link = document.createElement("a");
  link.classList.add("recomendacao-card");
  link.href = item.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const tipo = document.createElement("span");
  tipo.classList.add("recomendacao-tipo");
  tipo.textContent = NOMES_TIPO[item.tipo] || item.tipo;

  const titulo = document.createElement("h3");
  titulo.textContent = item.titulo.replace(/^(Artigo|Vídeos sobre|Livros sobre):\s*/, "");

  link.append(tipo, titulo);
  return link;
}

function atualizarBarra() {
  const p = progressoDaMateria(materia);
  document.getElementById("materia-progresso-texto").textContent =
    `${p.feitos} de ${p.total} subtópicos estudados (${p.percentual}%)`;
  document.getElementById("materia-progresso-barra").style.width = `${p.percentual}%`;
}

function criarSubtopico(sub) {
  const bloco = document.createElement("article");
  bloco.classList.add("subtopico");
  const jaFeito = sub.id in getProgresso();
  if (jaFeito) bloco.classList.add("estudado");

  const cabecalho = document.createElement("div");
  cabecalho.classList.add("subtopico-cabecalho");

  const titulo = document.createElement("h2");
  titulo.textContent = sub.titulo;

  const label = document.createElement("label");
  label.classList.add("subtopico-check");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = jaFeito;

  const textoCheck = document.createElement("span");
  textoCheck.textContent = "Estudei";

  label.append(checkbox, textoCheck);
  cabecalho.append(titulo, label);

  const links = document.createElement("div");
  links.classList.add("subtopico-links");
  sub.itens.forEach((item) => links.appendChild(criarLink(item)));

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      marcarSubtopico(sub.id);
    } else {
      desmarcarSubtopico(sub.id);
    }
    bloco.classList.toggle("estudado", checkbox.checked);
    atualizarBarra();
  });

  bloco.append(cabecalho, links);
  return bloco;
}

if (!usuario) {
  window.location.replace("login.html");
} else if (!materia) {
  window.location.replace("dashboard.html");
} else {
  document.getElementById("materia-nome").textContent = materia.nome;
  document.getElementById("materia-area").textContent = area.nome;

  // Guarda a última matéria aberta (será usada no card "Continuar de onde parou")
  localStorage.setItem(`ultima_materia_${usuario.id}`, materia.nome);

  // Itens gerais (ex.: playlist da matéria), se existirem
  const gerais = getItensGerais(materia);
  if (gerais.length > 0) {
    const geraisContainer = document.getElementById("gerais-container");
    gerais.forEach((item) => geraisContainer.appendChild(criarLink(item)));
    document.getElementById("gerais-secao").hidden = false;
  }

  const subtopicosContainer = document.getElementById("subtopicos-container");
  getSubtopicos(materia).forEach((sub) => {
    subtopicosContainer.appendChild(criarSubtopico(sub));
  });

  atualizarBarra();
}

window.addEventListener("pageshow", () => {
  if (!localStorage.getItem("usuario")) {
    window.location.replace("login.html");
  }
});