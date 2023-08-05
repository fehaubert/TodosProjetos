let texto = document.querySelector("h3");

const senha = window.localStorage.getItem("senha");

texto.textContent = senha;