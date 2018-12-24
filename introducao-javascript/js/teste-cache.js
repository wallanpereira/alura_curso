function autoSaveRadioSelection(radioname) {
    //Carrega o valor salvo
    var selectedValue = localStorage.getItem(radioname);
    //Busca os radio boxes
    var radioboxes = document.getElementsByName(radioname);

    function saveStatus() {
        //Grava o valor do radio selecionado
        localStorage.setItem(this.name, this.value);
    };

    //Navega pelos radios existentes
    for (var i = 0; i < radioboxes.length; i++) {
        radio = radioboxes[i];
        //vincula o evento de alteração a função que salva o valor
        radio.onchange = saveStatus;
        //Marca ou não o radio comparando seu valor com o valor salvo
        radio.checked = selectedValue == radio.value;
    };
}

autoSaveRadioSelection('test');

var btnTeste = document.getElementsByName('test');