import linkedlist from "./linkedlist";

const lista = new linkedlist()

console.log("A lista está vazia",lista.isEmpty ? "Sim, está vazia" : "Não")

lista.insert(0, "Fusca")
lista.insert(0, "Corcel")

console.log(lista.print())

lista.insert(2, "Opala")
lista.insert(2, "Chevette")
lista.insert(2, "Maverick")
console.log(lista.print())

lista.insert(3, "Brasilia")
console.log(lista.print())

lista.insertHead("Belina")
lista.insertTail("Gol")

console.log(lista.print())

let removido = lista.remove(0)
console.log ({removido})
console.log(lista.print())

removido = lista.remove(4)
console.log ({removido})
console.log(lista.print())

let idxFusca = lista.indexOf("Fusca")
let idxOpala = lista.indexOf("Opala")
let idxGol = lista.indexOf("Gol")
let idxNE = lista.indexOf("NE")

console.log({idxFusca, idxGol, idxOpala, IdxNE})

let pos0 = lista.peek(0)
let pos1 = lista.peek(1)
let pos4 = lista.peek(4)

console.log({pos0, pos1, pos4})