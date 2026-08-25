const tamanhoConjunto = document.getElementById("inTamanhoConjunto");
const btn = document.getElementById("btnEvento");
const saidaConjunto = document.getElementById("saidaConjunto");

const conjunto = [];

function criarConjunto(array, tamanho){
  for (let i = 0; i < tamanho; i++) { 
    let numero = Math.floor(Math.random() * 1001);
    array[i] = numero;
  }
}

function eventoCriarConjunto() { //evento do botão
  const tamanho = Number(tamanhoConjunto.value); //recebe o valor do input e converte para número
  criarConjunto (conjunto, tamanho); //chama a função criarConjunto passando o array e o tamanho
  const saida = "Conjunto = [" + conjunto.join("|") + "]"; //cria a string de saída com os elementos do array, // join é usado para juntar os elementos do array em uma string, separados por "| "
  saidaConjunto.innerHTML = saida; //mostra a saída no HTML
}