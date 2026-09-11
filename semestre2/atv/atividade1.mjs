import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}

// Array de objetos para armazenar os alunos
let alunos = [];

// Limite máximo de alunos
const LIMITE_ALUNOS = 50;

function cadastrarAluno(nome, ra, idade, sexo, media) {

    if (alunos.length >= LIMITE_ALUNOS) {
        console.log("\nLimite máximo de alunos atingido!");
        return;
    }

    // Define o resultado de acordo com a média
    let resultado;

    if (media >= 6.0) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }

    // Criação do objeto aluno
    const aluno = {
        nome: nome,
        ra: ra,
        idade: idade,
        sexo: sexo,
        media: media,
        resultado: resultado
    };

    // Adiciona o aluno ao Array
    alunos.push(aluno);

    console.log("\nAluno cadastrado com sucesso!");
}


function ordenarNomeCrescente(lista) {

    // Copia o array para não alterar o original
    let copia = [...lista];

    // Selection Sort
    for (let i = 0; i < copia.length - 1; i++) {

        let menor = i;

        for (let j = i + 1; j < copia.length; j++) {

            if (copia[j].nome.toLowerCase() <
                copia[menor].nome.toLowerCase()) {

                menor = j;
            }
        }

        // Troca os elementos
        let temp = copia[i];
        copia[i] = copia[menor];
        copia[menor] = temp;
    }

    return copia;
}

function ordenarRADecrescente(lista) {

    let copia = [...lista];

    // Selection Sort
    for (let i = 0; i < copia.length - 1; i++) {

        let maior = i;

        for (let j = i + 1; j < copia.length; j++) {

            if (Number(copia[j].ra) >
                Number(copia[maior].ra)) {

                maior = j;
            }
        }

        // Troca os elementos
        let temp = copia[i];
        copia[i] = copia[maior];
        copia[maior] = temp;
    }

    return copia;
}



function exibirAlunos(lista) {

    if (lista.length === 0) {
        console.log("\nNenhum aluno cadastrado.");
        return;
    }

    console.log("\n==========================================");
    console.log("             RELATÓRIO DE ALUNOS");
    console.log("==========================================");

    lista.forEach((aluno, indice) => {

        console.log(`\nAluno ${indice + 1}`);
        console.log("------------------------------------------");
        console.log(`Nome:      ${aluno.nome}`);
        console.log(`RA:        ${aluno.ra}`);
        console.log(`Idade:     ${aluno.idade}`);
        console.log(`Sexo:      ${aluno.sexo}`);
        console.log(`Média:     ${aluno.media.toFixed(1)}`);
        console.log(`Resultado: ${aluno.resultado}`);
    });

    console.log("==========================================");
}


function relatorioNomeCrescente() {

    const listaOrdenada = ordenarNomeCrescente(alunos);

    console.log("\n*** ALUNOS EM ORDEM CRESCENTE POR NOME ***");

    exibirAlunos(listaOrdenada);
}



function relatorioRADecrescente() {

    const listaOrdenada = ordenarRADecrescente(alunos);

    console.log("\n*** ALUNOS EM ORDEM DECRESCENTE POR RA ***");

    exibirAlunos(listaOrdenada);
}


function relatorioAprovados() {

    // Filtra somente os aprovados
    const aprovados = alunos.filter(
        aluno => aluno.resultado === "Aprovado"
    );

    // Ordena os aprovados pelo nome
    const listaOrdenada = ordenarNomeCrescente(aprovados);

    console.log("\n*** ALUNOS APROVADOS EM ORDEM CRESCENTE POR NOME ***");

    exibirAlunos(listaOrdenada);
}


cadastrarAluno("Carlos", "105", 20, "M", 7.5);
cadastrarAluno("Ana", "102", 19, "F", 8.5);
cadastrarAluno("João", "110", 22, "M", 5.5);
cadastrarAluno("Beatriz", "101", 20, "F", 9.0);
cadastrarAluno("Pedro", "108", 21, "M", 6.0);


// ==========================================
// MENU PRINCIPAL
// ==========================================


let opcao;

do {

    console.log("\n==========================================");
    console.log("       CADASTRO DE ALUNOS - FACULDADE");
    console.log("==========================================");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Relatório por Nome Crescente");
    console.log("3 - Relatório por RA Decrescente");
    console.log("4 - Relatório dos Aprovados por Nome");
    console.log("0 - Sair");
    console.log("==========================================");

    opcao = await perguntar("Escolha uma opção: ");

    switch (opcao) {

        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = await perguntar("Nome: ");
            let ra = await perguntar("RA: ");
            let idade = Number(await perguntar("Idade: "));
            let sexo = await perguntar("Sexo: ");
            let media = Number(await perguntar("Média: "));

            // Validação da média
            if (media < 0 || media > 10 || isNaN(media)) {
                console.log("\nMédia inválida! Digite um valor entre 0 e 10.");
                break;
            }

            cadastrarAluno(nome, ra, idade, sexo, media);

            break;


        case "2":

            relatorioNomeCrescente();

            break;


        case "3":

            relatorioRADecrescente();

            break;


        case "4":

            relatorioAprovados();

            break;


        case "0":

            console.log("\nPrograma encerrado.");

            break;


        default:

            console.log("\nOpção inválida!");
    }

} while (opcao !== "0");