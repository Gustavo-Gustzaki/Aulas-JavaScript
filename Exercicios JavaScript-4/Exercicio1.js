const usuarios = [

    {nome: 'Ana', ativo: true},
    {nome: 'Beto', ativo: false},
    {nome: 'Caio', ativo: true},
    {nome: 'Duda', ativo: false}
];

const usuariosVerificacao = usuarios.filter(usuarios => usuarios.ativo === true)
console.log(usuariosVerificacao)