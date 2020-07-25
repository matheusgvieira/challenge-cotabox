
exports.up = function(knex) {
    return knex.schema.createTable('participants', function(table){
        table.increments('id').primary().unsigned();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.integer('participation').notNullable();
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('participants');
};
