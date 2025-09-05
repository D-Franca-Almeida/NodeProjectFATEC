const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const produtosController = require('./controllers/produtosController');


const app = express();
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
app.get('/', produtosController.exibirLista);
app.get('/produtos/adicionar', produtosController.exibirAdicionarProduto);
app.post('/produtos', produtosController.adicionarProduto);
app.get('/produtos/:id/editar', produtosController.exibirEdicao);
app.post('/produtos/:id/editar', produtosController.editarProduto);
app.get('/produtos/:id/excluir', produtosController.excluirProduto);


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
