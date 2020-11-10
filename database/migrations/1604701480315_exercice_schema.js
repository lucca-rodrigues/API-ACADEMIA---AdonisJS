'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExerciceSchema extends Schema {
  up () {
    this.create('exercices', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('observation', 50)
      table.integer('series')
      table.integer('waiting_time')
      table.string('url_image', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('exercices')
  }
}

module.exports = ExerciceSchema
