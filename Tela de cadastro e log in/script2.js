const usuario = document.getElementById("email");
const senha = document.getElementById("senha");

const botao = document.querySelector(".submit");

botao.addEventListener("click", function () {
    let senhasalva = window.localStorage.getItem("senha")
    let usuariosalvo = window.localStorage.getItem("email")

    if (senha.value === senhasalva && usuario.value === usuariosalvo) {
        window.location.href = "index3.html"
    } else {
        alert("Usuário ou senha não correspondem")
    }
})