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
        console.log(xhr.status)
        if (xhr.status == 200) {
            // Console abaixo retorna os dados de texto da API
            // console.log(xhr.responseText);
            var resposta = xhr.responseText;
            // Console abaixo retorna o tipo da variavel
            console.log(typeof resposta);

            /** 
             * JSON.parse() converte o dados da requisção em um objeto javascript. Usando parse() passaremos para texto. 
             */
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            // Console abaixo retorna tipo da variavel pacientes ( object )
            console.log(typeof pacientes);

            /**
             * Isto é, a função já montava um paciente, verificava os erros, e o adicionava na tabela.Nós poderemos chamar a função adicionaPacienteNaTabela() - com todas as ações mencionadas - , ou podemos aproveitá - la para adicionarmos os pacientes recebidos.No arquivo buscar - pacientes.js, adicionaremos adicionaPacienteNaTabela(), que por enquanto só inclui um paciente.No entanto, teremos um array com vários deles.Logo, iremos iterar pelo array usando o forEach(), e adicionaremos cada paciente contido nele.
             */
            pacientes.forEach(function (paciente) {
                adicionarPacientesTabela(paciente);
            });
        } else {
            // Caso ter algum erro no servidor mostra a mensagem
            console.log(xhr.status);
            // Selecionar class erro-ajax e invisivel da mensagem de erro e adicionar a uma variavel para tratar a mensagem.
            var erroAjax = document.querySelector('.erro-ajax.invisivel');
            erroAjax.classList.remove('invisivel');
        }
    });

    xhr.send();
});