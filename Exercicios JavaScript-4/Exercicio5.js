const apiProduto = [
    {id: 101, nome: 'monitor led', preco: 899.9},
    {id: 102, nome: 'teclado mecanico', preco: 250.0},
    {id: 103, nome: 'mouse gamer', preco: 125.45}
];

const produtosFormatados = apiProduto.map(nomes => { 

    return{

    id: nomes.id,
    nome: nomes.nome[0].toUpperCase() + nomes.nome.slice(1),
    preco: 'R$'+nomes.preco.toFixed(2)
    }
})

console.log(produtosFormatados)