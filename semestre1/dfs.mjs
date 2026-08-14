import Stack from './stack.mjs'

const grafo = {
    A: ["B", "C" ],
    B: ["D", "E" ],
    C: ["F"],
    D: [],
    E: [],
    F: []
}

function dfs(grafo, inicio){
    const visitador

    const pilha = new Stack()

    pilha.push(inicio)

    while(!pilha.isEmpty){
        const no = pilha.pop()

        if(!visitantes.has(no)){
            console.log(no)
            visitados.add(no)

            const vizinhos = grafo[no]

            for(let i = vizinhos.length -1; i >= 0; i--){
                if(!visitados.has(vizinhos[i])){
                    pilha.push(vizinhos[i])
                }
            }
        }
    }
}
dfs(grafo, "A")
