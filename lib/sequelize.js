const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('databaseIsis', '', '', {
    dialect: 'sqlite',
    storage: './database/databaseISIS.sqlite'
});

sequelize.authenticate().then(() => console.log('sequelize works'));

module.exports = sequelize;