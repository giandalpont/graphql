const { usuarios, nextId } = require('../../data/db')

function indiceUsuario ( filtro ) {
    if(!filtro) return -1
    const { email, id } = filtro
    if(id){
        return usuarios.findIndex( u => u.id === id )
    } else if(email){
        return usuarios.findIndex( u => u.email === email )
    }
    return -1
}

module.exports = {
    // { name, email, idade }

    newUser ( _, { dados } ) {
        const emailExistente = usuarios.some( us => us.email === dados.email)
        if ( emailExistente ) {
            throw new Error('E-mail já cadastrado')
        }
        const novo = {
            id: nextId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novo)
        return novo
    },
    deleteUser (  _, { filtro }) {
        const e = indiceUsuario( filtro )
        if ( e < 0 ) return null
        const excluidos = usuarios.splice( e, 1 )
        return excluidos ? excluidos[0] : null
    },
    upDataUser ( _, { filtro, dados }) {
        const i = indiceUsuario(filtro)
        // const i = usuarios.findIndex( u => u.id === args.id )
        if( i < 0 ) return null

        usuarios[i].name = dados.name
        usuarios[i].email = dados.email
        if(dados.idade)
            usuarios[i].idade = dados.idade
        return usuarios[i]

        // const usuario = { 
        //     ...usuarios[i],
        //     ...args
        // }
        // usuarios.splice( i, 1, usuario )
        // return usuario
    }
}
