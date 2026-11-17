
import { Fila } from "./fila.js";

// pega os elementos da tela pelo id
const nome = document.getElementById("nome");
const btnIncluir = document.getElementById("btnIncluir");
const btnRetirar = document.getElementById("btnRetirar");
const primeiro = document.getElementById("primeiro");
const resultado = document.getElementById("resultado");
const tamanho = document.getElementById("tamanho");
const acessar = document.getElementById("acessar")


let fila = new Fila();


btnIncluir.addEventListener("click", incluir);
btnRetirar.addEventListener("click", retirar);


function incluir() {
    fila.enfileirar(nome.value);
    mostrar();
}

// tira o primeiro da fila
function retirar() {
    // se a fila estiver vazia, o desenfileirar lança a exceção
    try {
        fila.desenfileirar();
        mostrar();
    } catch (erro) {
        // mostra a mensagem da exceção na tela
        primeiro.innerHTML = erro.message;
    }
}

// atualiza a tela
function mostrar() {
    // se a fila estiver vazia, o acessar lança a exceção
    try {
        primeiro.innerHTML = fila.acessar();
    } catch (erro) {
        // mostra a mensagem da exceção na tela
        primeiro.innerHTML = erro.message;
    }

    // mostra a quantidade de pessoas na fila
    tamanho.innerHTML = fila.obterTamanho();

    // mostra a fila inteira
    resultado.innerHTML = fila.obterDadosFila();
}


function acessar(){

}