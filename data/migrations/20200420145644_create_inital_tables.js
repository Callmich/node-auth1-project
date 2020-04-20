
exports.up = function(knex) {
  return knex.schema
    .createTable('users', users =>{
        users.increments('id');
        users.string('username', 32)
          .notNullable()
          .unique();
        users.string('password', 128)
          .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
