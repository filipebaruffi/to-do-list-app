"use strict";

const CardController = require("./CardController");
const Task = use("App/Models/Task");
const CardTask = use("App/Models/CardTask");
const Card = use("App/Models/Card");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
    /**
     * Show a list of all tasks.
     * GET tasks
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        const termo = request.get();
        const data = await Task.search(termo);
        return data;
    }

    /**
     * Create/save a new task.
     * POST tasks
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */

    async store({ request, response }) {
        const desc = await request.only("description");
        const task = await Task.create(desc);
        const cardTask = await CardTask.create({
            id_card: request.params.id,
            id_task: task.id
        });
        return response.send({ message: "Task criado com sucesso!" });
    }

    /**
     * Display a single task.
     * GET tasks/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing task.
     * GET tasks/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update task details.
     * PUT or PATCH tasks/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a task with id.
     * DELETE tasks/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = TaskController;
