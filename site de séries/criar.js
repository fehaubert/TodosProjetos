const nome = document.getElementById("nome");
const data = document.getElementById("data");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const botao = document.querySelector(".botao");

botao.addEventListener("click", function () {
    let confirma = document.getElementById("confirma")
    if (nome.value === "" || data.value === "" || email.value === "" || senha.value === "" || confirma.value === "") {
        alert("Preencha todos os campos com suas informações.");
    } else if (senha.value === confirma.value) {

        window.localStorage.setItem("nome", nome.value)
        window.localStorage.setItem("data", data.value)
        window.localStorage.setItem("email", email.value)
        window.localStorage.setItem("senha", senha.value)

        window.location.href = "cadastro.html"
    } else {
        alert("Usuário ou senha não correspondem")
    }
})