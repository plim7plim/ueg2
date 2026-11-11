import { Fila } from "./fila.js";

let fila = new Fila();

window.incluir = function () {
    let nome = document.getElementById("nome").value;
    fila.enfileirar(nome);
    mostrar();
}

window.retirar = function () {
    fila.desenfileirar();
    mostrar();
}

window.mostrar = function () {
    document.getElementById("primeiro").innerHTML = fila.acessar();
    document.getElementById("resultado").innerHTML = fila.obterDadosFila();
}
