import { Pilha } from "./Pilha.js";

function verificar() {
    let numero = document.getElementById("numero").value;

    // se não digitou nada, avisa e para aqui
    if (numero === "") {
        document.getElementById("resultado").innerHTML = "Digite um número";
        return;
    }

    let pilha = new Pilha();

    // coloca cada número na pilha
    for (let i = 0; i < numero.length; i++) {
        pilha.empilhar(numero[i]);
    }

    // tira da pilha até ela ficar vazia, o último que entrou sai primeiro
    let invertido = "";
    while (!pilha.estaVazia()) {
        invertido += pilha.acessar();
        pilha.desempilhar();
    }

    if (numero === invertido) {
        document.getElementById("resultado").innerHTML = "É capicua";
    } else {
        document.getElementById("resultado").innerHTML = "Não é capicua";
    }
}

// módulo não deixa a função global, então o onclick do HTML não acha ela.
// por isso liga o botão aqui pelo addEventListener
document.getElementById("btnVerificar").addEventListener("click", verificar);
