import { Pilha } from "./Pilha.js";

function verificar() {
    let numero = document.getElementById("numero").value;

    // se não digitou nada, avisa e para aqui
    if (numero === "") {
        document.getElementById("resultado").innerHTML = "Digite um número";
        return;
    }

    let valor = Number(numero);
    numero = String(valor);
    let pilha = new Pilha();

    // empilha os algarismos do último para o primeiro
    for (let i = numero.length - 1; i >= 0; i--) {
        pilha.empilhar(Number(numero[i]));
    }

    // reconstrói o número invertido usando unidades, dezenas, centenas...
    let invertido = 0;
    let multiplicador = 1;

    while (!pilha.estaVazia()) {
        invertido += pilha.acessar() * multiplicador;
        pilha.desempilhar();
        multiplicador *= 10;
    }

    if (valor === invertido) {
        document.getElementById("resultado").innerHTML = "É capicua";
    } else {
        document.getElementById("resultado").innerHTML = "Não é capicua";
    }
}

document.getElementById("btnVerificar").addEventListener("click", verificar);
