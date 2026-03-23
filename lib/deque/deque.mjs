//deque é uma fila de duas pontas, não pode fazer alterações no meio dela, apenas no fim e inicio
export default class Deque {
    #data //vetor privado

    constructor(){
        this.#data = []
    }

//metodo para inserção no inicio da estrutura
    insertFront(){
        this.#data.unshift(val)
    }

    //metodo para inserção no final da estrutura
    insertBack(val){
        this.#data.push(val)
    }
    //metodo para remoção do inicio da estrutura
    removeFront(){
        return this.#data.shift()
    }
    //metodo para remocao do final da estrutura
    removeBack(){
        return this.#data.pop()
    }

    //consultar o inicio da estrutura
    peekFront(){
        return this.#data[0]
    }
    peekBack(){
        return this.#data[this.#data.length - 1]
    }
    get isEmpty(){
        return this.#data.length === 0 ? "Si está vazia" : "Não"
    }
    

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


