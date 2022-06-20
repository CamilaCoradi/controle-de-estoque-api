import pedidos from "../infra/pedido.js";
import pedidosService from "../service/pedidosService.js"

class pedidoController {

  static listarpedidos = async (req, res) => {
    let pedido = new pedidosService();
    res.status(200).json(await pedido.listarPedidos())
  }

  static listarpedidoPorId = async (req, res) => {
    let pedido = new pedidosService();
    res.status(200).json(await pedido.listarPedidoPorId(req.params.id))
  }

  static cadastrarpedido = async (req, res) => {
    let estoque = new pedidosService();
    estoque.cadastrarPedido(req.body)
      .then(function (result) {
        res.status(201).send({ message: 'Produtos cadastrados com sucesso!' });
        return;
      }).catch(() => {
        res.status(500).send({ message: `falha ao cadastrar produto.` })
        return;
      })
  }


  static atualizarpedido = (req, res) => {
    const id = req.params.id;

    pedidos.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'pedido atualizado com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static excluirpedido = (req, res) => {
    const id = req.params.id;

    pedidos.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'pedido removido com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

}

export default pedidoController

