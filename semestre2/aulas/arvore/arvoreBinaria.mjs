import BinarySearchTree from "./BinarySearchTree.mjs";

const arvore = new BinarySearchTree()

arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(14)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)

let percurso = []
let percursoPRE = []
let percursoIN = []
//percurso em ordem
arvore.inOrderTransversal(val => percursoIN.push(val))
console.log('Percurso em ordem:', percursoIN)

//percurso pre-ordem
arvore.preOrderTransversal(val => percursoPRE.push(val))
console.log('Percurso em pre-ordem:', percursoPRE)

//testes de remoção
let percursoREM = []
arvore.inOrderTransversal(val => percursoREM.push(val))
console.log('ANTES DAS REMOÇÕES:', percursoREM)

//remoção de um nodo de grau 0
arvore.remove(64)
percursoREM = []
arvore.inOrderTransversal(val => percursoREM.push(val))
console.log('Após remoção do 64:', percursoREM)

//remoção de um nodo de grau 1
arvore.remove(1)
percursoREM = []
arvore.inOrderTransversal(val => percursoREM.push(val))
console.log('Após remoção do 1:', percursoREM)

//remoção de um nodo de grau 2
arvore.remove(15)
percursoREM = []
arvore.inOrderTransversal(val => percursoREM.push(val))
console.log('Após remoção do 1:', percursoREM)

//remoção da raiz
arvore.remove(48)
percursoREM = []
arvore.inOrderTransversal(val => percursoREM.push(val))
console.log('Após remoção do 1:', percursoREM)