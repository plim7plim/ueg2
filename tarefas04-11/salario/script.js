function calcularSalario(){
    let salario = document.getElementById("salario").value;
    let resultado = document.getElementById("resultado");

    if (salario <= 1412) {
        resultado.innerHTML = "Salário reajustado: R$ " + (salario * 1.5).toFixed(2);
    } else {
        resultado.innerHTML = "Salário reajustado: R$ " + (salario * 1.4).toFixed(2);
    }    
}