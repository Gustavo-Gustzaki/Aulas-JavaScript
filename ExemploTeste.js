import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output }); //coloca a interface rl

console.log("Bm vindo ao teste!");
let escolha = await rl.question("Vamos começar? ");

if (escolha == "sim") {
    let local = "Deu certo!";
    console.log(local);

    console.clear()
    console.log("Vou dizer qual é o meu nome...");
    const nome = "Maria";
    const ExecutaNome = `Meu nome é ${nome}`;

    console.log(ExecutaNome);
    rl.close();
};

