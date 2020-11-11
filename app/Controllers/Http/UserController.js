'use strict'

class UserController {
  async index (){
    return { result: 'Buscou todos os usuários'}
  }

  async show (){
    return { result: 'Exibiu os dados do usuário 1'}
  }

  async store (){
    return { result: 'Criou um novo usuário'}
  }

  async update (){
    return { result: 'Atualizou o usuário 1'}
  }

  async destroy (){
    return { result: 'Removeu o usuário 1'}
  }
}

module.exports = UserController
