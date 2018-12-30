var pacientes = document.querySelectorAll('.paciente');

// var tabela = document.querySelector('#tabela-pacientes');
var tabela = document.querySelector('table');

tabela.addEventListener('click', function (event) {
    var alvoEvento = event.target;
    var paiAlvo = paiAlvo.alvoEvento;
    paiAlvo.remove();
    // console.log('Fui clicado!!!');
    // console.log(event.target);

    // Retorna o elemento pai, ou seja, o que estiver na variavel tabela.
    // console.log(this);

    // Remove a célula clicada, movendo de sua direita para esquerda.
    // event.target.remove();
})

// pacientes.forEach(function (paciente) {
//     paciente.addEventListener('dblclick', function () {
//         console.log('Fui clicado duas vezes !!!');
//         this.remove();
//         console.log('Você removeu um paciente!')
//     })
// })