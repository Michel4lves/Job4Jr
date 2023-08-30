const express       = require('express'); //Importando
const exphbs        = require('express-handlebars');  //Importando
const app           = express(); //Inicializando
const path          = require('path');  //Importando
const db            = require('./db/connection'); //importando a arquivo de apontamento
const bodyParser    = require('body-parser'); // importando
const Job           = require('./models/Job'); // importando o modelo


const PORT      = 3000;

// fazendo o express monitorar uma posta:
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));    // usando o body-parser conforme documentação

// handle bars
app.set('views', path.join(__dirname, 'views')); // setando o local das views do projeto
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' })); // informando a utilização do handlebars e informando o layout principal
app.set('view engine', 'handlebars'); // informando a utilização do handlebars para renderização das views

// static folder
app.use(express.static(path.join(__dirname, 'public'))); // setando o local dos arquivos estáticos

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
    // res.send('Its works!');  //      resposta.send('valor retornado');
    Job.findAll({  // a partir do model Job
        order: [
            ['createdAt', 'DESC'] // usando o createdAt para ordenar de forma decrescente
        ],
        limit: 3 // Limitando a busca aos três últimos registros
    })
    .then(jobs => {
        res.render('index', {jobs});
    })
});

// jobs routes
app.use('/jobs', require('./routes/jobs')); // usando o arquivo de rotas "jobs" da pasta "routes"

