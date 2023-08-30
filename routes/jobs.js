const express   = require('express'); // importando
const router    = express.Router(); // inicializando objeto de rota do express
const Job       = require('../models/Job'); // importando o modelo

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
    Job.findAll({  // a partir do model Job
        order: [
            ['createdAt', 'DESC'] // usando o createdAt para ordenar de forma decrescente
        ]
    })
    .then(jobs => {
        res.render('alljobs', {jobs});
    })
})





module.exports = router