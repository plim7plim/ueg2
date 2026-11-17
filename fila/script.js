
import { Fila } from "./fila.js";

// pega os elementos da tela pelo id
const nome = document.getElementById("nome");
const btnIncluir = document.getElementById("btnIncluir");
const btnRetirar = document.getElementById("btnRetirar");
const btnAcessar = document.getElementById("btnAcessar");
const primeiro = document.getElementById("primeiro");
const resultado = document.getElementById("resultado");


let fila = new Fila();


btnIncluir.addEventListener("click", incluir);
btnRetirar.addEventListener("click", retirar);
btnAcessar.addEventListener("click", acessar);

mostrarFila(); // já mostra a fila vazia quando abre a página


function incluir() {
    // não deixa incluir nome vazio
    if (nome.value.trim() === "") {
        primeiro.innerHTML = "Digite um nome";
        return;
    }
    fila.enfileirar(nome.value);
    primeiro.innerHTML = nome.value + " entrou na fila";
    nome.value = "";
    mostrarFila();
}

// tira o primeiro da fila
function retirar() {
    // se a fila estiver vazia, o desenfileirar lança a exceção
    try {
        let quemSaiu = fila.acessar(); // guarda quem é o primeiro antes de tirar
        fila.desenfileirar();
        // se a fila ficou vazia, zera ela pra não voltar nome antigo quando incluir de novo
        if (fila.estaVazia()) fila.limpar();
        primeiro.innerHTML = quemSaiu + " saiu da fila";
        mostrarFila();
    } catch (erro) {
        // mostra a mensagem da exceção na tela
        primeiro.innerHTML = erro.message;
    }
}

// mostra só o primeiro da fila, sem tirar ele
function acessar() {
    // se a fila estiver vazia, o acessar lança a exceção
    try {
        primeiro.innerHTML = fila.acessar();
    } catch (erro) {
        // mostra a mensagem da exceção na tela
        primeiro.innerHTML = erro.message;
    }
}

// mostra a fila inteira usando o obterDadosFila da classe
function mostrarFila() {
    resultado.innerHTML = fila.obterDadosFila();
}
