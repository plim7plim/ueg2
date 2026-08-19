const prompt = require("prompt-sync")();

let tamanhoArray = Number(prompt("Qual será o tamanho do array? "));

function preencherArray(tamanhoArray) {
  const numeros = [];

  for (let i = 0; i < tamanhoArray; i++) {
    numeros.push(Math.floor(Math.random() * 1001));
  }

  return numeros;
}

const array = preencherArray(tamanhoArray);

console.log(`[${array.join(", ")}]`);
    