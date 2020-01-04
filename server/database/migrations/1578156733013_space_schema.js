'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpaceSchema extends Schema {
  up () {
    this.create('spaces', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('spaces')
  }
}

module.exports = SpaceSchema
