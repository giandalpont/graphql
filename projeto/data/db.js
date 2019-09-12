let id = 1

function nextId(){
    return id++
}

const perfis = [
    { id: 1, name: 'Comum' },
    { id: 2, name: 'Administrador' }
]

const usuarios = [{
    id: nextId(),
    name: 'Gian Dal Pont',
    email: 'gian@gian.com',
    idade: 23,
    perfil_id: 1,
    status: 'ATIVO'
},
{
    id: nextId(),
    name: 'Ander',
    email: 'ander@ander.com',
    idae: 26,
    perfil_id: 2,
    status: 'INATIVO'
},
{
    id: nextId(),
    name: 'Ander',
    email: 'ander@ander.com',
    idae: 26,
    perfil_id: 2,
    status: 'BLOQUEADO'
}]

module.exports = { perfis, usuarios, nextId }