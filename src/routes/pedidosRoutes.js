import express from "express";
import pedidosController from "../controllers/pedidosController.js"

const router = express.Router();

router
  .get("/pedidos", pedidosController.listarpedidos)
  .get("/pedidos/:id", pedidosController.listarpedidoPorId)
  .post("/pedidos", pedidosController.cadastrarpedido)
  .put("/pedidos/:id", pedidosController.atualizarpedido)
  .delete("/pedidos/:id", pedidosController.excluirpedido)

export default router;   