const { usuarios, perfis } = require('../data/db')

module.exports = {
    usuarios () {
        return usuarios
    },
    usuario (_, { filtro }) {
        const i = indiceUsuario( filtro )
        if ( i < 0 ) return null
        return usuarios[i] 
        // const select = usuarios.filter(user => user.id === id )
        // return select ? select[0] : null
    },
    perfis () {
        return perfis
    },
    perfil ( _, { id }) {
        const perfID = perfis.filter( p => p.id === id )
        return perfID ? perfID[0] : null
    }
}