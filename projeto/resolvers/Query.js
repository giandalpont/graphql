const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola(){
        return `Hello world!`
    },
    data(){
        return new Date
    },
    userLog(){
        return {
            id: 1,
            name: `Gian Dal Pont`,
            mail: `gian@gian.com.br`,
            idade: 23,
            salario_real: 370.98,
            vip: true
        }
    },
    produto () {
        return {
            id: 2,
            nome: `Cerveja Lager`,
            preco: 200,
            desconto: 10,
        }
    },
    numeroSort () {
        let crescente = (a,b) => a - b
        return Array(6).fill(0)
        .map( n => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    },
    usuarios () {
        return usuarios
    },
    usuario (_, { id }) {
        const select = usuarios.filter(user => user.id === id )
        return select ? select[0] : null
    },
    perfis () {
        return perfis
    },
    perfil ( _, { id }) {
        const perfID = perfis.filter( p => p.id === id )
        return perfID ? perfID[0] : null
    }
}