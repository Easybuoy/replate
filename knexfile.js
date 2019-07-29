require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: { directory: './src/data/seeds' },
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_URL,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: { directory: './src/data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: { directory: './src/data/seeds' },
  },
};
