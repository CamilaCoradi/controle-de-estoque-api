import mongoose from "mongoose";

const pedidosSchema = new mongoose.Schema(
  {
    id: { type: Number, required: false },
    name: { type: String, required: true },
    deliveryDate: { type: Date, required: true },
    total: { type: Number, required: true },
    items: { type: Object },
  }
);

const pedidos = mongoose.model('pedidos', pedidosSchema);

export default pedidos;


