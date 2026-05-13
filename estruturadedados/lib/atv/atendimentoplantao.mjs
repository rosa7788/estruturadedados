import Queue from "./Queue.mjs";


let atendimento = new Queue();

atendimento.enqueue("José");
atendimento.enqueue("Sérgio");
atendimento.enqueue("Joaquim");
atendimento.enqueue("Maria");
atendimento.enqueue("Joao");
atendimento.enqueue("Samuel");
atendimento.enqueue("Vicente");
atendimento.enqueue("Terezinha");
atendimento.enqueue("Firmino");
atendimento.enqueue("Toninho");

console.log(atendimento.print());

console.log(atendimento.dequeue(), "foi atendido(a)");

console.log(atendimento.print());

atendimento.enqueue("Rafael");
atendimento.enqueue("Isabela");
atendimento.enqueue("Cauã");

console.log(atendimento.print());

console.log("Proximo a ser chamado: ", atendimento.peek());

console.log(atendimento.dequeue(), "está sendo chamado agora!");

console.log(atendimento.print());


