const prompt = require("prompt-sync")();

const limite = Number(prompt("Até qual número? "));

const numeros = [];

for (let i = 2; i <= limite; i++) {
    numeros[numeros.length] = i;
}

for (let pos = 0; pos < numeros.length; pos++) {

    let numero = numeros[pos];

    if (numero * numero > limite) {
        break;
    }

    for (let j = pos + 1; j < numeros.length; j++) {

        if (numeros[j] % numero === 0) {
            // Desloca os próximos elementos para apagar o múltiplo.
            for (let k = j; k < numeros.length - 1; k++) {
                numeros[k] = numeros[k + 1];
            }
            numeros.length = numeros.length - 1;
            j--; // Verifica o número que veio para esta posição.
        }

    }
}

let str = "Primos=|";

for (let i = 0; i < numeros.length; i++) {
    str += numeros[i] + "|";
}

console.log(str);