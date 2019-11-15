require('dotenv').config()
const knex = require('knex');
const config = require('../../knexfile');

const environment = process.env.DB_ENV || 'development';
console.log('ENVIRONMENT CONST =', environment)
console.log(config[environment])

module.exports = knex(config[environment]);
