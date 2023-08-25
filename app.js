const express       = require('express'); //Importando
const app           = express(); //Inicializando
const db            = require('./db/connection'); //importando a arquivo de apontamento
const bodyParser    = require('body-parser');

const PORT      = 3000;

// fazendo o express monitorar uma posta:
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db // arquivo de apontamento importado.
    .authenticate() // método para conectar o banco de dados.
    .then(() => {
        console.log('Data bank connection success')
    })
    .catch(err => {
        console.log('Data bank connection error: ', err)
    });

// routes
app.get('/', function(req, res) {   // app.get('rota', function que retorna uma requisição e/ou uma resposta) { 
    res.send('Its works!');         //      resposta.send('valor retornado');
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));

