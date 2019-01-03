var pacientes = document.querySelectorAll('.paciente');

// var tabela = document.querySelector('#tabela-pacientes');
var tabela = document.querySelector('table');

tabela.addEventListener('click', function (event) {
    // var eventoAlvo = event.target;
    // var paiAlvo = eventoAlvo.parentNode;
    // paiAlvo.remove(); OU event.target.parentNode.remove();

    if (event.target.tagName == 'TD') {
        // tagName retorna o nome da tag maiúsculo
        event.target.parentNode.classList.add('fadeout');
        setTimeout(function () {
            event.target.parentNode.remove();
        }, 500);
    }


    console.log(event.target.parentNode);

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