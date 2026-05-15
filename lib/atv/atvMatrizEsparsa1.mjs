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

class MatrizDensaEsparsa {

    constructor(linhas, colunas) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.dados = [];
    }

    inserir(linha, coluna, valor) {

        // Armazena apenas valores diferentes de zero
        if (valor !== 0) {
            this.dados.push({ linha, coluna, valor });
        }
    }

    exibir() {

        console.log("Elementos da Matriz Esparsa:\n");

        for (const item of this.dados) {

            console.log(
                `Linha: ${item.linha}, Coluna: ${item.coluna}, Valor: ${item.valor}`
            );
        }
    }

    /**
     * Multiplica a matriz esparsa pelo vetor de pesos
     * @param {Array} vetorDenso
     */
    multiplicarRecomendacao(vetorDenso) {

        // Vetor resultado preenchido com zeros
        const resultado = new Array(this.linhas).fill(0);

        // Percorre apenas os elementos existentes
        for (const item of this.dados) {

            // Multiplica valor da matriz pelo peso correspondente
            resultado[item.linha] +=
                item.valor * vetorDenso[item.coluna];
        }

        return resultado;
    }
}

const matriz = new MatrizDensaEsparsa(5, 5);

// Usuário 0 -> Filme 1 (Nota 5)
matriz.inserir(0, 1, 5);

// Usuário 1 -> Filme 3 (Nota 2)
matriz.inserir(1, 3, 2);

// Usuário 3 -> Filme 0 (Nota 4)
matriz.inserir(3, 0, 4);
matriz.exibir();
const pesos = [10, 20, 30, 40, 50];
const resultado =
matriz.multiplicarRecomendacao(pesos);

console.log("\nResultado da Multiplicação:");

console.log(resultado);
//Esse algortimo é mais rápido porque ele trabalha apenas com os valores que realmente existem na matriz esparsa, ignorando todos os zeros.

