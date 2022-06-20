import produtos from "../infra/produto.js";

class produtosService {

    async listarProdutos() {
        return await produtos.find();
    }

    async listarprodutoPorId(id) {
        return await produtos.findById(id);
    }

    async cadastrarProduto(produto) {
        return await produtos.insertMany(produto);
    }

    async atualizarProduto(id, produto) {
        return await produtos.findByIdAndUpdate(id, { $set: produto });
    }

    async excluirProduto(id) {
        return await produtos.deleteOne(id);
    }

}

export default produtosService;



