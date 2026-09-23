function gerar() {
    const matricula = document.getElementById("idMatricula").value;
    const nome = document.getElementById("idNome").value;
    const dependentes = Number(document.getElementById("idDependentes").value);
    const salarioBase = Number(document.getElementById("idSalarioBase").value);
    const producao = Number(document.getElementById("idProducao").value);
    const saida = document.getElementById("saida");

    if (matricula === "" || nome === "" || salarioBase <= 0 || dependentes < 0 || producao < 0) {
        saida.textContent = "Preencha todos os campos corretamente.";
        return;
    }

    const funcionario = new Funcionario(matricula, nome, dependentes, salarioBase, producao);
    saida.textContent = funcionario.gerarContracheque();
}
