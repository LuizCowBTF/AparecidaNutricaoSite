var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = document.querySelector(".info-peso");
    var tdAltura = document.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    var tdIMC = paciente.querySelector(".info-imc");

    if (!pesoValido) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add(paciente - invalido);
    }

    if (!alturaValido) {
        console.log("Altura inválida!");
        alturaValido = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add(paciente - invalido);
    }

    if (alturaValido && pesoValido) {
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 250) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    }
    else {
        return false;
    }
}

function calculaIMC(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
