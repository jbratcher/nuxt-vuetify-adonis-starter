'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.integer('author_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.string('author_name').notNullable().default('Jeremy Bratcher')
      table.string('name').notNullable()
      table.text('description').nullable()
      table.text('body').nullable()
      table.string('hero_image_source').nullable()
      table.timestamps()
      table.timestamp('deleted_at').nullable()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
