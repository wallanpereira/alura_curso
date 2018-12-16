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
    }

    if (altura <= 0 || altura >= 3.00) {
        paciente.querySelector('.info-imc').textContent = "Altura invalida!";
        alturaEhValido = false;
        paciente.classList.add('paciente-invalido');
    }

    if (pesoEhValido && alturaEhValido) {
        var imc = peso / (altura * altura); //  100 / 2.00 * 2.00

        // Jogar valor do imc na tabela
        paciente.querySelector('.info-imc').textContent = imc.toFixed(2); // toFixed defini quantidade de casas decimais
    }
    // Fim  Lógica para exibir o IMC abaixo
}

/* simple escuta de click no titulo
function mostrarMsg(){
    console.log('Fui clicado!');
}

tituloHeader.addEventListener("click", mostrarMsg);
*/

// ==================================================================================================
// ==================================================================================================

// Eventos de clique

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    console.log('Oi eu sou o botao e fui clicado');

    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);

    var pacienteTr = document.createElement('tr'); // TR
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

});








/* Simple botão de copiar para outro campo automaticamente

var inputFrase = document.querySelector('.frase');
var botao = document.querySelector('.botao');
var copia = document.querySelector('.copia');

function botaoHandler(){
    copia.textContent = inputFrase.value;
    inputFrase.value = '';
}

botao.addEventListener('click',botaoHandler);

*/