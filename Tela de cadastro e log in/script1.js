const nome = document.getElementById("nome");
const data = document.getElementById("data");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

const botao = document.querySelector(".submit");

botao.addEventListener("click", function () {
    let confirmasenha = document.getElementById("confirmasenha")
    if (senha.value === confirmasenha.value) {

        window.localStorage.setItem("nome", nome.value)
        window.localStorage.setItem("data", data.value)
        window.localStorage.setItem("email", email.value)
        window.localStorage.setItem("senha", senha.value)

        window.location.href = "index2.html"
    } else {
        alert("Usuário ou senha não correspondem")
    }
})