const listaAnos = () => {

    let anoFinal 

    for(anoFinal = 2000; anoFinal <=4525; anoFinal++){

        if(anoFinal % 4 === 0 ){

            console.log(anoFinal)
        }
    }
    return anoFinal;
}
listaAnos() 