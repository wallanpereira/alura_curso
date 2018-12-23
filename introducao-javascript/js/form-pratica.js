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

    //Validação paciente
    var erros = validaPaciente(paciente);
    console.log(erros);
    /**
     * No momento de chamarmos a função validaPaciente(paciente), extrairemos o retorno da função para a variável erro.
     * Se o tamanho da String for maior que 0, significa que ocorreu algum erro.
     */
    if (erros.length > 0) {
        exibirMensagemErro(erros);
        return;
    }

    //Criar tabelas
    var tabelaPaciente = document.querySelector('#tabela-pacientes');
    tabelaPaciente.appendChild(pacienteTr);

    form.reset();

});


function exibirMensagemErro(erros) {
    var ul = document.querySelector('.mensagem-erro');
    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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
    pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montarTd(dado, classe) {
    var coluna = document.createElement('td');
    coluna.textContent = dado;
    coluna.classList.add(classe);

    return coluna;
}
/**
 * Metodo validaPeso(x) sendo chamado do calculo-imc.js
 * 
 */
function validaPaciente(paciente) {

    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura é inválida!');

    }
    if (!validaPeso(paciente.peso)) {
        erros.push('Peso é inválido!');
    }

    if (paciente.gordura.length == 0) {
        erros.push('A gordura não pode ficar em Branco!');
    }

    if (paciente.altura.length == 0) {
        erros.push('A altura não pode ficar em Branco!');
    }

    if (paciente.peso.length == 0) {
        erros.push('O peso não pode ficar em Branco!');
    }

    return erros;
}