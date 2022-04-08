var criterios = 0;
var split = 0;
var entao = 0;
var campoAlvo;

var custo = 8
var imposto = 2
var outros = 0
var lucro = 0

var decremento = 0
var incremento = 0

url = "http://192.168.0.111/zapgestor/";


// Função para remover acentos
function remover_acentos(str) {
    return str.normalize("NFD").replace(/[^a-zA-Zs-]/g, "");
}

function selecAll(parametro) {
    return document.querySelectorAll(parametro)
}

function selec(parametro) {
    return document.querySelector(parametro)
}

function ifNull(input){
    if (input == '' || input == null || input == undefined || input == 'undefined') {
        return true;
    }
}

function selecValues(alvo){
    let inputs = selecAll(alvo);
    let dados = {};
    let vazio = false;

    // percorrer os inputs e verificar se estão vazios
    inputs.forEach((input) => {
        if (ifNull(input.value)) {
            alerta('Preencha todos os campos!', 'error');
            vazio = true;
        }
        else {
            dados[input.name] = input.value;
        }
    });

    if(vazio){
        return false;
    }
    return dados;
}