const elementosFake = [
  {
    tagName: 'DIV',
    style: { color: 'blue', display: 'flex' },
    classList: ['container', 'active']
  },
  {
    tagName: 'H1',
    style: { color: 'red', display: 'block' },
    classList: ['title']
  },
  {
    tagName: 'BUTTON',
    style: { color: 'white', display: 'inline-block' },
    classList: ['btn', 'btn-primary']
  }
];

const listaProcura = ['blue']

    elementosFake.forEach ((elemento) =>{

        if(listaProcura.includes (elemento.style.color)){

            console.log(`Cor do elemento ${elemento.tagName} é azul`)

        }
        else{
            console.log(`Cor do elemento ${elemento.tagName} não encontrado`)
        }

    })