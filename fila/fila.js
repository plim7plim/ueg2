class Fila {
    // Atributos privados da classe Fila
    #array;  // vetor para armazenamento dos dados da fila
    #inicio; // índice do primeiro elemento (frente da fila)
    #fim;    // índice do último elemento (final da fila)
    #tamanho; // quantidade de elemento da fila
    // Construtor
    constructor() {
        this.#array = [];
        this.#inicio = -1;
        this.#fim = -1;
        this.#tamanho = 0;
    }

    // Verificar se a fila está vazia
    estaVazia() {
        return (this.#tamanho === 0);
    }

    // Quantidade de elementos da fila
    obterTamanho() {
        return this.#tamanho;
    }

    // Incluir elemento no final da fila
    enfileirar(elemento) {
        this.#array[++this.#fim] = elemento;
        if(this.estaVazia()) this.#inicio = 0;
        this.#tamanho++;
    }

    // Acessar o elemento do início da fila, sem removê-lo
    acessar() {
        if (this.estaVazia()) {
            throw new Error("Não tem pessoas!");
        }
        return this.#array[this.#inicio];
    }

    // Remover o elemento do início da fila
    desenfileirar() {
        if (this.estaVazia()) {
            throw new Error("Não tem pessoas!");
        }
        this.#inicio++;
        this.#tamanho--;
        if (this.estaVazia()) this.limpar(); // se a fila ficou vazia, reinicia os índices
    }

    // Esvaziar a fila
    limpar() {
        this.#array = [];
        this.#inicio = -1;
        this.#fim = -1;
        this.#tamanho = 0;
    }

    // Elementos da Fila;
    obterDadosFila(){
        if(this.estaVazia()) return "Fila => { }";
        let saida = "Fila => { "; 
        for(let pos = this.#inicio; pos <= this.#fim; pos++){
            saida += this.#array[pos] + " | ";
        }
        saida += " }";
        return saida;
    }
}