const controleEstoque = (produto) => {

    if (produto < 5){

        console.log("Estoque Crítico");
    }
    else{
        console.log("Estoque normal");
    }
    return produto;

};

console.log(`Placa lavadora bw14 W1135393: ${controleEstoque(7)}`);