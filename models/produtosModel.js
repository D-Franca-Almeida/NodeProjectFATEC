let produtos = [
    { id: 1, nome: "Arroz", quantidade: 10, preco: 5.50 },
    { id: 2, nome: "Feijão", quantidade: 8, preco: 7.20 },
    { id: 3, nome: "Macarrão", quantidade: 15, preco: 4.00 }
];

module.exports = {
    listar() {
        return produtos;
    },
    adicionar(produto) {
        produto.id = produtos.length + 1;
        produtos.push(produto);
    },
    editar(id, dados) {
        const produto = produtos.find((p) => p.id == id);
        if (produto) {
            produto.nome = dados.nome;
            produto.quantidade = parseInt(dados.quantidade);
            produto.preco = parseFloat(dados.preco);
        }
    },
    excluir(id) {
        produtos = produtos.filter((p) => p.id != id);
    }
};
