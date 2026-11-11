let fila = new Fila();

function incluir() {
    let nome = document.getElementById("nome").value;
    fila.enfileirar(nome);
    mostrar();
}

function retirar() {
    fila.desenfileirar();
    mostrar();
}

function mostrar() {
    document.getElementById("primeiro").innerHTML = fila.acessar();
    document.getElementById("resultado").innerHTML = fila.obterDadosFila();
}
