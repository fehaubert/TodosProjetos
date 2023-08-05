const email = document.getElementById("email");
const senha = document.getElementById("senha");

const botao = document.querySelector(".botao");

botao.addEventListener("click", function () {
    let senhasalva = window.localStorage.getItem("senha")
    let usuariosalvo = window.localStorage.getItem("email")
    if (email.value === "" || senha.value === "") {
        alert("Preencha todos os campos com suas informações.");
    } else if (senha.value === senhasalva && email.value === usuariosalvo) {
        window.location.href = "index.html"
    } else {
        alert("Usuário ou senha não correspondem")
    }
})