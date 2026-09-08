const prompt = require("prompt-sync")();

let soma = 0;

let maior = 0;
let nomeMaior = "";

let menor = Infinity;
let nomeMenor = "";

function calculaMedia() {

    for (let i = 1; i <= 15; i++) {

        let nome = prompt("nome : " + i + " : ");
        let nota = Number(prompt("Digite a nota do aluno: " + nome + " : "));

        soma = soma + nota;

        if (nota > maior) {
            maior = nota;
            nomeMaior = nome;
        }

        if (nota < menor) {
            menor = nota;
            nomeMenor = nome;
        }
    }

    let media = soma / 15;

    console.log("\nRESULTADOS");
    console.log("Média da turma: " + media);

    console.log("\nMaior nota: " + maior);
    console.log("Maior aluno: " + nomeMaior);

    console.log("\nMenor nota: " + menor);
    console.log("Menor aluno: " + nomeMenor);

    console.log("\n===== ALUNOS =====");

    for (let i = 1; i <= 15; i++) {

        let nome = prompt("nome : " + i + " : ");
        let nota = Number(prompt("Digite a nota do aluno: " + nome + " : "));

        if (nota > media) {
            console.log(nome + " acima da média " + nota + " pontos | média " + media);
        }

        if (nota < media) {
            console.log(nome + " abaixo da média " + nota + " pontos | média " + media);
        }

        if (nota == media) {
            console.log(nome + " está na média " + nota + " pontos | média " + media);
        }
    }
}

calculaMedia();
