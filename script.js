// Ano automático
document.getElementById("ano").innerText = new Date().getFullYear();

// Validação do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const erros = document.querySelectorAll(".erro");

  erros.forEach(e => e.innerText = "");
  document.getElementById("sucesso").innerText = "";

  let valido = true;

  if (nome.value.trim() === "") {
    erros[0].innerText = "Nome obrigatório";
    valido = false;
  }

  if (!email.value.includes("@")) {
    erros[1].innerText = "Email inválido";
    valido = false;
  }

  if (mensagem.value.trim() === "") {
    erros[2].innerText = "Mensagem obrigatória";
    valido = false;
  }

  if (valido) {
    document.getElementById("sucesso").innerText =
      "Mensagem enviada com sucesso!";
    this.reset();
  }
});