const grafo = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
}

// implementação do algoritmo de busca em largura (BFS)

function bfs(g, start) {
    const visited = new Set();
    const queue = [start];

    visited.add(start);

    while (queue.length > 0) {
        const no = queue.shift();

        for (const vizinho of g[no] || []) {
            if (!visited.has(vizinho)) {
                visited.add(vizinho);
                queue.push(vizinho);
            }
        }
    }

    return Array.from(visited);
}

export default bfs;

const grafo = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
}

//implementação do algoritmo de busca em largura (BFS)

function bfs(g, start) {
    //o set é uma estrutura de dados nativa do js ()
    const visited = new Set();

    const stack = new Stack();

    fila.enqueue(inicio)

    //criar um laço que vai rodar enquanto a fila não estiver
    while(!fila.isEmpty){
        //remove o primeiro elemento da fila
        const no = fila.dequeue()

        if(!visited.has(no)){
            //imprime o nó no controle
            console.log(no)

            //metodo para adicionar 
            visitados.add(no)

            //percorre cada um dos visitantes do nó atual da lista de adjacencia
            for(const vizinho of grafo[no]){
                if(!visitados.has(vizinhos)){
                    fila.enqueue(vizinho)
                }
            }
        }
    }    

}   
bfs(grafo, 'A')                                                                                               