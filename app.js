const express    = require('express');
const bodyparser = require('body-parser');
const pegarjogos = require ('./functions/procurarjogo');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');
app.use(bodyparser.urlencoded({extended: true}));
app.set(bodyparser.json());

app.get('/', async (req, res) =>{
    res.render('index', {jogos: []});
});

app.post('/', async (req, res) =>{
    const jogo = req.body;
    res.render('index', {jogos: await pegarjogos(jogo.nome, jogo.nota)});
});


const porta = 666;

app.listen(porta);



