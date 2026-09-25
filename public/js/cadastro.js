const API_URL = "http://localhost:3000";

const formCadastro = document.getElementById("form-cadastro");
const erroCadastro = document.getElementById("erro-cadastro");

formCadastro.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  erroCadastro.textContent = "";

  if (senha !== confirmarSenha) {
    erroCadastro.textContent = "As senhas não coincidem.";
    return;
  }

  try {
    const response = await fetch(`${API_URL}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha }),
    });

    if (!response.ok) {
      const erro = await response.json();
      erroCadastro.textContent = erro.error || "Erro ao cadastrar.";
      return;
    }

    window.location.href = "login.html";
  } catch (erro) {
    erroCadastro.textContent = "Não foi possível conectar ao servidor.";
  }
});