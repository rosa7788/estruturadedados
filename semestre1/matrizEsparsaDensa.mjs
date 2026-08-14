function MatrizEsparsaDensa(matrizEsparsa, linhas, colunas) {
    const matrizDensa = Array.from({ length: linhas }, () => Array(colunas).fill(0));
    for(const {linha, coluna, valor} of matrizEsparsa){
        matrizDensa[linha][coluna] = valor
    }
    return matrizDensa.map(linha => linha.join(" ")).join("\n")
}

const matrizEsparsa = [
    { linha: 3, coluna: 0, valor: 3 },
    { linha: 1, coluna: 1, valor: 8 },
    { linha: 0, coluna: 0, valor: 3 }
];

console.log(MatrizEsparsaDensa(matrizEsparsa, 4, 4))