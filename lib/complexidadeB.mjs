//medir a complexidade de O(n!) com recursão

function factorial(n){
     const inicio = performance.now() //inicio da medicao de tempo 

     function fatorialRecursivo(num){
        if (num === 0) return 1
        return num * fatorialRecursivo(num - 1)
     }

     const resultado = fatorialRecursivo(n)

     const fim = performance.now(); //fim da medicao de tempo

     const tempoGasto = fim - inicio

     //memoria estimada usada só pela pilha de chamadas (4 bytes por numero inteiro)
     const memoriaPilhaMB = (n * 4) / (1024 * 1024)

     //memoria real usada pelo processo 
     let memoriaTotalMB = 'N/A'
     if (typeof process !== 'underfined' && process.memoryUsage){
        memoriaTotalMB = process.memoryUsage.heapUsed / 1024 / 1024
     }
        console.clear()
        console.log("---Analise de complexidade recursiva O(n!)---")
        console.log("Tamanho da entrada", n)
        console.log("Resultado do fatorial", resultado)
        console.log("Tempo de execucao", tempoGasto.toFixed(6))
        console.log("Memoria estimada da pilha de chamadas:", memoriaPilhaMB.toFixed(2) + "mb")
        console.log("Memoria total usada pelo processo:",
            typeof memoriaTotalMB === "number"
            ? memoriaTotalMB.toFixed(2) + "MB"
            : memoriaTotalMB
        )


}

const numero = 5
factorial(numero)