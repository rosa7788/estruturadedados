class Node {
    constructor(val){
        this.prev = null
        this.data = val
        this.next = null
    }
}

export default class DoubleLinkedList{
    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get isEmpty(){
        return this.#count === 0
    }
    get count(){
        return this.#count
    }

    //método privado que encontra um nodo pela sua posição

    #findNode(pos){
        let node
        //nodo se encontra na primeira metade da lista
        if(pos < this.#count / 2){
            node = this.#head
            for(let i = 0; i < pos; i++){
                node = node.next
            }

            //nodo se encontra na segunda metade da lista
        } else {
            node = this.#tail 
            for(let i = this.#count - 1; i > pos;i--){
                node = node.prev 
            }
        }
        return node
    }

    //metodo para inserir em qualquer posição

    insert(pos, val){
        let inserted = new Node(val)

        
        //primeiro caso olhar se a lista esta vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }
        //segundo caso é inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head.prev = inserted
            this.#head = inserted
        }
        //terceiro caso inserção na última posição
        else if(pos >= this.#count){
            inserted.prev = this.#tail
            this.#tail.next = inserted
            this.#tail = inserted
        }
        //quarto caso inserção em posição intermediaria

        else{
            let nodePos = this.#findNode(pos)
            let before = nodePos.prev

            before.next = inserted
            inserted.prev = before
            inserted.next = nodePos
            nodePos.prev = inserted
        }
        this.#count++
    }
    //metodo de ataho de insercao na primeira posição
    insertHead(val){
        this.insert(0,val)
    }
    //metodo de atalho de insercao na ultima posicao
    insertTail(val){
        this.insert(this.#count, val)
    }
    //metodo para remoção um nodo da lista
    remove(pos){
        //primeiro caso: lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count -1){
            return undefined
        }
        let removed
        //segundo caso: remocao do primeiro node
        if(pos === 0){
            removed = this.#head 
            this.#head = removed.next

            if(this.#head){
                this.#head.prev = null
            }
            if(this.#count === 1){
                this.#tail = null
            }

        }
        //terceiro caso remoção do ultimo nodo (tail)
        else if(pos === this.#count - 1){
            removed = this.#tail

            this.#tail = removed.prev

            if(this.#tail){
                this.#tail.next = null
            }

            if(this.#count ===1){
                this.#head = null
            }
        }
        //quarto caso remoção intermediaria
        else {
            removed = this.#findNode(pos)
            let before = removed.prev
            let after = removed.next

            before.next = after
            after.prev = before

        
        }
        this.#count--

        return removed.data
    }
    //metodo de atalho para remoção da primeira posicao
    removeTail(){
        return this.remove(this.#count - 1)
    }
    peek(pos){
        //lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }
        const node = this.#findNode(pos)
        return node.data
    }
    peekHead(){
        return this.peek(0)
    }
    peekTail(){
        return this.peek(this.#count - 1)
    }
    
    //metodo que retorna a posição do nodo cujo conteudo foi especificado
    indexOf(val){
        const middle = Math.ceil(this.#count/2)
        let node1 = this.#head
        let node2 = this.#tail

        for(let pos = 0; pos < middle; pos++){
            //verifica se o valor esta no node1
            if(val === node1.data) return pos
            //verifica se o valor esta no node2
            if(val === node2.data) return this.#count - 1 - pos

            //node1 avanca via next
            node1 = node1.next

            //node2 retocede via prev
            node2 = node2.prev
        }
        
        return -1
    }

    print(){
        let output = '('
        let node  = this.#head

        for(let  i = 0; i < this.#count;i++){
            if(output !== '(' ) output += ','
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += `), count: ${this.#count}`
        return output
    }
}

