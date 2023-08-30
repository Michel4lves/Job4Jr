const express   = require('express'); // importando
const router    = express.Router(); // inicializando objeto de rota do express
const Job       = require('../models/Job'); // importando o modelo

const sequelize = require('sequelize'); // importando o sequelize poara configurar a busca
const Op        = sequelize.Op; // iniciando o pacote Op, do sequelize, para buscas complexas

// test route
// router.get('/test', (req, res) => { // pegando dados da rota 
//     res.send('deu certo')
// })

router.get('/add', function(req, res) { // rota para acessar a template add
    res.render('add');
})

// add job via post (criando a rota de adicionar dados ao banco)
router.post('/add', (req, res) => { // "/add" => nome da rota ou a rota em si

    let {title, description, salary, company, email, new_job} = req.body; // usando o destructure 

    // insert
    Job.create({    // criando a inserção utilizando os dados ramazenados nas variáveis
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))  // redirecionando a página após a inserção
    .catch(err => console.log(err));

});



// My routes:
router.get('/alljobs', function(req, res) {

    let search = req.query.job;
    let query = '%' + search + '%'; // PH -/. PHP, word -> wordpress, press -> wordpress

    if (!search) {
        Job.findAll({  // a partir do model Job
            order: [
                ['createdAt', 'DESC'] // usando o createdAt para ordenar de forma decrescente
            ]
        })
        .then(jobs => {
            res.render('alljobs', {jobs});
        })
        .catch(err => console.log(err));
    } else {
        Job.findAll({  // a partir do model Job
            where: {title: {[Op.like]: query}},
            order: [
                ['createdAt', 'DESC'] // usando o createdAt para ordenar de forma decrescente
            ]
        })
        .then(jobs => {
            res.render('alljobs', {jobs, search});
        })
        .catch(err => console.log(err));
    }


})





module.exports = router