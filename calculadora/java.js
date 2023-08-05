
var operacao = ''
var conta = 0

var zero = document.querySelector("#zero");
var um = document.querySelector("#um");
var dois = document.querySelector("#dois");
var tres = document.querySelector("#tres");
var quatro = document.querySelector("#quatro");
var cinco = document.querySelector("#cinco");
var seis = document.querySelector("#seis");
var sete = document.querySelector("#sete");
var oito = document.querySelector("#oito");
var nove = document.querySelector("#nove");
var mais = document.querySelector("#mais");
var menos = document.querySelector("#menos");
var multi = document.querySelector("#multi");
var divisao = document.querySelector("#divisao");
var raiz = document.querySelector("#raiz");
var igual = document.querySelector("#igual");


zero.addEventListener("click", function (event){
    document.querySelector("#Visor").value += "0";

});

um.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "1";

});

dois.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "2";

});

tres.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "3";

});

quatro.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "4";

});

cinco.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "5";

});

seis.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "6";

});

sete.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "7";

});

oito.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "8";

});

nove.addEventListener("click", function(event){
    document.querySelector("#Visor").value += "9";

});

mais.addEventListener("click", function (event) {
    numero = parseFloat(document.querySelector("#Visor").value) 
    operacao = "+";
    document.querySelector("#Visor").value = "";

});

menos.addEventListener("click", function(event){
    numero = parseFloat(document.querySelector("#Visor").value)
    operacao = '-'
    document.querySelector("#Visor").value = "";

});

multi.addEventListener("click", function(event){
    numero = parseFloat(document.querySelector("#Visor").value)
    operacao = '*'
    document.querySelector("#Visor").value = "";

});

divisao.addEventListener("click", function(event){
    numero = parseFloat(document.querySelector("#Visor").value)
    operacao = '/'
    document.querySelector("#Visor").value = "";

});

raiz.addEventListener("click", function(event){
    numero = parseFloat(document.querySelector("#Visor").value)
    operacao = '√'
    document.querySelector("#Visor").value = "";

});

igual.addEventListener("click", function (event) {
    visor = parseFloat(document.querySelector("#Visor").value);
    if (operacao == '+') {
        document.querySelector("#Visor").value=numero+visor;
    }

    if (operacao == '-') {
        document.querySelector("#Visor").value=numero-visor;
    }

    if (operacao == '/') {
        document.querySelector("#Visor").value=numero/visor;
    }

    if (operacao == '*') {
        document.querySelector("#Visor").value=numero*visor;
    }

    if (operacao == '√') {
        document.querySelector("#Visor").value=Math.sqrt(numero);
    }
});

    