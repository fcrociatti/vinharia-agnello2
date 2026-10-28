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

// estoque e classificação
function verificarEstoque(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    let idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

// mostrar no console
function mostrarVinho(numero, nome, tipo, safra, quantidade) {
    console.log("===== VINHO " + numero + " =====");
    console.log("Nome do vinho: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Idade do vinho: " + (anoAtual - safra) + " ano(s)");
    console.log("Classificação: " + classificarVinho(safra));
    console.log("Quantidade em estoque: " + quantidade);

    if (verificarEstoque(quantidade)) {
        console.log("Estoque baixo!");
    }
}

// salva o vinho na variável certa
function salvarVinho(numero, nome, tipo, safra, quantidade) {
    switch (numero) {
        case 1:
            nome1 = nome; tipo1 = tipo; safra1 = safra; quant1 = quantidade;
            break;
        case 2:
            nome2 = nome; tipo2 = tipo; safra2 = safra; quant2 = quantidade;
            break;
        case 3:
            nome3 = nome; tipo3 = tipo; safra3 = safra; quant3 = quantidade;
            break;
        case 4:
            nome4 = nome; tipo4 = tipo; safra4 = safra; quant4 = quantidade;
            break;
        case 5:
            nome5 = nome; tipo5 = tipo; safra5 = safra; quant5 = quantidade;
            break;
    }
}

// cadastro
function cadastrarVinho() {
    let nome = validarNome();
    let tipo = validarTipo();
    let safra = validarNumero("Digite a safra do vinho (ano):", 1900, anoAtual);
    let quantidade = validarNumero("Digite a quantidade em estoque:", 0, 1000);

    cadastros++;
    salvarVinho(cadastros, nome, tipo, safra, quantidade);

    if (verificarEstoque(quantidade)) {
        estoqueBaixo++;
    }

    if (cadastros == 1 || safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        nomeMaisAntigo = nome;
    }

    alert("Cadastro realizado! Veja os detalhes do vinho no console.");
    mostrarVinho(cadastros, nome, tipo, safra, quantidade);
}

// resumo final
function mostrarResumo() {
    alert("A seguir, veja todos os vinhos cadastrados e o resumo no console.");

    for (let i = 1; i <= cadastros; i++) {
        switch (i) {
            case 1: mostrarVinho(1, nome1, tipo1, safra1, quant1); break;
            case 2: mostrarVinho(2, nome2, tipo2, safra2, quant2); break;
            case 3: mostrarVinho(3, nome3, tipo3, safra3, quant3); break;
            case 4: mostrarVinho(4, nome4, tipo4, safra4, quant4); break;
            case 5: mostrarVinho(5, nome5, tipo5, safra5, quant5); break;
        }
    }

    console.log("===== RESUMO =====");
    console.log("Cadastros feitos: " + cadastros);
    console.log("Vinhos com estoque baixo: " + estoqueBaixo);
    console.log("Vinho com a safra mais antiga: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")");

    alert(
        "RESUMO\n\n" +
        "Cadastros feitos: " + cadastros + "\n" +
        "Vinhos com estoque baixo: " + estoqueBaixo + "\n" +
        "Safra mais antiga: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")"
    );
}

// inicio do sistema
let continuar;

do {
    cadastrarVinho();

    if (cadastros == 5) {
        alert("Limite de 5 vinhos atingido!");
        continuar = false;
    } else {
        continuar = validarResposta();
    }
} while (continuar);

mostrarResumo();
