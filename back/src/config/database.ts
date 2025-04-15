import knex from 'knex';

const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'EtBd2IM9PgrXkeTXm1l9dQ',
    database: 'tablespoon'
  }
});

export default db;
