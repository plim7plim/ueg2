class Paciente {
    #nome;
    #peso;
    #altura;
    #sexo;

    constructor(nome, peso, altura, sexo) {
        this.#nome = nome;
        this.#peso = peso;
        this.#altura = altura;
        this.#sexo = sexo;
    }

    #calcularIMC() {
        return this.#peso / (this.#altura * this.#altura);
    }

    #faixaDeRisco() {
        const imc = this.#calcularIMC();
        if (imc < 20) return "Abaixo do peso ideal";
        if (imc <= 25) return "Peso normal";
        if (imc <= 30) return "Excesso de peso";
        if (imc <= 35) return "Obesidade";
        return "Obesidade mórbida";
    }

    #pesoIdeal() {
        if (this.#sexo === "Masculino") {
            return 72.7 * this.#altura - 58;
        }
        return 62.1 * this.#altura - 44.7;
    }

    exibirDados() {
        return `CLÍNICA GYN
DADOS DO PACIENTE
Nome Completo: ${this.#nome}
Peso: ${this.#peso.toFixed(2)} kg
Altura: ${this.#altura.toFixed(2)} m
Sexo: ${this.#sexo}
IMC: ${this.#calcularIMC().toFixed(2)}
Faixa de Risco: ${this.#faixaDeRisco()}
Peso Ideal: ${this.#pesoIdeal().toFixed(2)} kg`;
    }
}
