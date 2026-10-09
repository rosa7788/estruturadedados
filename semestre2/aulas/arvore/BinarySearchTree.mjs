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
        //1° caso valor a ser inserido é menor que o valor da raiz
    //inserção ororre a esquerda da raiz
    if(inserted.data < root.data){
        //se a posição a esqierda da raoz está desocupada faz a inserção
      if(root.left === null){
        root.left = inserted
        
      }
      // se não reinicia o processo de inserção recursivamente com a subarvore esquerda com raiz
      else{
        this.#insertNode(inserted, root.left)
      }
      
      
    } 
    
    
    //2° caso o valor a ser inserido seja maior que o valor da raiz
    //inserção ocorre a direita da raiz
    else if(inserted.data > root.data){
      //se a posição a direita da raiz está desocupada faz a inserção
      if(root.right === null){
        root.rigth = inserted
      }
      // se não reinicia o processo de inserção recursivamente com a subarvore direita com raiz

      else{
        this.#insertNode(inserted, root.right)
      }
      // 3 ° caso o valor a ser inserido é igual ao valor da raiz
      // se não reinicia o processo de inserção recursivamente com a subarvore esquerda com raiz

    } else{
      return
    }
    }
    //fncallback - metodo que visita os elementos

    /*
  Percursos
  Métodos que executam o percurso em-ordem (in-order traversal) na arvore
  ordem do percurso:
    1° percorre recursivamente em-ordem a subarvore esquerda
    2° visita a raiz
    3° percorre recursivamente em-ordem a subarvore direita

*/

  inOrderTraversal(fnCallback, root = this.#root) {
    if (root != null) {
      this.inOrderTraversal(fnCallback, root.left);  //1°
      fnCallback(root.data);                         //2°
      this.inOrderTraversal(fnCallback, root.right); //3°
    }
  }

  /* 
  
  método que executa o percurso pré-ordem (pre-order traversal) na arvore
  ordem do percurso:
    1° visita a raiz
    2° percorre recursivamente em-ordem a subarvore esquerda
    3° percorre recursivamente em-ordem a subarvore direita
    
  
  
  */
   preOrderTransversal(fnCallback,root = this.#root){
    if(root !== null){
        fnCallback(root.data); //1º
        this.preOrderTransversal(fnCallback, root.left);//2º
        this.preOrderTransversal(fnCallback, root.right); //3º
    }
   }



/*
método que executa o percurso pos-ordem (pos-order traversal) na arvore
  ordem do percurso:
    1° visita a raiz
    2° percorre recursivamente em-ordem a subarvore esquerda
    3° percorre recursivamente em-ordem a subarvore direita
*/
postOrderTransversal(fnCallback,root = this.#root){
    if(root !== null){
        fnCallback(root.data); //1º
        this.postOrderTransversal(fnCallback, root.left);//2º
        this.postOrderTransversal(fnCallback, root.right); //3º
    }
   }

   /*metodo PRIVADO que retorna o nodo de MENOR valor da arvore */
   #minNode(root){
    //a partir da raiz, percorre a esquerda enquando possivel
    while(root !== null && root.left !== null){
      root = root.left
    }
    return root
   }
   /*metodo PRIVADO que retorna o nodo de MAIOR valor da arvore */
   #maxNode(root){
    //a partir da raiz, percorre a direita enquando possivel
    while(root !== null && root.right !== null){
      root = root.right
    }
    return root
   }

   /*Metodo PUBLICO para excluir um nodo da arvore*/
   remove(val){
    this.#root = this.#removeNode(this.#root, val);
   }



   /*Metodo PRIVADO para excluir um nodo da arvore*/
   #removeNode(root,val){
    //1ºcaso: arvore vazia
    if(root === null){
      return null
    }
    //2ºcaso o valor a ser excluido é MENOR que o valor da raiz
    //continua recursivamente o processo de exclusao pela subarvore ESQUERDA
    
    if(val < root.data){
      root.left = this.#removeNode(root.left,val)
      return root;
    }
   

   //3ºcaso o valor a ser excluido é MAIOR que o valor da raiz
    //continua recursivamente o processo de exclusao pela subarvore DIREITA
    
    if(val < root.data){
      root.right = this.#removeNode(root.right,val)
      return root;
    }

    //4ºcaso o valor a ser excluido é IGUAL ao valor da raiz
    //o nodo a se excluido foi encontrado; é necessario, agora verificar o GRAU desse nodo para apicar o algoritmo de exclusão apropriado

    /* 4.1 nodo de grau 0(nodo folha)*/
    if(root.left === null && root.right === null){
      root = null
      return root;
    }

    /* 4.2 nodo de grau 1, com subarvore à esquerda*/
    if(root.left !== null && root.right === null){
      root = root.left
      return root;
    }

   }
  }

    

