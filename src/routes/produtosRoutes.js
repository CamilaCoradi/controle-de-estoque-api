import express from "express";
import produtoController from "../controllers/produtosController.js";

const router = express.Router();

router
  .get("/produtos", produtoController.listarprodutos)
  .get("/produtos/:id", produtoController.listarprodutoPorId)
  .post("/produtos", produtoController.cadastrarproduto)
  .put("/produtos/:id", produtoController.atualizarproduto)
  .delete("/produtos/:id", produtoController.excluirproduto)
 
export default router;   