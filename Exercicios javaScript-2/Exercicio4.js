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

elementosFake.forEach ((elemento, index) => {

    console.log("")
    console.log(`${index+1}`)
    console.log(`TagName: ${elemento.tagName}`)
    console.log(`Style Color: ${elemento.style.color} `)
    console.log(`Style Display: ${elemento.style.display}`)
    console.log(`ClassList: ${elemento.classList}: ${elemento.classList.length}`)
})