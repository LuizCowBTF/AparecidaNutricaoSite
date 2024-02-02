var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = document.querySelector(".info-peso");
var tdAltura = document.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");


var pesoValido = true;
var alturaValido = true;

if(peso <= 30 || peso >= 200) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdIMC.textContent = "Peso inválido";
}

if(altura <= 0.50 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaValido = false;
    tdIMC.textContent = "Altura inválida";
}

if(alturaValido && pesoValido) {
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc;
}


