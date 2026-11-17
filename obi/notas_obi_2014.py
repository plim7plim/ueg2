quantidadeAlunos = int(input())

mapaNotas = map(int, input().split(' '))
notaMaisFrequente = 0
notas = list(mapaNotas)
notaAtualQtd = 0
notaMaior = 0
for nota in notas:
    if nota > notaMaior:
        notaMaior = nota
    count = notas.count(nota)
    if count > notaAtualQtd:
        notaAtualQtd = count
        notaMaisFrequente = nota
if notas.count(notaMaisFrequente) == 1:
    print(notaMaior)
else:
    for nota in notas:
        if notas.count(nota) == notaAtualQtd:
            if notaMaisFrequente < nota:
                notaMaisFrequente = nota
    print(notaMaisFrequente)
