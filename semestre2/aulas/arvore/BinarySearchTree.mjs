//NÓS são todos os itens guardados na árvore
//RAIZ é o nó do topo da árvore
//FILHOS sõa os nós que vem depois dos outros nós
//PAIS são os nós que vem antes dos outros nós
//FOLHAS são os nós que não tem filhos, são os últimos nós da árvore
//PRÉ-ORDEM raiz, depois esquerda, depois direita
//ORDEM SISTÉTRICA esquerda, depois raiz, depois direita (chaves ordenadas)
//PÓS-ORDEM esquerda, depois direita, depois raiz


//classe que representa a unidade de informação da árvore binária de busca
class node {
    constructor(val){
        this.data = val //armazena a informação da árvore
        this.left = null //ponteiro para subárvore esquerda
        this.right = null //ponteiro para a subárvore direita
    }
}

//classe que implementa a árvore binária de busca
export default class BinarySearchTree {
    #root //raiz da árvore
    constructor(){
        this.#root = null
    }
    //método para efetuar inserção ABB
    insert(val){
        const inserted = new Node(val)

        //1º caso: árvore vazia
        //o primeiro nodo fica sendo a raiz da árvore
        if(this.#root === null) this.#root = inserted

        //2º caso: inserção recurisa, percorrendo a árvore recursivamente
        else this.#insertNode(inserted,this.#root)

    }
    //método privado que insere um novo nodo na árvore
    #insertNode(inserted,root){

    }
}

