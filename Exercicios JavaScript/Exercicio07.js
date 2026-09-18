const energiaInicial = (energia) => {

    while (energia <= 100 && energia > 0){
        console.log(energia)
        energia = energia - 10
    }
    return energia;
}

console.log(`energia atual: ${energiaInicial(90)}`)