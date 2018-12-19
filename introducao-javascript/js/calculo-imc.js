// Alterar o título da página
var tituloHeader = document.querySelector('.titulo');
document.querySelector('.titulo').textContent = 'Aparecida Nutricionista';

// primeiro-paciente
// var primeiroPaciente = document.querySelector('#primeiro-paciente td:nth-child(2)');

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    // Inicio  Lógica para exibir o IMC abaixo
    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 500) {
        paciente.querySelector('.info-imc').textContent = "Peso invalido!";
        pesoEhValido = false;
        paciente.classList.add('paciente-invalido');
        /* .classList, que como o nome indica nos mostras classes que aquele HTML tem. */
    }

    if (altura <= 0 || altura >= 3.00) {
        paciente.querySelector('.info-imc').textContent = "Altura invalida!";
        alturaEhValido = false;
        paciente.classList.add('paciente-invalido');
    }

    if (pesoEhValido && alturaEhValido) {
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