const ProdutosModel = require('../models/produtosModel');

module.exports = {
    exibirLista(req, res) {
        const produtos = ProdutosModel.listar();
        res.render('listaProdutos', { produtos });
    },
    exibirAdicionarProduto(req, res) {
        res.render('adicionarProduto');
    },
    adicionarProduto(req, res) {
        const novoProduto = {
            nome: req.body.nome,
            quantidade: parseInt(req.body.quantidade),
            preco: parseFloat(req.body.preco)
        };
        ProdutosModel.adicionar(novoProduto);
        res.redirect('/');
    },
    exibirEdicao(req, res) {
        const { id } = req.params;
        const produto = ProdutosModel.listar().find((p) => p.id == id);
        res.render('editarProduto', { produto });
    },
    editarProduto(req, res) {
        const { id } = req.params;
        ProdutosModel.editar(id, req.body);
        res.redirect('/');
    },
    excluirProduto(req, res) {
        const { id } = req.params;
        ProdutosModel.excluir(id);
        res.redirect('/');
    }
};
