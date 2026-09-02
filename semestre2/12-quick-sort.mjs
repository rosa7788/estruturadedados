function quickSort(vetor, ini = 0, fim = vetor.length - 1){
    //só trabalhamos se a região do vetor tiver, pelo menos 2 elementos
    if(fim <= ini) return; //condição de saída

    const pivot = fim //pivot

    let div = ini - 1 //divisor de regiões(inicialmente, antes do inicio do vetor)

    for(let i = ini; i < fim; i++){
        if(vetor[pivot] > vetor[i]){
            div++
            if(div !== i){
                [vetor[i], vetor[div]]= [vetor[div], vetor[i]]
            }
        }
    }
    div++
    //definir o pivô em seu lugar definitivo
    if(vetor[div] > vetor[pivot] && div !== pivot){
        [vetor[div], vetor[pivot]] = [vetor[pivot], vetor[div]]
    }
}

let nums = [2,5,7,1,6,3,4];