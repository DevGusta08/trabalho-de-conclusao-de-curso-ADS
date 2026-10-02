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

if (!usuario) {
  window.location.replace("login.html");
} else if (!materia) {
  window.location.replace("dashboard.html");
} else {
  document.getElementById("materia-nome").textContent = materia.nome;
  document.getElementById("materia-area").textContent = area.nome;

    const tipos = [
    { chave: "video", nome: "Vídeos" },
    { chave: "artigo", nome: "Artigos" },
    { chave: "livro", nome: "Livros" },
  ];
  const recomendacoesContainer = document.getElementById("recomendacoes-container");

  tipos.forEach((tipo) => {
    const itens = materia.recomendacoes.filter((r) => r.tipo === tipo.chave);
    if (itens.length === 0) return;

    const grupo = document.createElement("div");
    grupo.classList.add("recomendacao-grupo");

    const tituloGrupo = document.createElement("h2");
    tituloGrupo.classList.add("recomendacao-grupo-titulo");
    tituloGrupo.textContent = tipo.nome;
    grupo.appendChild(tituloGrupo);

    itens.forEach((item) => {
      const card = document.createElement("a");
      card.classList.add("recomendacao-card");
      card.href = item.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";

      const titulo = document.createElement("h3");
      titulo.textContent = item.titulo;

      card.appendChild(titulo);
      grupo.appendChild(card);
    });

    recomendacoesContainer.appendChild(grupo);
  });
}

window.addEventListener("pageshow", () => {
  if (!localStorage.getItem("usuario")) {
    window.location.replace("login.html");
  }
});