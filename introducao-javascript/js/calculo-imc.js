// Alterar o título da página
var tituloHeader = document.querySelector('.titulo');
document.querySelector('.titulo').textContent = 'Aparecida Nutricionista';

// primeiro-paciente
// var primeiroPaciente = document.querySelector('#primeiro-paciente td:nth-child(2)');

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var altura = paciente.querySelector('.info-altura').textContent;

    var peso = paciente.querySelector('.info-peso').textContent;

    /**
     * Inicio Lógica para exibir o IMC abaixo
     *  .classList, que como o nome indica nos mostras classes que aquele HTML tem.
     **/

    if (!validaPeso(peso)) {
        paciente.querySelector('.info-imc').textContent = "Peso invalido!";
        paciente.classList.add('paciente-invalido');
    }

    if (!validaAltura(altura)) {
        paciente.querySelector('.info-imc').textContent = "Altura invalida!";
        paciente.classList.add('paciente-invalido');
    }

    if (validaAltura(altura) && validaPeso(peso)) {
        var imc = calcularImc(peso, altura); //  100 / 2.00 * 2.00

        // Jogar valor do imc na tabela
        paciente.querySelector('.info-imc').textContent = imc;
    }
    // Fim  Lógica para exibir o IMC abaixo
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2); // toFixed defini quantidade de casas decimais
}

function validaPeso(peso) {
    if (peso <= 0 || peso >= 500) {
        return false;
    } else {
        return true;
    }
}

function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.00) {
        return false;
    } else {
        return true;
    }
}