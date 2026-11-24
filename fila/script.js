import { Fila } from "./fila.js";
const nome = document.getElementById("nome");
const btnIncluir = document.getElementById("btnIncluir");
const btnRetirar = document.getElementById("btnRetirar");
const btnAcessar = document.getElementById("btnAcessar");
const primeiro = document.getElementById("primeiro");
const resultado = document.getElementById("resultado");

const fila = new Fila();

btnIncluir.addEventListener("click", incluir);
btnRetirar.addEventListener("click", retirar);
btnAcessar.addEventListener("click", acessar);

mostrarFila(); // mostra a fila na tela assim que a página abre (ainda vazia)

function incluir() {
    if (nome.value === "") { // não deixa colocar nome vazio 
        primeiro.innerText = "Digite um nome";
    } else {
        fila.enfileirar(nome.value);
        mostrarFila(); //tem q chamar toda vez pra fila ser atualizada em tempo real 
    }
}

function retirar() {
    if (fila.estaVazia()) {
        primeiro.innerText = "Fila vazia";
    } else {
        primeiro.innerText = fila.acessar(); // mostra quem saiu puxando pela primeira pessoa 
        fila.desenfileirar(); //desenfileirar faz o array tirar aquela posição, igual o prof explicou no quadro, não deixa de existir só passa a não ser mais contado 
        mostrarFila(); // de novo pra "em tempo real"
    }
}

function acessar() {
    if (fila.estaVazia()) {
        primeiro.innerText = "Fila vazia";  
    } else {
        primeiro.innerText = fila.acessar() + " é o primeiro da fila"; //pega direto o primeiro 
    }
}

function mostrarFila() {
    resultado.innerText = fila.obterDadosFila(); //puxa todos
}
//fifo first in; first out 
