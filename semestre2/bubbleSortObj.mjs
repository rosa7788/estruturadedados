function bubbleSort(vetor, fnComp){
    let trocou
    do{
        trocou = false
        
        for(let i = 0; i < vetor.length - 1; i++){
            if(fnComp(vetor[i], vetor[i+1])){
                [vetor[i], vetor[i+1] = [vetor[i+1]], vetor[i]]
            }
        }
    }while(trocou)
}


bubbleSort(objMotorista, (elem1, elem2) ==> elem1.nome_motorista > elem2.nome_motorista)

console.log()