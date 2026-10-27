// roteiro para lembrar na prova
// verificar: lê os valores, coloca na pilha e compara com a ordem contrária
// empilhar: topo + 1 e guarda o valor
// acessar: pega o valor do topo sem remover
// desempilhar: topo - 1
// array começa na posição 0 e topo -1 quer dizer pilha vazia

// pega os campos do html pelo id
const campoTexto = document.getElementById("texto");
const campoTipo = document.getElementById("tipo");
const campoElemento = document.getElementById("elemento");
const saida = document.getElementById("resultado");
const saidaPilha = document.getElementById("resultadoPilha");

// cria a pilha que os botões vão usar
let pilha = new Pilha();

// tira os espaços do texto
function retirarEspacos(texto) {
    let resultado = "";
    // length é o tamanho do texto e texto[i] pega uma letra por vez
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            resultado += texto[i];
        }
    }
    return resultado;
}

// verifica se é palíndromo
function verificar() {
    // value pega o valor do campo
    const texto = retirarEspacos(campoTexto.value);
    const tipo = campoTipo.value;
    const array = [];

    if (texto === "") {
        saida.innerHTML = "Digite uma palavra, frase, número ou array.";
        return; // para aqui se estiver vazio
    }

    if (tipo === "array") {
        // exemplo: 10,2,10 fica com 3 elementos no array
        let elemento = "";
        // junta os caracteres até a vírgula ou o fim do texto
        // usa <= para guardar também o último valor
        for (let i = 0; i <= texto.length; i++) {
            // chegou ao fim ou achou uma vírgula
            if (i === texto.length || texto[i] === ",") {
                if (elemento === "") {
                    saida.innerHTML = "Digite um valor entre as vírgulas.";
                    return;
                }
                array[array.length] = elemento; // guarda no fim do array
                elemento = ""; // limpa para pegar o próximo valor
            } else {
                elemento += texto[i];
            }
        }
    } else {
        // coloca cada letra em uma posição do array
        for (let i = 0; i < texto.length; i++) {
            array[i] = texto[i];
        }
    }

    // passo 1: coloca os valores na pilha
    pilha = new Pilha();
    for (let i = 0; i < array.length; i++) {
        pilha.empilhar(array[i]);
    }

    let ehPalindromo = true; // começa como verdadeiro
    let original = "";
    let invertido = "";

    // passo 2: pega do topo e compara com o array
    for (let i = 0; i < array.length; i++) {
        // o último que entrou sai primeiro
        const elemento = pilha.acessar();
        if (array[i] !== elemento) {
            // se achar um diferente não é palíndromo
            ehPalindromo = false;
        }
        if (i > 0) {
            // coloca vírgula só depois do primeiro valor
            original += ", ";
            invertido += ", ";
        }
        original += array[i];
        invertido += elemento;
        pilha.desempilhar();
    }

    // passo 3: coloca de volta na pilha para usar nos botões
    for (let i = 0; i < array.length; i++) {
        pilha.empilhar(array[i]);
    }

    // monta o resultado, += junta o texto e \n pula linha
    let mensagem = "";
    if (ehPalindromo) {
        mensagem = "É palíndromo.\n";
    } else {
        mensagem = "Não é palíndromo.\n";
    }
    mensagem += "Array original: [" + original + "]\n";
    mensagem += "Array invertido pela pilha: [" + invertido + "]\n";
    mensagem += "Tamanho: " + array.length;
    saida.innerHTML = mostrarTexto(mensagem); // mostra o resultado na tela
    consultarTopo();
}

// limpa a tela e começa uma pilha vazia
function limparTela() {
    campoTexto.value = "";
    campoElemento.value = "";
    saida.innerHTML = "";
    pilha = new Pilha();
    consultarTopo();
}

// adiciona o elemento e mostra o topo
function adicionarElemento() {
    const elemento = retirarEspacos(campoElemento.value);
    if (elemento === "") {
        saidaPilha.innerHTML = "Digite um elemento.";
        return;
    }
    pilha.empilhar(elemento);
    campoElemento.value = "";
    consultarTopo();
}

// consulta o topo sem remover
function consultarTopo() {
    const topo = pilha.acessar();
    if (topo === null) { // null quer dizer que está vazia
        saidaPilha.innerHTML = "Pilha vazia. Adicione um elemento ou clique em Verificar.";
    } else {
        saidaPilha.innerHTML = "Topo: " + mostrarTexto(topo);
    }
}

// remove o último e mostra o novo topo
function removerElemento() {
    // o método já confere se está vazia
    pilha.desempilhar();
    consultarTopo();
}

// só prepara o texto para aparecer no innerHTML
// &amp; mostra o sinal & e &lt; mostra o sinal <
// essa função não participa da comparação do palíndromo
function mostrarTexto(texto) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "&") {
            resultado += "&amp;";
        } else if (texto[i] === "<") {
            resultado += "&lt;";
        } else {
            resultado += texto[i];
        }
    }
    return resultado;
}
