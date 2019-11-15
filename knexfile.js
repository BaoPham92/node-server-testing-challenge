// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/Data/users.db3'
    },
    migrations: {
      directory: './src/Data/migrations',
    },
    seeds: {
      directory: './src/Data/seeds',
    }
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/Data/test.db3',
    },
    migrations: {
      directory: './src/Data/migrations',
    },
    seeds: {
      directory: './src/Data/seeds',
    },
  },

};
