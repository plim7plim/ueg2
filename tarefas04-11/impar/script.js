function calcularNumero(){
    let numero = document.getElementById("numero").value;
    

  
   if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = "é um numero par.";
    } else {
        document.getElementById("resultado").innerHTML = "é um numero ímpar.";
    }

    
}