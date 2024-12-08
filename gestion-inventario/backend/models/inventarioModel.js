const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
  serial: { type: String, unique: true, required: true },
  modelo: { type: String, unique: true, required: true },
  descripcion: { type: String, required: true },
  foto: { type: String, required: true },
  color: { type: String, required: true },
  fechaCompra: { type: Date, required: true },
  precio: { type: Number, required: true },
  usuarioACargo: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  marca: { type: mongoose.Schema.Types.ObjectId, ref: 'Marca', required: true },
  estadoEquipo: { type: mongoose.Schema.Types.ObjectId, ref: 'EstadoEquipo', required: true },
  tipoEquipo: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoEquipo', required: true }
});

module.exports = mongoose.model('Inventario', inventarioSchema);
