const db = require('../config/db')

const newUser = {
    name: 'João',
    email: 'joao@gmail.com',
    password: '1234'
}

// updare... db(...).where({...}).update({...})

async function upDateUser(){
    // count
    const { qtde } = await db('usuarios')
        .count('* as qtde').first()
        // console.log(qtde)
    // inserir (se a tabela estiver vazia)
    if(qtde === 0){
        await db('usuarios').insert(newUser)
    }
    // consulta
    let { id } = await db('usuarios')
        .select('id').limit(1).first()
        // console.log(id) 
    // alterar
    await db('usuarios').where({ id })
        .update({ name: 'Gian Carlos Dal Pont', email: 'giandalpont@gmail.com' }) 

    return await db('usuarios').where({ id })
}

upDateUser()
    .then( usuario => console.log(usuario))
    .finally( () => db.destroy())