'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('cards', (table) => {
      table.increments().primary(['pk_cards'])
      table.string('title', 80)
      table.string('color_rgb', 254)

    })

    this.create('tasks',(table) => {
      table.increments().primary(['pk_tasks'])
      table.string('description',254)
      table.string('color_rgb',254)
      table.boolean('done')
      table.boolean('paused')
      table.boolean('finish_at')

    })

    this.create('card_tasks',(table) => {
      table.bigInteger('id_card')
      table.bigInteger('id_task')


    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
