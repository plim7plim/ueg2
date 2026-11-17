export class Pilha {
    // Atributos privados
    #array
    #topo

    // Método Construtor
    constructor() {
        this.#array = []; // porque usamos o # aqui por conta de nao ter set nem get?
        this.#topo = -1;
    }

    estaVazia() {
        return (this.#topo === -1)    
    }
    
    obterTamanho() {
        return (this.#topo + 1);
    }

    empilhar(elemento) {
        this.#array[++this.#topo] = elemento;
    }

    acessar() {
        if(this.estaVazia()) {
            throw new Error("Pilha está vazia");
        }
        return this.#array[this.#topo];
    }

    desempilhar() {
        if(this.estaVazia()) {
            throw new Error("Pilha está vazia");
        }
        this.#topo--;
    }

    limpar() {
        this.#topo = -1;
        this.#array = [];
    }
}
