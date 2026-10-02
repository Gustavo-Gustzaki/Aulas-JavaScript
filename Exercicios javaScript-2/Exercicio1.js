const elementosFake = [
  {
    tagName: 'DIV',
    style: { color: 'blue', display: 'flex' },
    classList: ['container', 'active']
  }]

 for (const propriedades in elementosFake){
    console.log(propriedades, '---', elementosFake[propriedades])
 }