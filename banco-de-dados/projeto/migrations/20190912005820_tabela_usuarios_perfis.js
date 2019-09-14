
exports.up = function(knex, Promise) {
    return knex.schema.createTable('usuarios_perfis', table => {
        table.integer('usuario_id').unsigned()
        table.integer('perfil_id').unsigned()
        table.foreign('usuario_id').references('usuarios_id')
        table.foreign('perfil_id').references('perfis_id')
        table.primary(['usuario_id', 'perfil_id'])
    } )
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('usuarios_perfis')
}
