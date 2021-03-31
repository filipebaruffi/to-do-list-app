'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('cards', (table) => {
      table.increments().primary('pk_cards')
      table.string('title', 80).notNullable()
      table.string('color_rgb', 254)
      table.timestamps()

    })

    this.create('tasks',(table) => {
      table.increments().primary('pk_tasks')
      table.string('description',254).notNullable()
      table.string('color_rgb',254)
      table.boolean('done')
      table.boolean('paused')
      table.timestamps('finish_at')

    })

    this.create('card_tasks',(table) => {
      table.integer('id_card').unsigned().notNullable().references('id').inTable('cards')
      table.integer('id_task').unsigned().notNullable().references('id').inTable('tasks')


    })
  }

  down () {
    this.drop('card_tasks')
    this.drop('tasks')
    this.drop('cards')
  }
}

module.exports = UserSchema
