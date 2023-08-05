let texto = document.querySelector("h2");

const nome = window.localStorage.getItem("nome");

texto.textContent = "Olá, " + nome;