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
        if (imc < 20) {
            return "Abaixo do peso ideal";
        }
        if (imc <= 25) {
            return "Peso normal";
        }
        if (imc <= 30) {
            return "Excesso de peso";
        }
        if (imc <= 35) {
            return "Obesidade";
        }
        return "Obesidade mórbida";
    }

    #pesoIdeal() {
        if (this.#sexo === "Masculino") {
            return 72.7 * this.#altura - 58;
        }
        return 62.1 * this.#altura - 44.7;
    }

    exibirDados() {
        // toFixed(2) mostra o número com duas casas decimais.
        let dados = "CLÍNICA GYN\nDADOS DO PACIENTE\n";
        dados += "Nome Completo: " + this.#nome + "\n";
        dados += "Peso: " + this.#peso.toFixed(2) + " kg\n";
        dados += "Altura: " + this.#altura.toFixed(2) + " m\n";
        dados += "Sexo: " + this.#sexo + "\n";
        dados += "IMC: " + this.#calcularIMC().toFixed(2) + "\n";
        dados += "Faixa de Risco: " + this.#faixaDeRisco() + "\n";
        dados += "Peso Ideal: " + this.#pesoIdeal().toFixed(2) + " kg";
        return dados;
    }
}
