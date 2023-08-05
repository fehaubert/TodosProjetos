const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmasenha = document.getElementById("confirmasenha");
const botao = document.querySelector(".botao");
const esqueceusenha = document.getElementById("esqueceusenha");
const criarconta = document.getElementById("criarconta");
const início = document.getElementById("início");
const playlist = document.getElementById("playlist");

botao.addEventListener("click", function () {
    if (email.value === "" || senha.value === "" || confirmasenha.value === "") {
        alert("Preencha todos os campos com suas informações.");
    } else if (senha.value === confirmasenha.value) {
        window.location.href = "início.html";
    } else {
        alert("Senhas não correspondem");
    }
});

esqueceusenha.addEventListener("click", function () {
    alert("Página em revisão. Tente novamente mais tarde.");
});

criarconta.addEventListener("click", function () {
    alert("Página em revisão. Tente novamente mais tarde.");
});

início.addEventListener("click", function () {
    alert("Entre com seu e-mail e senha para acessar essa página.");
});

playlist.addEventListener("click", function () {
    alert("Entre com seu e-mail e senha para acessar essa página.");
});
