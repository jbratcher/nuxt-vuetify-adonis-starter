'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');
  Route.get('current-user', 'UserController.getCurrentUser');
  Route.get('users/:id', 'UserController.show');

  Route.get('posts', 'PostController.index');
  Route.get('posts/:id', 'PostController.show');
  Route.post('posts', 'PostController.create');
  Route.patch('posts/:id', 'PostController.update');
  Route.delete('posts/:id', 'PostController.destroy');

})
  .prefix('api');
