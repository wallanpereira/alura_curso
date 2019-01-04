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
        // Console abaixo retorna os dados de texto da API
        // console.log(xhr.responseText);
        var resposta = xhr.responseText;
        // Console abaixo retorna o tipo da variavel
        console.log(typeof resposta);

        /** 
         * JSON.parse() converte o dados da requisção em um objeto javascript. 
         * Para conseguirmos transformar a resposta, que é um texto(uma string), em um array de pacientes, usaremos um "transformador", mais precisamente um parseador de JSON para objetos do JavaScript.Para realizarmos esta tarefa usaremos o método parse().Assim, receberemos o texto em JSON, que depois será parseado.Em seguida, será retornado um objeto JavaScript.Como nossa resposta se parece com um objeto, o método entenderá isso e nos retornará um array do objetos: 
         * 
         */
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        // Console abaixo retorna tipo da variavel pacientes ( object )
        console.log(typeof pacientes);
    });

    xhr.send();
});