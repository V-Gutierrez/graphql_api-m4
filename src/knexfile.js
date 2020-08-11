// Update with your config settings.

const env = require('../.env');

module.exports = {
  client: 'mysql',
  connection: {
    database: env.database,
    user: env.username,
    password: env.password,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
