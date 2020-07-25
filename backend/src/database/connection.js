const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

if(!connection){
    console.log('Connection failed');
} else {
    console.log('Connection Done!')
}

module.exports = connection;