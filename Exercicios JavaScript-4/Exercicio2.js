const produtos = [ {nome: 'Teclado', preco: 100}, {nome: 'Mouse', preco: 50}];
const desconto = produtos.map(produtos => produtos.preco - (produtos.preco*0.10))

console.log(desconto)