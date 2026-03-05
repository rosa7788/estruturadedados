import Queueu from "./fila.mjs";

let fila = new Queueu()
console.log(fila.print())
console.log("Está vazia?" + fila.isEmpty)

//insecoes na fila
fila.enqueue("Joao")
fila.enqueue("Alexandre")
fila.enqueue("Fabio")
fila.enqueue("Maria")
fila.enqueue("Alfredo")
console.log(fila.print())

//quem sera atendido
let proximo = fila.peek()
console.log({proximo})

//remocao da fila

let atendido = fila.enqueue()
console.log({atendido})
console.log(fila.print())
