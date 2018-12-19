// Evento de clique

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();


    //Pegar classes filhas do form
    var form = document.querySelector('#form-adiciona');

    //Trazendo valores dos inputs
    var paciente = obterFormPaciente(form);
    //montar tr e td
    var pacienteTr = montarTr(paciente);

    //Criar tabelas
    var tabelaPaciente = document.querySelector('#tabela-pacientes');
    tabelaPaciente.appendChild(pacienteTr);

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

function montarTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));

    return pacienteTr;
}

function montarTd(dado, classe) {
    var coluna = document.createElement('td');
    coluna.textContent = dado;
    coluna.classList.add(classe);

    return coluna;
}