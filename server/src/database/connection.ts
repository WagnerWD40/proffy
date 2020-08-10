import knex from 'knex';

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'proffy',
        password: 'proffy',
        database: 'proffy',
    },
    useNullAsDefault: true,
});

export default db;