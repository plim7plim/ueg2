const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btn = document.getElementById("btnEvento");
const saidaConjunto = document.getElementById("saidaConjunto");
const numeroBuscado = document.getElementById("inNumeroBuscado");
const saidaBusca = document.getElementById("saidaBusca");
const menorArray = document.getElementById("menorTermo");
const maiorArray = document.getElementById("maiorTermo");

const conjunto = [];

function criarConjunto(array, tamanho){
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

  // Encontra e mostra o maior e o menor
  eventoMaiorMenor(); //função tem q ser chamada aqui, para que o maior e menor sejam mostrados quando o conjunto for criado
}


function buscaSequencial(array, numero) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numero) { //item do array for = ao numero 
      return i; // Retorna o índice do elemento encontrado 0-1-2-3-4...
    }
  }
  return -1; // Retorna -1 se o elemento não for encontrado
}

function eventoBusca() {
  const numero = Number(numeroBuscado.value);
  const indice = buscaSequencial(conjunto, numero);

  if (indice !== -1) {
    saidaBusca.innerHTML = `Número ${numero} encontrado no índice ${indice}`;
  } else {
    saidaBusca.innerHTML = `Número ${numero} não encontrado`;
  }
}

function boblesort(){
  array = conjunto;  //seto que varívavel array recebe o array conjunto
  let n = array.length;  //n é do tamanho do array
  for (let i = 0; i < n - 1; i++) { //vai rodar todo array 
    for (let j = 0; j < n - i - 1; j++) { //vai rodar todo array menos o que já foi ordenado, e CONTINUA NESSE LOOP ENQUANTO NÃO CHEGAR NO FINAL DO ARRAY
      if (array[j] > array[j + 1]) {  //se o elemento atual for maior que o próximo, troca os elementos

        let temp = array[j]; //cria uma variável temporária para armazenar o valor do elemento atual
        array[j] = array[j + 1];  //atribui o valor do próximo elemento ao elemento atual
        array[j + 1] = temp; //atribui o valor da variável temporária ao próximo elemento
      }
    }
  }
  return array; //retorna o array ordenado
}

function eventoBubbleSort() { // aqui ele printa 
    let resultado = boblesort();

    document.getElementById("saidaBubbleSort").innerHTML = resultado;
}
  const tamanho = Number(tamanhoConjunto.value); //recebe o valor do input e converte para número
  criarConjunto (conjunto, tamanho); //chama


function encontrarMaiorMenor(array) {
  if (array.length === 0) {
    console.log("Conjunto vazio.");
    return { maior: undefined, menor: undefined };
  }

  let maior = array[0]; //atribui ambos na posição 0 do array, para comparar com os outros elementos
  let menor = array[0];

  for (let i = 1; i < array.length; i++) { //faz o script rodar
    if (array[i] > maior) { //se o elemento atual for maior que o maior, atribui o valor do elemento atual ao maior
      maior = array[i]; //maior(atual) passar a ser esse
    }
    if (array[i] < menor) { //se o elemento atual for menor que o menor, atribui o valor do elemento atual ao menor
      menor = array[i];
    }
  }

  const resultado = { maior, menor };
  console.log(`Maior termo: ${resultado.maior}`);
  console.log(`Menor termo: ${resultado.menor}`);

  return resultado;
}

function eventoMaiorMenor() {
  const resultado = encontrarMaiorMenor(conjunto);
  maiorArray.innerHTML = `Maior termo: ${resultado.maior}`;
  menorArray.innerHTML = `Menor termo: ${resultado.menor}`;
  console.log(`Maior termo: ${resultado.maior} | Menor termo: ${resultado.menor}`);
}

