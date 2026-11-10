const API_URL = "http://localhost:3000";

function sair() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("token");
  window.location.replace("login.html");
}

async function verificarSessao() {
  const token = localStorage.getItem("token");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!token || !usuario) {
    sair();
    return;
  }

  try {
    const response = await fetch(`${API_URL}/usuarios/${usuario.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 401 || response.status === 403) {
      sair();
    }
  } catch (erro) {
    // servidor fora do ar: não derruba a sessão, só ignora
  }
}

verificarSessao();