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
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    console.log(pacienteTr);

    var tabelaPaciente = document.querySelector('#tabela-pacientes');


    console.log(pacienteTr);

    var tabelaPaciente = document.querySelector('#tabela-pacientes');

    tabelaPaciente.appendChild(pacienteTr);
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