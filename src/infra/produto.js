import mongoose from "mongoose";

const produtoschema = new mongoose.Schema(
  {
    id:{type: Number, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    qty_stock: {type: Number, required: true},
  }
);

const produtos= mongoose.model('produtos', produtoschema);

export default produtos;