var btnAdicionar = document.querySelector('#buscar-paciente');

btnAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Buscando pacientes!");
    //    https://api-pacientes.herokuapp.com/pacientes

    /**O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP.
     *  O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML,
     *  no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.
     */
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function () {
        console.log(xhr.responseText);
    });

    xhr.send();
});