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
}