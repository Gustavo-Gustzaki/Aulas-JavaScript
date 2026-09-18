const Roleta = () =>{

    let giros = 0

    do {

        if (giros <= 0 ){
            console.log("Girando a roleta....")
            giros = giros + 1
        }

    } while (giros !== 1)

    return giros;
}
console.log(`Quantidade de giros: ${Roleta()}`)