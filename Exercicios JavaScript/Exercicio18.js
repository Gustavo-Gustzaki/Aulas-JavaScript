const reverteFuncao = () => {

    let booleano = [true, false];

    let traduzirBoleano = [];

    for (const traduzboleano of booleano){

        if (traduzboleano === true){
            
            traduzirBoleano.push("Concluido");
        }
        else{
            traduzirBoleano.push("Pendente");
        }
    }
    return traduzirBoleano;
}
console.log(reverteFuncao());

