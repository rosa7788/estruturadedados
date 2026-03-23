import Deque from "./deque.mjs"


let listaCompras = new Deque()

console.log(listaCompras.print())
console.group("A lista está vazia\n" + listaCompras.isEmpty)

//Produtos alimenticios -> inicio
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("Sal")
console.log(listaCompras.print())


//Prodoutos higiene -> final
listaCompras.insertBack("Sabão em po")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Água sanitaria")
console.log(listaCompras.print())

listaCompras.insertFront("Café")
listaCompras.insertFront("Açucar")
console.log(listaCompras.print())

listaCompras.insertBack("Amaciante")
listaCompras.insertBack("Shampoo")
listaCompras.insertBack("Condicionador")
console.log(listaCompras.print())

let removido = listaCompras.removeFront
console.log({removido})
console.log(listaCompras.print())

let frente = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()

console.log({frente})
console.log({ultimo})



