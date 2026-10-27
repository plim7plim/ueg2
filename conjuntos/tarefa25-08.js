const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const numeroBuscado = document.getElementById("inNumeroBuscado");
const saidaConjunto = document.getElementById("saidaConjunto");
const saidaVetor2 = document.getElementById("saidaVetor2");
const saidaBubbleSort = document.getElementById("saidaBubbleSort");
const saidaBuscaSequencial = document.getElementById("saidaBuscaSequencial");
const saidaBuscaBinaria = document.getElementById("saidaBuscaBinaria");
const menorArray = document.getElementById("menorTermo");
const maiorArray = document.getElementById("maiorTermo");
// ARRAY 1
const array1 = [];

// ARRAY 2
let array2 = [];

// Criar array 1
function criarConjunto(array, tamanho) {
  array.length = 0;
  for (let i = 0; i < tamanho; i++) {
    let numero = Math.floor(Math.random() * 1001);
    array[i] = numero;
  }
}

// Botão criar conjunto
function eventoCriarConjunto() {
  const tamanho = Number(tamanhoConjunto.value);
  if (tamanho <= 0) {
    saidaConjunto.innerHTML = "Digite um tamanho válido.";
    return;
  }
  criarConjunto(array1, tamanho);
  saidaConjunto.innerHTML = "Array 1 = [" + mostrarArray(array1) + "]";
  // copia array1 para array2
  copiarArray();
  // limpa resultado antigo
  saidaBubbleSort.innerHTML = "";
  saidaBuscaSequencial.innerHTML = "";
  saidaBuscaBinaria.innerHTML = "";
  eventoMaiorMenor();
}

// Copiar array 1 para array 2
function copiarArray() {
  array2 = [];
  for (let i = 0; i < array1.length; i++) {
    array2[i] = array1[i];
  }
  saidaVetor2.innerHTML = "Array 2 = [" + mostrarArray(array2) + "]";
}

// Maior e menor
function encontrarMaiorMenor(array) {
  if (array.length === 0) {
    return {
      maior: undefined,
      menor: undefined
    };
  }
  let maior = array[0];
  let menor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  // Retorna os dois valores juntos: resultado.maior e resultado.menor.
  return {
    maior: maior,
    menor: menor
  };
}

// Mostrar maior e menor
function eventoMaiorMenor() {
  const resultado = encontrarMaiorMenor(array1);
  maiorArray.innerHTML = "Maior termo: " + resultado.maior;
  menorArray.innerHTML = "Menor termo: " + resultado.menor;
}

// ------------------------------------------
// Ordena comparando os elementos vizinhos (bubble sort).
// ------------------------------------------
function bubbleSort(array) {
  // Compara vizinhos e leva os maiores para o fim do array.
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// Botão ordenar
function eventoBubbleSort() {
  if (array1.length === 0) {
    saidaBubbleSort.innerHTML = "Crie um conjunto primeiro.";
    return;
  }
  // copia novamente o array original
  copiarArray();
  // ordena apenas o array2
  bubbleSort(array2);
  saidaBubbleSort.innerHTML = "Array 2 ordenado = [" + mostrarArray(array2) + "]";
}

// Busca sequencial
function buscaSequencial(array, numero) {
  let operacoes = 0;
  for (let i = 0; i < array.length; i++) {
    operacoes++;
    if (array[i] === numero) {
      return {
        indice: i,
        operacoes: operacoes
      };
    }
  }
  // -1 indica que o número não foi encontrado.
  return {
    indice: -1,
    operacoes: operacoes
  };
}

// Botão busca sequencial
function eventoBuscaSequencial() {
  if (array1.length === 0) {
    saidaBuscaSequencial.innerHTML = "Crie um conjunto primeiro.";
    return;
  }
  const numero = Number(numeroBuscado.value);
  const resultado = buscaSequencial(array1, numero);
  if (resultado.indice !== -1) {
    saidaBuscaSequencial.innerHTML = "Número " + numero + " encontrado no índice " +
      resultado.indice + ".<br>Quantidade de operações: " + resultado.operacoes;
  } else {
    saidaBuscaSequencial.innerHTML = "Número " + numero + " não encontrado.<br>" +
      "Quantidade de operações: " + resultado.operacoes;
  }
}

// Busca binária
function buscaBinaria(array, numero) {
  let inicio = 0;
  let fim = array.length - 1;
  let operacoes = 0;
  // A busca binária só funciona com o array ordenado.
  // A cada comparação, descarta a metade onde o número não está.
  while (inicio <= fim) {
    operacoes++;
    let meio = Math.floor((inicio + fim) / 2);
    if (array[meio] === numero) {
      return {
        indice: meio,
        operacoes: operacoes
      };
    }
    if (numero > array[meio]) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }
  // -1 indica que o número não foi encontrado.
  return {
    indice: -1,
    operacoes: operacoes
  };
}

// Botão busca binária
function eventoBuscaBinaria() {
  if (array1.length === 0) {
    saidaBuscaBinaria.innerHTML = "Crie um conjunto primeiro.";
    return;
  }
  /*
    Para garantir que a busca binária
    funcione, copiamos e ordenamos
    o Array 2.
  */
  copiarArray();
  bubbleSort(array2);
  saidaBubbleSort.innerHTML = "Array 2 ordenado = [" + mostrarArray(array2) + "]";
  const numero = Number(numeroBuscado.value);
  const resultado = buscaBinaria(array2, numero);
  if (resultado.indice !== -1) {
    saidaBuscaBinaria.innerHTML = "Número " + numero + " encontrado no índice " +
      resultado.indice + " do Array 2.<br>" +
      "Quantidade de operações: " + resultado.operacoes;
  } else {
    saidaBuscaBinaria.innerHTML = "Número " + numero + " não encontrado.<br>" +
      "Quantidade de operações: " + resultado.operacoes;
  }
}

// Monta o texto do array, separando os números com |.
function mostrarArray(array) {
  let texto = "";
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      texto += " | ";
    }
    texto += array[i];
  }
  return texto;
}
