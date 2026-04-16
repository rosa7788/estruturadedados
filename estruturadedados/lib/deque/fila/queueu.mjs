//fila = primeiro a chegar primeiro a sair
//fila = é uma lista linear de acesso restrito que permite apenas operacoes de enfileiramento e desenfileiramento, a primeira ocorrendo no final da estrutura e a segunda no inicio da estrutura
export default class Queueu{

    #data //vetor privado

    constructor(){
        this.#data = []

    }


//metodo para inserçao da fila
    enqueue(val){
    this.#data.push(val)
    }

//metodo para remocao da fila
    daqueue(){
    return this.#data.shift()
    }

//metodo para consultar o inicio da fila sem remover o elemento
    peek(){
    return this.#data[0]
    }

//a fila esta vazia
    get isEmpty(){
    return this.#data.length === 0
    }

//metodo impressao da fila(para efeitos de depuraçao)
    print(){
    let output = "[ "
    for(let i = 0; i < this.#data.length; i++){
        if(output !== "[ "){
            output += ", "
        }
        output += `(${i}): ${this.#data[i]}`
            
        }
    return output + "] "
    }

}
