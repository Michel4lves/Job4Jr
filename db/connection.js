const Sequelize = require('sequelize'); //importando

// inicializando (instanciando) 
const sequelize = new Sequelize({
    dialect: 'sqlite', //tipo de banco de dados
    storage: './db/bank.db' //local do banco/arquivo.db
});

module.exports = sequelize; // exportando a instância sequelize
