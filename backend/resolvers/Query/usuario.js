const db = require('../../config/db')
const bcrypt = require('bcrypt-nodejs')
const { getUsuarioLogado } = require('../Comum/usuario')

module.exports = {
    async login(_, {dados} ){
        const usuario = await db('usuarios')
        .where({ email: dados.email })
        .first()

        if(!usuario) throw new Error('Usuário/Senha inválido')

        const saoIgual = bcrypt.compareSync(dados.senha, usuario.senha)

        if(!saoIgual) throw new Error('Usuário/Senha inválido')

        return getUsuarioLogado(usuario)
    },
    usuarios(parent, args, context) {
        context && context.validarAdmin()

        return db('usuarios')
    },
    usuario(_, { filtro }, context) {
        context && context.validarUsuarioFiltro(filtro)

        if(!filtro) return null
        const { id, email } = filtro
        if(id) {
            return db('usuarios')
                .where({ id })
                .first()
        } else if(email) {
            return db('usuarios')
                .where({ email })
                .first()
        } else {
            return null
        }
    },
}