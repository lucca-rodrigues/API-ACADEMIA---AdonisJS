'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/teste', () => {
  return { greeting: 'OK, Rota de teste'}
})

Route.resource('users', 'UserController').apiOnly()
Route.resource('clients', 'ClientController').apiOnly()
Route.resource('exercices', 'ExerciceController').apiOnly()
Route.resource('trainings', 'TrainginController').apiOnly()
