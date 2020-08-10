import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'proffy',
        password: 'proffy',
        database: 'proffy',
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    useNullAsDefault: true,
};