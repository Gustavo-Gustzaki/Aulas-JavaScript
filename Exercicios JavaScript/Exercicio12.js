const alunosAprovados = () =>{

    let notas = [10,8.5,6.45,3.5];

    for (const nota of notas){
        if ( nota >= 7){
            console.log("Aprovado! Nota: "+nota.toFixed(2))
        }
        else{
            console.log("Desaprovado! Nota: "+nota.toFixed(2))
        }
    }

}
console.log(alunosAprovados())
