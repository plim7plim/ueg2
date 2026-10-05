const DESCONTO_POR_DEPENDENTE = 123.0;

class Funcionario { //metodos privados 
    #matricula;
    #nome;
    #dependentes;
    #salarioBase;
    #producao;

    constructor(matricula, nome, dependentes, salarioBase, producao) {
        this.#matricula = matricula;
        this.#nome = nome;
        this.#dependentes = dependentes;
        this.#salarioBase = salarioBase;
        this.#producao = producao;
    }

    // Define a gratificação de acordo com a quantidade de itens produzidos.
    #calcularGratificacao() {
        if (this.#producao <= 1000) return 500.0;
        if (this.#producao <= 2000) return 1250.0;
        return 2250.0;
    }

    // Soma o salário base com a gratificação.
    #calcularSalarioBruto() {
        return this.#salarioBase + this.#calcularGratificacao();
    }

    // Escolhe a alíquota pela faixa do salário bruto e calcula o INSS.
    #calcularDescontoINSS() {
        const bruto = this.#calcularSalarioBruto();
        let aliquota;
        if (bruto <= 1412.0) aliquota = 0.075;
        else if (bruto <= 2666.68) aliquota = 0.09;
        else if (bruto <= 4000.03) aliquota = 0.12;
        else aliquota = 0.14;
        return bruto * aliquota;
    }

    // Multiplica o número de dependentes pelo desconto de cada dependente.
    #calcularDescontoDependentes() {
        return this.#dependentes * DESCONTO_POR_DEPENDENTE;
    }

    // Escolhe a alíquota do IRPF pela faixa do salário bruto.
    #calcularDescontoIRPF() {
        const bruto = this.#calcularSalarioBruto();
        let aliquota;
        if (bruto <= 2259.2) aliquota = 0;
        else if (bruto <= 2826.65) aliquota = 0.075;
        else if (bruto <= 3751.05) aliquota = 0.15;
        else if (bruto <= 4664.68) aliquota = 0.225;
        else aliquota = 0.275;

        // Retira o desconto dos dependentes do valor do imposto.
        const irpf = bruto * aliquota - this.#calcularDescontoDependentes();
        return irpf > 0 ? irpf : 0; // não pode ficar negativo
    }

    // Retira o INSS e o IRPF do salário bruto.
    #calcularSalarioLiquido() {
        return this.#calcularSalarioBruto() - this.#calcularDescontoINSS() - this.#calcularDescontoIRPF();
    }

    // Monta o texto do contracheque com os dados e os valores calculados.
    gerarContracheque() {
        // Recebe um valor, coloca R$ antes dele e mostra duas casas decimais.
        function formatarValor(valor) {
            return "R$ " + valor.toFixed(2);
        }

        // As crases permitem escrever um texto com várias linhas.
        // Dentro de ${...}, o JavaScript calcula a expressão e coloca o resultado no texto.
        // Exemplo: ${formatarValor(500)} coloca R$ 500.00 no contracheque.
        return `GYNALIMENTOS - CONTRACHEQUE



        
        Matrícula: ${this.#matricula}
        Nome: ${this.#nome}
        Número de dependentes: ${this.#dependentes}
        Salário base: ${formatarValor(this.#salarioBase)}
        Gratificação: ${formatarValor(this.#calcularGratificacao())}
        Salário bruto: ${formatarValor(this.#calcularSalarioBruto())}
        Desconto INSS: ${formatarValor(this.#calcularDescontoINSS())}
        Desconto IRPF: ${formatarValor(this.#calcularDescontoIRPF())}
        Desconto por dependentes: ${formatarValor(this.#calcularDescontoDependentes())}
        Salário líquido: ${formatarValor(this.#calcularSalarioLiquido())}`;
    }
}
