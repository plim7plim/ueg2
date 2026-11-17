
import { Fila } from "./fila.js";

// pega os elementos da tela pelo id
const nome = document.getElementById("nome");
const btnIncluir = document.getElementById("btnIncluir");
const btnRetirar = document.getElementById("btnRetirar");
const btnAcessar = document.getElementById("btnAcessar");
const primeiro = document.getElementById("primeiro");
const resultado = document.getElementById("resultado");


let fila = new Fila();


btnIncluir.addEventListener("click", incluir); //chamadas bem aquii
btnRetirar.addEventListener("click", retirar);
btnAcessar.addEventListener("click", acessar);

mostrarFila();


    function incluir() {
        // não deixa incluir nome vazio
        if (nome.value.trim() === "") {
            primeiro.innerHTML = "Digite um nome";
            return;  //trata excessão bem aq
        }
        fila.enfileirar(nome.value);
        primeiro.innerHTML = nome.value;
        mostrarFila();
    }


    function retirar() {
        try {
            let quemSaiu = fila.acessar(); // guarda quem é o primeiro antes de tirar
            fila.desenfileirar();
            if (fila.estaVazia()) fila.limpar();
            primeiro.innerHTML = quemSaiu;
            mostrarFila();
        } catch (erro) {
            primeiro.innerHTML = erro.message;
        }
    }

    function acessar() {
        try {
            primeiro.innerHTML = fila.acessar();
        } catch (erro) {
            primeiro.innerHTML = erro.message;
        }
    }


    function mostrarFila() {
        resultado.innerHTML = fila.obterDadosFila();
    }
