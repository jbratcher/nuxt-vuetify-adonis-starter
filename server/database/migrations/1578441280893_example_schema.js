'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExampleSchema extends Schema {
  up () {
    this.create('examples', (table) => {
      table.increments()
      table.integer("int").nullable()
      table.bigInteger("big_int").nullable()
      table.text("text").nullable()
      table.string("string").nullable()
      table.float("float").nullable()
      table.decimal("decimal").nullable()
      table.boolean("boolean").nullable()
      table.date("date").nullable()
      table.datetime("datetime").nullable()
      table.time("time").nullable()
      table.timestamp("timestamp").nullable()
      table.timestamps()
      table.binary("binary").nullable()
      table.enum('column', ['value1', 'value2']).nullable() // also table.enu()
      table.json("json").nullable()
      table.jsonb("jsonb").nullable()
      table.uuid("uuid").nullable()
    })
  }

  down () {
    this.drop('examples')
  }
}

module.exports = ExampleSchema
