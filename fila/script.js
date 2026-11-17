
import { Fila } from "./fila.js";

// pega os elementos da tela pelo id
const nome = document.getElementById("nome");
const btnIncluir = document.getElementById("btnIncluir");
const btnRetirar = document.getElementById("btnRetirar");
const btnAcessar = document.getElementById("btnAcessar");
const primeiro = document.getElementById("primeiro");


let fila = new Fila();


btnIncluir.addEventListener("click", incluir);
btnRetirar.addEventListener("click", retirar);
btnAcessar.addEventListener("click", acessar);


function incluir() {
    fila.enfileirar(nome.value);
    nome.value = "";
    primeiro.innerHTML = ""; // limpa pra não ficar mostrando o primeiro antigo
}

// tira o primeiro da fila
function retirar() {
    // se a fila estiver vazia, o desenfileirar lança a exceção
    try {
        fila.desenfileirar();
        primeiro.innerHTML = ""; // limpa pra não ficar mostrando o primeiro antigo
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
