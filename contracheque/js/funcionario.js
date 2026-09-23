const DESCONTO_POR_DEPENDENTE = 123.0;

class Funcionario {
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

    #calcularGratificacao() {
        if (this.#producao <= 1000) return 500.0;
        if (this.#producao <= 2000) return 1250.0;
        return 2250.0;
    }

    #calcularSalarioBruto() {
        return this.#salarioBase + this.#calcularGratificacao();
    }

    #calcularDescontoINSS() {
        const bruto = this.#calcularSalarioBruto();
        let aliquota;
        if (bruto <= 1412.0) aliquota = 0.075;
        else if (bruto <= 2666.68) aliquota = 0.09;
        else if (bruto <= 4000.03) aliquota = 0.12;
        else aliquota = 0.14;
        return bruto * aliquota;
    }

    #calcularDescontoDependentes() {
        return this.#dependentes * DESCONTO_POR_DEPENDENTE;
    }

    #calcularDescontoIRPF() {
        const bruto = this.#calcularSalarioBruto();
        let aliquota;
        if (bruto <= 2259.2) aliquota = 0;
        else if (bruto <= 2826.65) aliquota = 0.075;
        else if (bruto <= 3751.05) aliquota = 0.15;
        else if (bruto <= 4664.68) aliquota = 0.225;
        else aliquota = 0.275;

        const irpf = bruto * aliquota - this.#calcularDescontoDependentes();
        return irpf > 0 ? irpf : 0; // não pode ficar negativo
    }

    #calcularSalarioLiquido() {
        return this.#calcularSalarioBruto() - this.#calcularDescontoINSS() - this.#calcularDescontoIRPF();
    }

    gerarContracheque() {
        const r = (valor) => "R$ " + valor.toFixed(2);
        return `GYNALIMENTOS - CONTRACHEQUE
Matrícula: ${this.#matricula}
Nome: ${this.#nome}
Número de dependentes: ${this.#dependentes}
Salário base: ${r(this.#salarioBase)}
Gratificação: ${r(this.#calcularGratificacao())}
Salário bruto: ${r(this.#calcularSalarioBruto())}
Desconto INSS: ${r(this.#calcularDescontoINSS())}
Desconto IRPF: ${r(this.#calcularDescontoIRPF())}
Desconto por dependentes: ${r(this.#calcularDescontoDependentes())}
Salário líquido: ${r(this.#calcularSalarioLiquido())}`;
    }
}
