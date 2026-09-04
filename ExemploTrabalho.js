const frutas = ['Maçã', 'Banana', 'Uva', 'Melancia'];

for (const fruta of frutas) {
  console.log(fruta);
}
console.log();
console.log("Vamos adiconar Futas...");

frutas.unshift('Morango'); //adiciona a fruta no inicio

frutas.push('Perá'); // Adiciona a fruta no Final

for (const fruta of frutas) {
  console.log(fruta);
}
console.log();
console.log("Vamos Tirar frutas..");

frutas.pop(); // Remove oque está no Final

frutas.shift(); //Remove oque está no inicio

frutas.splice(1, 1); //Remove por indice

for (const fruta of frutas) {
  console.log(fruta);
}
