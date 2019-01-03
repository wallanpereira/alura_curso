var campoFiltro = document.querySelector('#filtrar-tabela');

console.log(campoFiltro);

campoFiltro.addEventListener('input', function () {
    console.log(this.value);
    var pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        console.log('Tem algo digitado aqui!');
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            // var tdNome = paciente.querySelector('.info-nome');
            // var nome = tdNome.textContent;
            var nome = paciente.querySelector('.info-nome').textContent;
            var expressao = new
            if (nome != this.value) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
});