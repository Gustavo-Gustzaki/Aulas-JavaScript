const valorCompra = () => {

    let valores = [35.50,582.47,99.99,9.95,150];

    for (const valor of valores){
        if (valor >= 150){
            console.log("Seu produto de R$"+valor.toFixed(2)+" é Frete Grátis");
        }
        else{
            console.log("Seu produto de R$"+valor.toFixed(2)+" tem que Cobrar Frete");
        }
    }

}
valorCompra();