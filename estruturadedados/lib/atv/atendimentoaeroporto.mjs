
import Queue from "./Queue.mjs";

let filaAeroporto = new Queue();

filaAeroporto.enqueue("Passageiro A");
filaAeroporto.enqueue("Passageiro B");
filaAeroporto.enqueue("Passageiro C");
filaAeroporto.enqueue("Passageiro D");
filaAeroporto.enqueue("Passageiro E");

console.log(filaAeroporto.print());

console.log(filaAeroporto.dequeue(), "Está sendo chamado para o embarque!");

console.log(filaAeroporto.print());

filaAeroporto.enqueue("Passageiro F");
filaAeroporto.enqueue("Passageiro G");
filaAeroporto.enqueue("Passageiro H");

console.log(filaAeroporto.print());

console.log("Próximo a embarcar: ", filaAeroporto.peek());

console.log(filaAeroporto.dequeue(), "Está sendo chamado para o embarque!");

console.log(filaAeroporto.print());

