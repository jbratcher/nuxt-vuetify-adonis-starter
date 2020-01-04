'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostUserSchema extends Schema {
  up () {
    this.create('post_users', (table) => {
      table.increments()
      table.integer('author_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('cascade')
    })
  }

  down () {
    this.drop('post_users')
  }
}

module.exports = PostUserSchema
