'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Exercice extends Model {
  trainings() {
    return this.belongsToMany('App/Models/Training')
  }
}

module.exports = Exercice
