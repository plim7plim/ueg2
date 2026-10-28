function gerar() {
    // pega a quantidade que o usuário digitou
    const tamanhoUsuario = Number(document.getElementById("tamanhoUsuario").value);
    const saida = document.getElementById("resultado");

    // a quantidade precisa ser inteira e maior que zero
    // o resto da divisão por 1 é diferente de zero quando tem parte decimal
    if (tamanhoUsuario <= 0 || tamanhoUsuario % 1 !== 0) {
        saida.innerHTML = "Digite uma quantidade inteira maior que zero";
        return;
    }

    const array = [];
    const invertido = [];
    const pilha = new Pilha();

    // sorteia os números de 0 até 100 e guarda no array
    for (let i = 0; i < tamanhoUsuario; i++) {
        array[i] = Math.floor(Math.random() * 101);
    }

    // coloca cada número do array na pilha
    for (let i = 0; i < array.length; i++) {
        pilha.empilhar(array[i]);
    }

    // guarda o topo no array invertido e depois remove da pilha
    for (let i = 0; i < array.length; i++) {
        invertido[i] = pilha.acessar();
        pilha.desempilhar();
    }

    // monta o texto com os números do array original
    let texto = "Array original: ";
    for (let i = 0; i < array.length; i++) {
        texto += array[i] + " ";
    }

    // pula uma linha e mostra o array invertido
    texto += "\nArray invertido: ";
    for (let i = 0; i < invertido.length; i++) {
        texto += invertido[i] + " ";
    }

    saida.innerHTML = texto;
}
