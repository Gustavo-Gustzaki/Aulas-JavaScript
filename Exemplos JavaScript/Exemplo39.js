const numeros = [1,2,3,4,5];

const resultados = numeros

    .filter(n => n % 2 === 0)
    .map(n => n* 10);

    console.log(resultados);