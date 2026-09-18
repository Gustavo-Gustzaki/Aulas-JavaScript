const SomaPrecos = () =>{

    let precos = [10,55.98,29.32,11.94,69.91];

    let total = 0

    for (preco of precos ){

        total = total + preco

    }

        console.log(total.toFixed(2))
}
SomaPrecos();