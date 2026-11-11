function verificar() {
    let numero = document.getElementById("numero").value;
    let pilha = new Pilha();

    // coloca cada número na pilha
    for (let i = 0; i < numero.length; i++) {
        pilha.empilhar(numero[i]);
    }

    // tira da pilha, o último que entrou sai primeiro
    let invertido = "";
    for (let i = 0; i < numero.length; i++) {
        invertido += pilha.acessar();
        pilha.desempilhar();
    }

    if (numero === invertido) {
        document.getElementById("resultado").innerHTML = "É capicua";
    } else {
        document.getElementById("resultado").innerHTML = "Não é capicua";
    }
}
