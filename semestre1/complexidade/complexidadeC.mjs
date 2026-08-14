function factorialIterativo(n){
    const inicio = performance.now()

    let resultado = 1
    for(let i = 2; i <= n; i++){
        resultado *= i
    }

    const fim = performance.now()
    const tempoGasto = fim - inicio

    const memoriaPilhaMB = (n*4) / (1024 * 1024)

    let memoriaTotalMB = 'N/A'
    if(typeof process !== 'undefined' && process.memoryUsage()){
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
    }


console.clear()
console.log("---Analise de complexidade Iterativa 0(n!)---")
console.log("Tamanha da entrada:", n)
console.log("Resultado do fatorial", resultado)
console.log("Tempo de execucao", tempoGasto.toFixed(6))
console.log("Memoria estimada da pilha de chamadas:", memoriaPilhaMB.toFixed(2) + "mb")
console.log("Memoria total usada pelo processo:",
    typeof memoriaTotalMB === "number"
    ? memoriaTotalMB.toFixed(2) + "MB"
    : memoriaTotalMB
)
}

factorialIterativo(5)