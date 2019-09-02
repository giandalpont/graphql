const { perfis } = require('../data/db')

module.exports = {
    salario(usuario){
        return usuario.salario_real
    },
    perfil ( usuario) {
        const perfID = perfis.filter( p => p.id === usuario.perfil_id )
        return perfID ? perfID[0] : null
    }
}