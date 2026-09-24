const missoesJogo = () => {

    let analisarMissoes = [
        {nome: "Final boss", pontos:5000},
        {nome: "Tudo ou nada", pontos:200},
        {nome: "Amigos a parte", pontos:800},
        {nome: "shopping", pontos:100}
    ];

    for (const analisarMissoe of analisarMissoes){

        if (analisarMissoe.pontos >= 500){

            console.log(analisarMissoe.nome+" -Missão Dificil");
        }
        else if (analisarMissoe.pontos >= 200 && analisarMissoe <=499){

            console.log(analisarMissoe.nome+" -Missão média");
        }
        else {
            console.log(analisarMissoe.nome+" -Missão fácil");
        }
    }
}
missoesJogo()