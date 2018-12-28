var pacientes = document.querySelectorAll('.paciente');

console.log(paciente);

pacientes.forEach(function (paciente) {
    paciente.addEventListener('dblclick', function () {
        console.log('Fui clicado duas vezes !!!');
        this.remove();
        console.log('Você removeu um paciente!')
    })
})