import DoubleLinkedList from "./DoubleLinkedList.mjs";

const lista = new DoubleLinkedList()

console.log("Lista está vazia?" + lista.isEmpty ? "Está vazia" : "Não")
console.log(lista.print())

lista.insert(0, "fiat")
console.log("Lista está vazia?" + lista.isEmpty ? "Está vazia" : "Não")
console.log(lista.print())

lista.insert(0, "opala")
console.log(lista.print())

lista.insertTail("chevette")
console.log(lista.print())

lista.insert("corcel")
console.log(lista.print())

let removido = lista.remove(1)
console.log({removido}, lista.print())

let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
console.log({pos0, pos1})

let posChevette = lista.indexOf("chevette")
console.log({posChevette})