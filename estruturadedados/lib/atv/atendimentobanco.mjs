// 1) Criando a fila
let filaBanco = []

// Inserindo os clientes (enqueue → push)
filaBanco.push(101)
filaBanco.push(102)
filaBanco.push(103)
filaBanco.push(104)
filaBanco.push(105)

// 2) Imprimir fila antes do atendimento
console.log("Fila inicial:", filaBanco)

// 3) Atender o primeiro cliente (dequeue → shift)
let atendido = filaBanco.shift()
console.log("Cliente atendido:", atendido)

// 4) Imprimir fila após remoção
console.log("Fila após atendimento:", filaBanco)

// 5) Novos clientes chegando
filaBanco.push(106)
filaBanco.push(107)

// 6) Imprimir fila atualizada
console.log("Fila após novos clientes:", filaBanco)

// 7) Próximo cliente a ser atendido (peek)
console.log("Próximo cliente:", filaBanco[0])

// 8) Atender próximo cliente
let proximoAtendido = filaBanco.shift()
console.log("Atendido:", proximoAtendido)

// Fila final
console.log("Fila final:", filaBanco)