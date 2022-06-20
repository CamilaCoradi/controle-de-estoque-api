import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import cors from 'cors'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {

  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
   req.header("Access-Control-Allow-Origin", "*");
 //Quais são os métodos que a conexão pode realizar na API
   req.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
 //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
   res.header("Access-Control-Allow-Origin", "*");
 //Quais são os métodos que a conexão pode realizar na API
   res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
   app.use(cors());
   next();
});


routes(app);

export default app