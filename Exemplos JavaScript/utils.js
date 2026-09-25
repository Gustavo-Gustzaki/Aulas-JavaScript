export function saudacao (nome = "Visitante") {
    console.log(`olá ${nome}`)
}
//-----------------------------------------------
export const dobro = n => n * 2;

//-----------------------------------------------

export const valor = (numero) => {

    return `R$${numero.toFixed(2)}`;
}
//-----------------------------------------------
export const verificacao = (string) => {

    let termos = ['@','.'];

    let vericaString = false

    if (string.includes('@','.')){
        
        vericaString = true
        console.log(vericaString)
    }
    else{
        console.log(vericaString)
    }
    return string;
}
//----------------------------------------------------
export const dataAtual = (numero) => {

    let data = new Date

    data.setFullYear(2026,9,24)
    
    return data.toLocaleDateString({year: 'numeric', month: '2-digit', day: '2-digit'});

    
}