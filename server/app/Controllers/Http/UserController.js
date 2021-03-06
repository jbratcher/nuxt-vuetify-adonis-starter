'use strict'

const User = use('App/Models/User');

class UserController {

  async index() {
    return await User.all();
  }

  async show ({ auth, params }) {
    const { id } = params
    const user = await auth.getUser();
    if (user.id !== Number(id)) {
      return 'You cannot see someone else\'s profile'
    }
    return user;
  }

  async getCurrentUser({ auth }) {
    const user = await auth.getUser();
    return user;
  }

  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }

  async register({ request }) {
    const { email, firstName, lastName, password } = request.all();
    console.log(email, firstName, lastName, password);
    const user = await User.create({
      email,
      full_name: `${firstName} ${lastName}`,
      password,
      profile_image_source: `https://ui-avatars.com/api/?name=${firstName}+${lastName}`,
      username: email
    });
    return this.login(...arguments);
  }

}

module.exports = UserController
