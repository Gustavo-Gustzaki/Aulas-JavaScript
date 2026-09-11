const readline = require('node:readline/promises');
const { stdin: input, stdout: output} = require('node:process');

async function pausa(rl) {

    await rl.question("Tecle [ENTER] para proseguir...") ;   
}

async function executar() {
    
    const rl = readline.createInterface({input, output});

    let numero = Number(await rl.question("Digite um número: "));

    console.log("Numero digitado: "+numero);

    await pausa(rl);

    console.clear();

    let desconto = 0.15
    let resultado = numero * desconto

    console.log("Seu número com desconto de "+(desconto*100)+"% é: "+(numero-resultado));

    rl.close();
}
executar();