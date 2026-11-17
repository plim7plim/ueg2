endereco = input().lower()
counter = 0
counter += endereco.count('a')
counter += endereco.count('e')
counter += endereco.count('i')
counter += endereco.count('o')
counter += endereco.count('u')
print(counter % 3)
