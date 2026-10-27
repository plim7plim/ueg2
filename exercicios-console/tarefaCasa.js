const prompt = require("prompt-sync")();

let tamanhoArray = Number(prompt("Qual será o tamanho do array? "));

function preencherArray(tamanhoArray) {
  const numeros = [];

  for (let i = 0; i < tamanhoArray; i++) {
    // Gera um número inteiro entre 0 e 1000.
    numeros[i] = Math.floor(Math.random() * 1001);
  }

  return numeros;
}

const array = preencherArray(tamanhoArray);

let texto = "[";
for (let i = 0; i < array.length; i++) {
  if (i > 0) {
    texto += ", ";
  }
  texto += array[i];
}
texto += "]";
console.log(texto);
    