const Sequelize = require('sequelize');
const db = require('../db/connection'); // Importe sua conexão com o banco de dados
const Job = require('./Job'); // Importe seu modelo de trabalho

const updateJobStatus = async () => {
    try {
        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

        // Atualize todos os registros onde new_job é 1 e a data de criação seja anterior a twoDaysAgo
        const updatedRows = await Job.update(
            { new_job: 0 },
            {
                where: {
                    new_job: 1,
                    createdAt: {
                        [Sequelize.Op.lt]: twoDaysAgo,
                    },
                },
            }
        );

        console.log(`Atualizados ${updatedRows} registros.`);
    } catch (error) {
        console.error('Erro ao atualizar o status do trabalho:', error);
    }
};

module.exports = updateJobStatus;
