hora, minuto = map(int, input().split())
if (hora>=6 and hora < 11):
    print('BREAKFAST')
if(hora == 11 and minuto <= 30):
    print('BREAKFAST')
    
if(hora == 11 and minuto > 30):
    print('SORRY')
if(hora > 11):
    print('SORRY')
