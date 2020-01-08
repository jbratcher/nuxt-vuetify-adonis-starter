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
    username: faker.email(),
    full_name: faker.name(),
    email: faker.email(),
    password: faker.password(),
    profile_image_source: `https://i.pravatar.cc/150?u=${faker.email()}`,
  }
})

// Roles Factory

Factory.blueprint('App/Models/Role', async (faker, i, data) => {
  return {
    role_name: data.role_name
  }
})

// Posts Factory

Factory.blueprint('App/Models/Post', async (faker) => {
  const id = faker.integer({ min: 1, max: 300 });
  return {
    name: faker.sentence(),
    description: faker.sentence(3),
    body: faker.sentence(10),
    hero_image_source: `https://picsum.photos/id/${id}/1920/1080`
  }
})

// Examples Factory

Factory.blueprint('App/Models/Example', async (faker) => {
  return {
    int: faker.integer()
  }
})
