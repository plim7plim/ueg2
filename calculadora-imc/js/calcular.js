const numeroUm = document.getElementById('Numero1');
const numeroDois = document.getElementById('Numero2');

const btnSomar = document.getElementById('btnSomar');
const btnSubtrair = document.getElementById('btnSubtrair');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');
const btnPotencia = document.getElementById('btnPotencia');
const btnRaiz = document.getElementById('btnRaiz');


const saidaResultado = document.getElementById('resultado');

function somar() {
    const num1 = Number(numeroUm.value);
    const num2 = Number(numeroDois.value);

    const soma = num1 + num2;

    saidaResultado.innerHTML = `A soma de ${num1} + ${num2} é: ${soma}`;
}

function subtrair() {
    const num1 = Number(numeroUm.value);
    const num2 = Number(numeroDois.value);

    const subtracao = num1 - num2;

    saidaResultado.innerHTML = `A subtração de ${num1} - ${num2} é: ${subtracao}`;
}

function multiplicar() {
    const num1 = Number(numeroUm.value);
    const num2 = Number(numeroDois.value);

    const multiplicacao = num1 * num2;

    saidaResultado.innerHTML = `A multiplicação de ${num1} × ${num2} é: ${multiplicacao}`;
}

function dividir() {
    const num1 = Number(numeroUm.value);
    const num2 = Number(numeroDois.value);

    const divisao = num1 / num2;

    saidaResultado.innerHTML = `A divisão de ${num1} ÷ ${num2} é: ${divisao}`;
}

function potencia() {
    const num1 = Number(numeroUm.value);
    const num2 = Number(numeroDois.value);

    const potencia = num1 ** num2;

    saidaResultado.innerHTML = `A potência de ${num1} elevado a ${num2} é: ${potencia}`;
}

function raiz() {
    const num1 = Number(numeroUm.value);

    const raizQuadrada = Math.sqrt(num1);

    saidaResultado.innerHTML = `A raiz quadrada de ${num1} é: ${raizQuadrada}`;
}