'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Example = use('App/Models/Example')

/**
 * Resourceful controller for interacting with examples
 */
class ExampleController {
  /**
   * Show a list of all examples.
   * GET examples
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Example.all();
  }

  /**
   * Render a form to be used for creating a new example.
   * GET examples/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const user = await auth.getUser();
    const { name, description, body, image_source } = request.all();
    const example = new Example();
    example.fill({
      name,
      description,
      body,
      image_source,
      author_id: user.id,
      author_name: user.full_name,
    });
    await example.save()
    return example;
  }

  /**
   * Create/save a new example.
   * POST examples
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
    async store ({ request, response }) {
  }

  /**
   * Display a single example.
   * GET examples/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const { id } = params;
    return await Example.find(id);
  }

  /**
   * Render a form to update an existing example.
   * GET examples/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update example details.
   * PUT or PATCH examples/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const user = await auth.getUser();
    const { id } = params;
    const example = await Example.find(id);
    example.merge(request.all('name', 'description', 'body', 'image_source'));
    await example.save();
    return example;
  }

  /**
   * Delete a example with id.
   * DELETE examples/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const user = await auth.getUser();
    const { id } = params;
    const example = await Example.find(id);
    await example.delete();
    return example;
  }
}

module.exports = ExampleController
