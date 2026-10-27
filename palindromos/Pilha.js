// Pilha.js
class Pilha {
    // atributos privados
    #array;
    #topo;

    // método construtor
    constructor() {
        this.#array = [];
        this.#topo = -1; // -1 indica que a pilha está vazia
    }

    // Avança o topo uma posição e guarda o novo elemento
    empilhar(elemento) {
        this.#topo = this.#topo + 1;
        this.#array[this.#topo] = elemento;
    }

    // Consulta o elemento do topo sem remover
    acessar() {
        if (this.#topo === -1) {
            return null;
        }
        return this.#array[this.#topo];
    }

    // Recua o topo uma posição, retirando o último elemento da pilha
    desempilhar() {
        if (this.#topo === -1) {
            return null;
        }
        this.#topo = this.#topo - 1;
    }
}
