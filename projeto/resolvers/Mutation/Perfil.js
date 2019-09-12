const { perfis, nextId } = require('../../data/db')

function indicePerfil ( filtro ) {
    if(!filtro) return -1
    const { id, name } = filtro
    if(id){
        return perfis.findIndex( p => p.id === id )
    }else if (name) {
        return perfis.findIndex( p => p.name === name )
    }
    return -1
}

module.exports = {
    newPerfil ( _, { dados } ) {
        const perfilExistente = perfis.some( us => us.name === dados.name)
        if ( perfilExistente ) {
            throw new Error('Perfil já cadastrado')
        }
        const novo = {
            id: nextId(),
            ...dados
        }
        perfis.push(novo)
        return novo
    },
    deletePerfil (  _, { filtro }) {
        const e = indicePerfil( filtro )
        if ( e < 0 ) return null
        const excluidos = perfis.splice( e, 1 )
        return excluidos ? excluidos[0] : null
    },
    upDataPerfil ( _, { filtro, dados }) {
        const i = indicePerfil(filtro)
        if( i < 0 ) return null
        perfil[i].name = dados.name
        return perfis[i]
    }
}
