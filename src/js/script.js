alert("Bem-vindo ao sistema de Gestão de vinhos da Vinheria Agnello!\nVocê pode cadastrar até 5 vinhos.");

var anoAtual = 2026;

// vinhos
var nome1, tipo1, safra1, quant1;
var nome2, tipo2, safra2, quant2;
var nome3, tipo3, safra3, quant3;
var nome4, tipo4, safra4, quant4;
var nome5, tipo5, safra5, quant5;

var cadastros = 0;
var estoqueBaixo = 0;
var nomeMaisAntigo;
var safraMaisAntiga;

// validações
function validarNome() {
    let nome = prompt("Digite o nome do vinho:");

    while (nome == "") {
        alert("O nome não pode ficar vazio!");
        nome = prompt("Digite o nome do vinho:");
    }

    return nome;
}

function validarTipo() {
    let tipo = "";

    while (tipo == "") {
        let opcao = parseInt(prompt("Digite o tipo do vinho:\n1 - Tinto\n2 - Branco\n3 - Rosé"));

        switch (opcao) {
            case 1:
                tipo = "Tinto";
                break;
            case 2:
                tipo = "Branco";
                break;
            case 3:
                tipo = "Rosé";
                break;
            default:
                alert("Opção inválida! Digite 1, 2 ou 3.");
        }
    }

    return tipo;
}

function validarNumero(mensagem, minimo, maximo) {
    let numero = parseInt(prompt(mensagem));

    while (isNaN(numero) || numero < minimo || numero > maximo) {
        alert("Número inválido! Digite um valor entre " + minimo + " e " + maximo + ".");
        numero = parseInt(prompt(mensagem));
    }

    return numero;
}

function validarResposta() {
    let resposta = prompt("Deseja cadastrar outro vinho? (S/N)");

    while (resposta != "S" && resposta != "s" && resposta != "N" && resposta != "n") {
        alert("Digite apenas S ou N.");
        resposta = prompt("Deseja cadastrar outro vinho? (S/N)");
    }

    return resposta == "S" || resposta == "s";
}
