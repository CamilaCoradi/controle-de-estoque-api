import mongoose from "mongoose"

mongoose.connect("mongodb+srv://<database>:<password>@<cluster>.mongodb.net/shopper-teste-tecnico");

let db = mongoose.connection;

export default db;