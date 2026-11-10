import { Pilha } from "./pilha.js";
const numero = document.getElementById("idInNumero");
const btnExecutar = document.getElementById("btnExecutar");
const resultado = document.getElementById("idOutResposta");

btnExecutar.addEventListener("click", executarBotao);

function verificarCapicua(numerar) {
 
    let pilha = new Pilha(); //cria classes
    let numero = numerar; //atribui 

    while (numero > 0) { //enquanto numero for maior que 0 empilha o resto da divisão por 10 e divide o numero por 10 
        let resto = numero % 10;
        pilha.empilhar(resto);
        numero = Math.floor(numero / 10); //pega somente inteiro de divisoes por 10
    }

    let numeroInvertido = 0; //variável para armazenar o número invertido
    let multiplicador = 1; //começa em 1 e é multiplicado por 10 a cada iteração para formar o número invertido corretamente

    while (!pilha.estaVazia()) { //enquanto a pilha não estiver vazia, desempilhar os elementos e formar o número invertido
        let elemento = pilha.acessar(); //elemento = primeiro elemento da pilha
        pilha.desempilhar(); //desempilha 
        numeroInvertido += elemento * multiplicador; //recebe o elemento * seu multiplicador, que é 1 na primeira vez, 10 na segunda, 100 na terceira e assim por diante
        multiplicador *= 10; //multiplica em 10 valor q começa em 1 
    }

    if (numeroInvertido === numerar) { //se o numero invertido for igual ao numero original, é capicua
        return true;
    } else {
        return false;
    }
}

function executarBotao() {
    const valor = Number(numero.value);
    let saida = "O numero " + valor;

    if (verificarCapicua(valor)) {
        saida += " é um numero capicua.";
    } else {
        saida += " não é um numero capicua.";
    }

    resultado.innerText = saida;
}

