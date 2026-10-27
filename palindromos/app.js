// Retira os espaços usando apenas for e if.
function normalizar(texto) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            resultado += texto[i];
        }
    }
    return resultado;
}

function verificar() {
    const texto = normalizar(document.getElementById("texto").value);
    const tipo = document.getElementById("tipo").value;
    const saida = document.getElementById("resultado");
    const array = [];

    if (texto === "") {
        saida.textContent = "Digite uma palavra, frase, número ou array.";
        return;
    }

    if (tipo === "array") {
        let elemento = "";
        // Monta cada elemento até encontrar uma vírgula ou chegar ao fim.
        for (let i = 0; i <= texto.length; i++) {
            if (i === texto.length || texto[i] === ",") {
                if (elemento === "") {
                    saida.textContent = "Digite um valor entre as vírgulas.";
                    return;
                }
                array[array.length] = elemento;
                elemento = "";
            } else {
                elemento += texto[i];
            }
        }
    } else {
        // Guarda cada letra em uma posição do array.
        for (let i = 0; i < texto.length; i++) {
            array[i] = texto[i];
        }
    }

    const pilha = new Pilha();
    for (let i = 0; i < array.length; i++) {
        pilha.empilhar(array[i]);
    }

    let ehPalindromo = true;
    let original = "";
    let invertido = "";

    // Compara cada elemento com o topo e depois remove o topo.
    for (let i = 0; i < array.length; i++) {
        const elemento = pilha.acessar();
        if (array[i] !== elemento) {
            ehPalindromo = false;
        }
        if (i > 0) {
            original += ", ";
            invertido += ", ";
        }
        original += array[i];
        invertido += elemento;
        pilha.desempilhar();
    }

    let mensagem = "";
    if (ehPalindromo) {
        mensagem = "É palíndromo.\n";
    } else {
        mensagem = "Não é palíndromo.\n";
    }
    mensagem += "Array original: [" + original + "]\n";
    mensagem += "Array invertido pela pilha: [" + invertido + "]\n";
    mensagem += "Tamanho: " + array.length;
    saida.textContent = mensagem;
}

function limparTela() {
    document.getElementById("texto").value = "";
    document.getElementById("resultado").textContent = "";
}

// Esta pilha guarda os elementos adicionados pelos botões.
const pilhaDaTela = new Pilha();

function adicionarElemento() {
    const campo = document.getElementById("elemento");
    const elemento = normalizar(campo.value);
    const saida = document.getElementById("resultadoPilha");
    if (elemento === "") {
        saida.textContent = "Digite um elemento para adicionar.";
        return;
    }
    pilhaDaTela.empilhar(elemento);
    saida.textContent = "Elemento adicionado. Topo: " + elemento;
    campo.value = "";
}

function consultarTopo() {
    const elemento = pilhaDaTela.acessar();
    const saida = document.getElementById("resultadoPilha");
    if (elemento === null) {
        saida.textContent = "Pilha vazia!";
    } else {
        saida.textContent = "Topo: " + elemento;
    }
}

function removerElemento() {
    const elemento = pilhaDaTela.acessar();
    const saida = document.getElementById("resultadoPilha");
    if (elemento === null) {
        saida.textContent = "Pilha vazia!";
    } else {
        pilhaDaTela.desempilhar();
        saida.textContent = "Elemento removido: " + elemento;
    }
}
