function verificar() {
    let texto = document.getElementById("texto").value;
    let pilha = new Pilha();

    // coloca cada letra na pilha
    for (let i = 0; i < texto.length; i++) {
        pilha.empilhar(texto[i]);
    }

    // tira da pilha, o último que entrou sai primeiro
    let invertido = "";
    for (let i = 0; i < texto.length; i++) {
        invertido += pilha.acessar();
        pilha.desempilhar();
    }

    if (texto === invertido) {
        document.getElementById("resultado").innerHTML = "É palíndromo";
    } else {
        document.getElementById("resultado").innerHTML = "Não é palíndromo";
    }
}
