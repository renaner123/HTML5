function mudaFoto (foto){
    document.getElementById("icone").src = foto;
}

function calc_total(){
    var quantidade = document.getElementById("cQuantidade");
    var total = document.getElementById("cPreco");
    var valoroculos = 1300;

    var qtd = parseInt(quantidade.value);

    total.value = qtd*valoroculos;

}