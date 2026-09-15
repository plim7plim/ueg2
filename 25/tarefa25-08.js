const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btn = document.getElementById("btnEvento");
const saidaConjunto = document.getElementById("saidaConjunto");
const numeroBuscado = document.getElementById("inNumeroBuscado");
const saidaBusca = document.getElementById("saidaBusca");
const menorArray = document.getElementById("menorTermo");
const maiorArray = document.getElementById("maiorTermo");

const conjunto = [];

function criarConjunto(array, tamanho) {
  for (let i = 0; i < tamanho; i++) {
    let numero = Math.floor(Math.random() * 1001);
    array[i] = numero;
  }
}

function eventoCriarConjunto() {
  const tamanho = Number(tamanhoConjunto.value);

  criarConjunto(conjunto, tamanho);

  const saida = "Conjunto = [" + conjunto.join("|") + "]";
  saidaConjunto.innerHTML = saida;

  eventoMaiorMenor();
}

function buscaSequencial(array, numero) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numero) {
      return i;
    }
  }

  return -1;
}

function eventoBusca() {
  const numero = Number(numeroBuscado.value);
  const indice = buscaSequencial(conjunto, numero);

  if (indice !== -1) {
    saidaBusca.innerHTML =
      `Número ${numero} encontrado no índice ${indice}`;
  } else {
    saidaBusca.innerHTML =
      `Número ${numero} não encontrado`;
  }
}

function copiarVetor(array) {
  const novoVetor = [];

  for (let i = 0; i < array.length; i++) {
    novoVetor[i] = array[i];
  }

  document.getElementById("saidaVetor2").innerHTML =
    "Novo vetor: [" + novoVetor.join("|") + "]";

  return novoVetor;
}

function bubbleSort() {
  const array = copiarVetor(conjunto);

  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

    }
  }

  return array;
}

function eventoBubbleSort() {
  if (conjunto.length === 0) {
    document.getElementById("saidaBubbleSort").innerHTML =
      "O conjunto está vazio. Crie um conjunto primeiro.";
    return;
  }

  const resultado = bubbleSort();

  document.getElementById("saidaBubbleSort").innerHTML =
    "Bubble Sort = [" + resultado.join("|") + "]";
}

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

  return { maior, menor };
}

function eventoMaiorMenor() {
  const resultado = encontrarMaiorMenor(conjunto);

  maiorArray.innerHTML =
    `Maior termo: ${resultado.maior}`;

  menorArray.innerHTML =
    `Menor termo: ${resultado.menor}`;
}

let arrayNovo=[];

function copiarArray(array) {
  arrayNovo = [];

  for (let i = 0; i < array.length; i++) {
    arrayNovo[i] = array[i];
  }
  document.getElementById("saidaVetor2").innerHTML =
    "Novo vetor: [" + arrayNovo.join("|") + "]";
  return arrayNovo;
}