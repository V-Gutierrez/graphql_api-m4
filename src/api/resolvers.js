const db = require('../config/database');

module.exports = {
  Query: {
    async getUser(_, { id }) {
      return db('users').where({ id }).first();
    },

    async getUsers() {
      return db('users');
    },
  },

  Mutation: {
    async createUser(_, { input }) {
      const resultado = await db('users').insert({
        name: input.name,
        email: input.email,
        password: input.password,
      });

      const id = resultado[0];
      return db('users').where({ id }).first();
    },
  },
};
