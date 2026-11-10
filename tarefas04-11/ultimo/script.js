function calcularNumero(){
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    let calculo =Math.floor(numero /100);
    let calculo2 = Math.floor (numero%100);


    let soma = calculo + calculo2;

    let elevado = soma ** 2;

    if (elevado == numero){
        resultado.innerHTML = "O numero " + numero + " é um numero especial" + " soma = " + soma + " e elevado ao quadrado = " + elevado;
    }else{
        resultado.innerHTML = "O numero " + numero + " não é um numero especial " + " soma = " + soma + " e elevado ao quadrado = " + elevado;
    }
    console.log(calculo);
    console.log(calculo2);
    console.log(soma);


}