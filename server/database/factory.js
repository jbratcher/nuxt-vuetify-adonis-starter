'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Users Factory

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    full_name: faker.name(),
    email: faker.email(),
    password: faker.password(),
  }
})

// Roles Factory

Factory.blueprint('App/Models/Role', async (faker, i, data) => {
  return {
    role_name: data.role_name
  }
})

// Spaces Factory

Factory.blueprint('App/Models/Space', async (faker) => {
  return {
    name: faker.name(),
    full_address: faker.address(),
    description: faker.sentence(3),
  }
})

