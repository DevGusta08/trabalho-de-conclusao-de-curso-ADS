const API_URL = "http://localhost:3000";

const formLogin = document.getElementById("form-login");
const erroLogin = document.getElementById("erro-login");

formLogin.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  erroLogin.textContent = "";

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const dados = await response.json();

    if (!response.ok) {
      erroLogin.textContent = dados.error || "Erro ao entrar.";
      return;
    }

    // login deu certo -> guarda o usuário e redireciona pro dashboard
    localStorage.setItem("usuario", JSON.stringify(dados.usuario));
    window.location.href = "dashboard.html";
  } catch (erro) {
    erroLogin.textContent = "Não foi possível conectar ao servidor.";
  }
});