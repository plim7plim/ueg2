function cadastrar() {
    const nome = document.getElementById("idNome").value;
    const peso = Number(document.getElementById("idPeso").value);
    const altura = Number(document.getElementById("idAltura").value);
    const sexo = document.getElementById("idSexo").value;
    const saida = document.getElementById("saida");

    if (nome === "" || peso <= 0 || altura <= 0) {
        saida.textContent = "Preencha todos os campos corretamente.";
        return;
    }

    const paciente = new Paciente(nome, peso, altura, sexo);
    saida.textContent = paciente.exibirDados();
}
