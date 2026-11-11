// ===== Etapa 1: subtópicos =====
// Cada "artigo" abre um subtópico; os vídeos/livros seguintes pertencem a ele.
function getSubtopicos(materia) {
  const subtopicos = [];
  let atual = null;

  materia.recomendacoes.forEach((item) => {
    if (item.tipo === "artigo") {
      atual = {
        id: `${materia.nome}::${item.titulo}`,
        titulo: item.titulo.replace(/^Artigo:\s*/, ""),
        itens: [item],
      };
      subtopicos.push(atual);
    } else if (atual) {
      atual.itens.push(item);
    }
  });

  return subtopicos;
}

// Itens que vêm antes do primeiro artigo (ex.: a playlist da matéria)
function getItensGerais(materia) {
  const itens = [];
  for (const item of materia.recomendacoes) {
    if (item.tipo === "artigo") break;
    itens.push(item);
  }
  return itens;
}

// ===== Etapa 2: progresso =====
function chaveProgresso() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  return usuario ? `progresso_v2_${usuario.id}` : null;
}

// Formato salvo: { idDoSubtopico: "AAAA-MM-DD" }
function getProgresso() {
  const chave = chaveProgresso();
  if (!chave) return {};
  try {
    return JSON.parse(localStorage.getItem(chave)) || {};
  } catch {
    return {};
  }
}

function salvarProgresso(progresso) {
  const chave = chaveProgresso();
  if (chave) localStorage.setItem(chave, JSON.stringify(progresso));
}

// Data local (AAAA-MM-DD). Não usa toISOString() para evitar o erro de fuso (UTC).
function dataHoje() {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mes}-${dia}`;
}

function estaConcluido(id) {
  return id in getProgresso();
}

function marcarSubtopico(id) {
  const progresso = getProgresso();
  if (!(id in progresso)) {
    progresso[id] = dataHoje();
    salvarProgresso(progresso);
  }
}

function desmarcarSubtopico(id) {
  const progresso = getProgresso();
  delete progresso[id];
  salvarProgresso(progresso);
}

// Todas retornam { feitos, total, percentual }
function progressoDaMateria(materia, progresso = getProgresso()) {
  const subtopicos = getSubtopicos(materia);
  const feitos = subtopicos.filter((s) => s.id in progresso).length;
  const total = subtopicos.length;
  return { feitos, total, percentual: total ? Math.round((feitos / total) * 100) : 0 };
}

function progressoDaArea(area, progresso = getProgresso()) {
  let feitos = 0;
  let total = 0;
  area.materias.forEach((m) => {
    const p = progressoDaMateria(m, progresso);
    feitos += p.feitos;
    total += p.total;
  });
  return { feitos, total, percentual: total ? Math.round((feitos / total) * 100) : 0 };
}

function progressoGeral(progresso = getProgresso()) {
  let feitos = 0;
  let total = 0;
  areas.forEach((a) => {
    const p = progressoDaArea(a, progresso);
    feitos += p.feitos;
    total += p.total;
  });
  return { feitos, total, percentual: total ? Math.round((feitos / total) * 100) : 0 };
}