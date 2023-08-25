const express   = require('express'); // importando
const router    = express.Router(); // inicializando objeto de rota do express
const Job       = require('../models/Job'); // importando o modelo

// test route
router.get('/test', (req, res) => { // pegando dados da rota 
    res.send('deu certo')
})

// add job via post (criando a rota de adicionar dados ao banco)
router.post('/add', (req, res) => { // "/add" => nome da rota ou a rota em si

    let {title, description, salary, company, email, new_job} = req.body; // usando o destructure 

    // insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router