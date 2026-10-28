// pilha: o último que entra é o primeiro que sai
class Pilha {
    // # deixa os atributos privados
    // array guarda os valores e topo guarda a posição do último
    #array;
    #topo;

    // começa com array vazio e topo -1
    constructor() {
        this.#array = [];
        this.#topo = -1; // -1 indica que a pilha está vazia
    }

    // aumenta o topo e guarda o elemento
    empilhar(elemento) {
        // de -1 vai para 0, que é a primeira posição
        this.#topo = this.#topo + 1;
        this.#array[this.#topo] = elemento;
    }

    // pega o valor do topo sem remover
    acessar() {
        if (this.#topo === -1) {
            return null; // não tem nada para consultar
        }
        return this.#array[this.#topo];
    }

    // diminui o topo para remover o último
    desempilhar() {
        if (this.#topo === -1) {
            return null;
        }
        // o valor antigo fica fora da pilha e o próximo vai ocupar o lugar
        this.#topo = this.#topo - 1;
    }
}
