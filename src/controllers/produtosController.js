import produtosService from "../service/produtosService.js";

class produtoController {

  static listarprodutos = async (req, res) => {
    let estoque = new produtosService();
    res.status(200).json(await estoque.listarProdutos())
  }

  static listarprodutoPorId = async (req, res) => {
    let estoque = new produtosService();
    res.status(200).json(await estoque.listarprodutoPorId(req.params.id))
  }

  static cadastrarproduto = async (req, res) => {
    let estoque = new produtosService();
    estoque.cadastrarProduto(req.body)
      .then(function (result) {
        res.status(201).send({ message: 'Produtos cadastrados com sucesso!' });
        return;
      }).catch((err) => {
        res.status(500).send({ message: `${err}` })
        return;
      })
  }

  static atualizarproduto = (req, res) => {
    let estoque = new produtosService();
    estoque.atualizarProduto(req.params.id, req.body)
      .then(function (result) {
        res.status(201).send({ message: 'Produto atualizado com sucesso!' });
        return;
      }).catch(() => {
        res.status(500).send({ message: `falha ao atualizar produto.` })
        return;
      })
  }

  static excluirproduto = (req, res) => {
    let estoque = new produtosService();
    estoque.excluirProduto(req.params.id)
      .then(function (result) {
        res.status(201).send({ message: 'Produto excluido com sucesso!' });
        return;
      }).catch(() => {
        res.status(500).send({ message: `falha ao excluir produto.` })
        return;
      })
  }

}

export default produtoController