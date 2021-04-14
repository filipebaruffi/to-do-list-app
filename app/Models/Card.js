"use strict";
var lodash = require("lodash");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Card extends Model {
    static search(termo) {
        if (!lodash.isEmpty(termo)) {
            console.log(termo);
            const card = this.query()
                .where("title", "LIKE", "%" + termo.termo + "%")
                .fetch();
            return card;
        } else {
            const card = this.query().fetch();
            return card;
        }
    }
}

module.exports = Card;
