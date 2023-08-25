const Sequelize = require('sequelize'); //importando
const db = require('../db/connection'); //importando a arquivo de apontamento

const Job = db.define('job', { // definindo o nome de cada objeto inserido
    title: {                    // campo da tabela do db
        type: Sequelize.STRING, // tipo do campo
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Job