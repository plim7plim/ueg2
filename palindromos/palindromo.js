import { Pilha } from "./Pilha.js";

function verificar() {
    let original = document.getElementById("texto").value.toLowerCase(); //deixa tudo minusculo igual minha vontade de viver 

    // monta o texto sem os espaços, " " usando essa propriedade 
    let texto = "";
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== " ") {
            texto += original[i];
        }
    }
    let pilha = new Pilha();

    // coloca cada letra na pilha
    for (let i = 0; i < texto.length; i++) {
        pilha.empilhar(texto[i]);
    }

    // tira da pilha, o último que entrou sai primeiro
    let invertido = "";
    for (let i = 0; i < texto.length; i++) {
        invertido += pilha.acessar();
        pilha.desempilhar();
    }

    if (texto === invertido) {
        document.getElementById("resultado").innerHTML = "É palíndromo";
    } else {
        document.getElementById("resultado").innerHTML = "Não é palíndromo";
    }
}

// módulo não deixa a função global, então o onclick do HTML não acha ela.
// por isso liga o botão aqui pelo addEventListener
document.getElementById("btnVerificar").addEventListener("click", verificar);
