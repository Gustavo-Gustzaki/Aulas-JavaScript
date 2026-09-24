const bonusSalarial = () => {

    let salarios = [2000, 1500,1375,500,800];

    let gastoTotal = 0;

    for (salario of salarios){

        if (salario >= 2000){
            
            salario = salario + (salario * 0.10);

            gastoTotal = gastoTotal + salario;
        }
        else {
            gastoTotal = gastoTotal + salario;
        }
        
    }
    return gastoTotal;
}
console.log(bonusSalarial());