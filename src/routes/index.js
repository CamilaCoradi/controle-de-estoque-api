import express from "express";
import produtos from "./produtosRoutes.js"
import pedidos from "./pedidosRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Curso de node" })
  })

  app.use(
    express.json(),
    produtos,
    pedidos
  )
}

export default routes