import { Pilha } from "./Pilha.js";
document.getElementById("btnVerificar").addEventListener("click", verificar);

function verificar() {
    let original = document.getElementById("texto").value.toLowerCase(); //deixa tudo minusculo igual minha vontade de viver 

    // monta o texto sem os espaços, " " usando essa propriedade, no caso minha varivael " " vai receber letra a letra aqui 
    let texto = "";
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== " ") {
            texto += original[i];
        }
    }
    if (texto === "") {
        document.getElementById("resultado").innerHTML = "Digite uma palavra";
        return;
    }

    let pilha = new Pilha();

    // coloca cada letra na pilha
    for (let i = 0; i < texto.length; i++) {
        pilha.empilhar(texto[i]);
    }

    // tira da pilha até ela ficar vazia, o último que entrou sai primeiro
    let invertido = "";
    while (!pilha.estaVazia()) {
        invertido += pilha.acessar();
        pilha.desempilhar();
    }

    if (texto == invertido) {
        document.getElementById("resultado").innerHTML = "É palíndromo";
    } else {
        document.getElementById("resultado").innerHTML = "Não é palíndromo";
    }
}

