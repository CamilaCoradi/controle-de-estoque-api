import pedidos from "../infra/pedido.js";
import produtos from "../infra/produto.js"

class pedidosService {

    async listarPedidos() {
        return await pedidos.find();
    }

    async listarPedidoPorId(id) {
        return await pedidos.findById(id);
    }

    async cadastrarPedido(pedido) {
        let estoque = await produtos.find();
        pedido.items.forEach(async (item) => {
            var produtoEscolhido = estoque.filter(x => x._id == item.id);
            produtoEscolhido[0].qty_stock = produtoEscolhido[0].qty_stock - item.qtd;
            await produtos.findByIdAndUpdate(item.id, { $set: produtoEscolhido[0] });
        });
        let pedidoRequest = new pedidos(pedido);
        return await pedidoRequest.save();
    }

    async atualizarPedido(id, Pedido) {
        return await pedidos.findByIdAndUpdate(id, { $set: Pedido });
    }

    async excluirPedido(id) {
        return await pedidos.deleteOne(id);
    }

}

export default pedidosService;



