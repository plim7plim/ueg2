pessoasAndar1 = int(input())
pessoasAndar2 = int(input())
pessoasAndar3 = int(input())
minutos = 0

minutos1 = (pessoasAndar1 * 2) + pessoasAndar3 * 2 
minutos2 = (pessoasAndar1 * 4) + pessoasAndar2 * 2 
minutos3 = (pessoasAndar3 * 4) + pessoasAndar2 * 2 
if minutos1 <= minutos2 and minutos1 <= minutos3:
    minutos = minutos1

if minutos2 <= minutos1 and minutos2 <= minutos3:
    minutos = minutos2

if minutos3 <= minutos2 and minutos3 <= minutos1:
    minutos = minutos3

print(minutos)
