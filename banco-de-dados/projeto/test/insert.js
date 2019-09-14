const db = require('../config/db')

// const newPerfil = {
//     name: 'cadastrador',
//     rotulo: 'Cadastrador'
// }

// db('perfis').insert(newPerfil)
//     .then( res => console.log(res) )
//     .catch( err => console.log(err.sqlMessage ))
//     .finally( () => db.distroy() )

const perfilSU = {
    name: 'root' + Math.random(),
    rotulo: 'Super Usuário'
}

// insert into perfis (name, rotulo) values ( '...', '...')
db.insert(perfilSU).into('perfis')
    .then( res => console.log(res) )
    .catch( err => console.log(err.sqlMessage ))
    .finally( () => db.destroy() )