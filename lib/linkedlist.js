class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

export default class linkedlist{
    #head //inicio da lista (cabeca)
    #tail //fim da lista(cauda)
    #count // qunatidade de nodos da lista;

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    //getter que retorna se a lista encadeada esta vazia ou nao
    get isEmpty(){
        return this.#count === 0;
    }

    //getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count;
    }

    //metodo de inserir em qualquer posicao
    insert(pos, val){
        //cria um nodo para armazenaro valor pretendido
        const inserted = new Node(val)

        //1 caso se a lista esta vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }
        //2 caso lista nao vazia, insercao na primeira posicao
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted

        }
        //3 caso insercao no final da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
        }

        //4 caso posição intermediaria
        else{
            let before = this.#head
            for(let i = 1; i < pos; i++){
                before = before.next 
            }
            let after = before.next

            inserted.next = after
            before.next = inserted
        }

        this.#count++

    }

    //metodo para insercao na primeira posicao (atalho)
    insertHead(val){
        this.insert(0,val)
    }
    insertTail(val){
        this.insert(this.#count,val)
    }

    //metodo para remocao de um nodo na lista
    remove(pos){
        //1 caso: é olhar se a lista está vazia ou  a posição informada esta fora dos limites da
        if(this.isEmpty || pos < 0 || pos > this.#count -1){
            return undefined
        }

        let removed

        //2 caso: remocao do inicio da lista
        if (pos === 0){
            removed = this.#head
            this.#head = this.#head.next 
        }
        if(this.#count === 1){
            this.#tail = null
            
        }

        //3 caso: remocao de nodo intermediario ou final

        else{
            let before = this.#head

            for(let i = 1; i < pos;i++){
                before = before.next
            }
            removed = before.next

            let after = removed.next

            before.next = after

            //atualizando o tail em caso de remocao
            if(pos === this.#count -1){
                this.#tail = before
            }
        }
        this.#count--

        return removed.data
    }

}