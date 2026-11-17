rodadas = int(input())
rodadasVencidas = 0
metaRodadas = 0
placarXerxes = 0
placarDario = 0

if (rodadas % 2 != 0 ):
 metarodadas = rodadas/2 + 0.5

for i in range(0, rodadas):

    dario, xerxes = map(int, input().split())
     
        
    validaGanhosXerxes = xerxes+2
    validaGanhosDario = dario+2
    if (validaGanhosXerxes <= dario):
        placarXerxes += 1
        continue
    if (validaGanhosDario <= xerxes):
        placarDario += 1
  
        continue
    
    if (dario == 4 and xerxes in [0, 1]):
        placarDario += 1
       
        continue
    if (xerxes == 4 and dario in [0, 1]):
        placarXerxes += 1
        
        continue
    if (dario == 3 and xerxes in [4, 0]):
        placarDario += 1
        
        continue
    if (xerxes == 3 and dario in [4, 0]):
        placarXerxes += 1
        
        continue

if(placarXerxes > placarDario):
    print('xerxes')
else:
    print('dario')

print(placarXerces, placarDario, metaRodadas, rodadasVencidas)