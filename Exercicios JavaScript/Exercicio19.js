const trajetoRobo = () => {
    
    let distanciaparede = 25

    let passos = 0 

    while (passos <= distanciaparede){

        console.log("Andando...")
        passos = passos + 1
         
        if (passos === distanciaparede){
             break;
        }
    }
    console.log("Bateu e Parou")
}
console.log(trajetoRobo());