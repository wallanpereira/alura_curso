// Eventos de clique

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    // Variavel pegar campo formulario paciente
    var form = document.querySelector('#form-adiciona');
    // Extraindo informações do paciente do form
    var paciente = obterFormPaciente(form);

    // Criar a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    // Criando nossa tr com as td na tabela
    var tabelaPaciente = document.querySelector('#tabela-pacientes');
    tabelaPaciente.appendChild(pacienteTr);

    form.reset();
});

function obterFormPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


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