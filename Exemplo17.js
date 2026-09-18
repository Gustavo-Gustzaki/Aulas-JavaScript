const isAdulto = function(idade){
   
    if (idade >= 18){
        idade = true
    }else{
        idade = false
    }
    return idade;

}
console.log(`resultado é: ${isAdulto(18)}`)

console.log("----------------------------------------------")

const getAreaQuadrado = function(a, b){

    return a * b;
}
console.log(`Resultado é: ${getAreaQuadrado(5, 3)}`)

console.log("----------------------------------------------")

const formatarReal = (valor) => {

    valor = "R$"+valor.toFixed(2);

    return valor;
}

console.log(`O resultado é: ${formatarReal(5)}`)