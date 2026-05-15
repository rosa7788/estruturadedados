/*ATV 1
1. Calcule quantos Gigabytes (GB) seriam necessários para armazenar essa matriz no formato Denso (onde guardamos todos os zeros), considerando que cada número ocupa o tipo padrão de 4 bytes.
r:1.000 x 10.000 = 10.000.000.000 posições
10.000.000.000 x 4 gb = 40.000.000.000 bytes
40.000.000.000 / 1024 ao cubo resulta em aproximadamente 37,25 gb

2. Calcule o espaço necessário no formato Esparso (COO), onde para cada
filme assistido guardamos a tripla: {linha, coluna, valor}. (Dica: cada tripla
terá 3 números de 4 bytes cada). 
r: Em média são 100 filmes, então 1.000.000 x 100 = 100.000.000 registros
cada registro guarda uma linha, coluna, valor, então 3 x 4 = 12 bytes por tripla
100.000.000 x 12 = 1.200.000.000 bytes e convertendo para gb 1.200.000.000 / 1024 ao cubo que resulta em aproximadamente 1,12 gb

3. Qual é a economia real de memória em porcetagem?
r: Economia é igual a (denso - esparso x 100) / denso
ou seja, (37, 25 - 1,12 x 100) /  37, 25 
que resulta em aproximadamente  96,99%
*/

