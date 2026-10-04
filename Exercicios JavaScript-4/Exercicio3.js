const carrinho = [25.50, 10.00, 100.00, 5.00];
const soma = carrinho.reduce((somas, precos) => somas + precos, 0)

console.log(soma.toFixed(2))