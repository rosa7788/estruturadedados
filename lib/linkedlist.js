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

        this.#count++

    }
}