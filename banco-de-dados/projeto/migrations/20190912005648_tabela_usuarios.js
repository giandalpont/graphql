
exports.up = function(knex, Promise) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password', 60).notNull()
        table.boolean('active').notNull().defaultTo(true)
        table.timestamp('date_creation').defaultTo(knex.fn.now())
    }).then(() => {
        return knex('usuarios').insert([
            { name: 'Gian Dal Ponr', email: 'gian@gian.com', password: 'gian' }
        ])
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('usuarios')
}
