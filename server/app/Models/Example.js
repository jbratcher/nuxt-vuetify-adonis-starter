'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Example extends Model {

  user() {
    return this.hasOne('App/Models/User')
  }

  posts() {
    return this.hasMany('App/Models/Post')
  }

}

module.exports = Example
