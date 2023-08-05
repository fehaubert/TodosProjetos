const nome = document.getElementById("nome");
const data = document.getElementById("data");

const botao = document.querySelector(".botao");

botao.addEventListener("click", function () {
    let nomesalvo = window.localStorage.getItem("nome")
    let datasalvo = window.localStorage.getItem("data")
    if (nome.value === "" || data.value === "") {
        alert("Preencha todos os campos com suas informações.");
    } else if (nome.value === nomesalvo && data.value === datasalvo) {
        window.location.href = "senha.html"
    } else {
        alert("Nome ou data não correspondem")
    }
})