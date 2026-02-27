
/*let pilha = []

pilha.push(10);
pilha.push(15);
pilha.push(20);

console.log(pilha)

pilha.unshift(5)
console.log(pilha)
*/
import Stack from "./lib/stack.mjs"

let pilha = new Stack()
console.log(pilha.print())
console.log("Está vazia",pilha.isEmpty)

pilha.push(35);
pilha.push(77);
pilha.push(19);

console.log(pilha.print())
console.log("Está vazia",pilha.isEmpty)

let removido = pilha.pop()
console.log({removido}, pilha.print())

let ultimo = pilha.peek()
console.log({ultimo}, pilha.print())