var button = document.querySelector("#gerar");
var nome = '';
var img = document.querySelector("#img");
var foto = document.querySelector("#foto");

button.addEventListener("click", function (event) {
    numero = parseInt(Math.random() * 4);
    nome = document.querySelector('#input').value;

    if (numero == 0) {
        document.querySelector("#texto").textContent = 'Parabéns, ' + nome + ', agora você faz parte da Sonserina!';
        img.src = "sonserina.png";
        foto.appendChild(img);
    }

    else if (numero == 1) {
        document.querySelector("#texto").textContent = 'Parabéns, ' + nome + ', agora você faz parte da Grifinória!';
        img.src = "grifinoria.png"
        foto.appendChild(img);
    }

    else if (numero == 2) {
        document.querySelector("#texto").textContent = 'Parabéns, ' + nome + ', agora você faz parte da Lufa-lufa!';
        img.src = "lufalufa.png";
        foto.appendChild(img);
    }

    else if (numero == 3) {
        document.querySelector("#texto").textContent = 'Parabéns, ' + nome + ', agora você faz parte da Corvinal!';
        img.src = "corvinal.png";
        foto.appendChild(img);
    }

});