exports.up = function(knex) {
  return knex.schema.createTable("actions", table => {
    actions.increments();
    table
      .integer("project_id")
      .unsigned()
      .notNullable();
    table.string("description", 128).notNullable();
    table.text("notes").notNullable();
    table.boolean("completed").defaultTo(false);
    table
      .foreign("project_id")
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("actions");
};
