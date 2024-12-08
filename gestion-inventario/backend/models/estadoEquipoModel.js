const mongoose = require('mongoose');

const estadoEquipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  estado: { type: String, enum: ['Activo', 'Inactivo'], required: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EstadoEquipo', estadoEquipoSchema);
