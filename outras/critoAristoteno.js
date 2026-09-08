const prompt = require("prompt-sync")();

const limite = Number(prompt("Até qual número? "));

const numeros = [];

for (let i = 2; i <= limite; i++) {
    numeros.push(i);
}

for (let pos = 0; pos < numeros.length; pos++) {

    let numero = numeros[pos];

    if (numero * numero > limite) {
        break;
    }

    for (let j = pos + 1; j < numeros.length; j++) {

        if (numeros[j] % numero === 0) {
            numeros.splice(j, 1);
            j--;
        }

    }
}

let str = "Primos=|";

for (const elemento of numeros) {
    str += elemento + "|";
}

console.log(str);