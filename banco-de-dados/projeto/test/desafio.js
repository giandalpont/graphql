const db = require('../config/db')

/*  função para adicionar e atualizar usuário,
    se não tiver usuário adiciona e se tiver astualiza.
*/
async function salvarUsuario(name, email, password) {
    let usuario = await db('usuarios')
        .where({ email }).first()

    if(!usuario) {
        let [ id ] = await db('usuarios')
            .insert({ name, email, password })
        usuario = await db('usuarios')
            .where({ id }).first()
    } else {
        await db('usuarios')
            .where({ id: usuario.id })
            .update({ name, email, password })
        usuario = { ...usuario, name, email, password }
    }

    return usuario
}

async function salvarPerfil(name, rotulo) {
    let perfil = await db('perfis')
        .where({ name }).first()

    if(!perfil){
        let [ id ] = await db('perfis')
            .insert({ name, rotulo })
        
        perfil = await db('perfis')
            .where({ id }).first()
            .update({ name, rotulo })
        
        perfil = { ...perfil, name, rotulo }
    }
    return perfil
}

async function adicionarPerfis(usuario, ...perfis) {
    const  usuario_id = usuario.id
    await db('usuarios_perfis')
        .where({ usuario_id })
        .delete()
    for( perfil of perfis ) {
        const perfil_id = perfil.id
        await db('usuarios_perfis')
            .insert({ usuario_id, perfil_id })
    }
}

async function executar() {
    const usuario = await salvarUsuario('Ana Silva', 'ana.silva@empresa.com.br', '123456')
    const perfilA = await salvarPerfil('rh_1', 'Pessoal')
    const perfilB = await salvarPerfil('fin_1', 'Financeiro')

    console.log(usuario)
    console.log(perfilA)
    console.log(perfilB)

    await adicionarPerfis(usuario, perfilA, perfilB)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())