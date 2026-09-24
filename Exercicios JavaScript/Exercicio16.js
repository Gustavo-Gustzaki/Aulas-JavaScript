const listaVip = () => {

    let nomeBuscado = ['Gustavo','Fernanda','Henrique','Renan','Nicolas','Ramon'];

    let lista = ['Gustavo','Renan','Fernanda']

    for (const nomeBusca of nomeBuscado){

        if (lista.includes (nomeBusca)){

            console.log(`${nomeBusca}: true`)
        }
        else{
            console.log(`${nomeBusca}: false`)
        }

    }
    return nomeBuscado;
}
listaVip();