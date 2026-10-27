const nome = document.getElementById("idNomeCompleto");
const peso = document.getElementById("idPeso");
const altura = document.getElementById("idAltura");
const btn = document.getElementById("btnCalcular");
const resultadoIMC = document.getElementById("saidaIMC");

// Função para calcular o IMC
function calcularIMC() {
    const nomeCompleto = nome.value;
    const pesoValor = Number(peso.value);
    const alturaValor = Number(altura.value);

    const imc = pesoValor / (alturaValor * alturaValor);

    // Mostra o IMC com 2 casas decimais
    const saida = `O IMC de ${nomeCompleto} é ${imc}`;

    resultadoIMC.innerHTML = saida;
}
