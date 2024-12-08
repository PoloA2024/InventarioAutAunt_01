const EstadoEquipo = require('../models/estadoEquipoModel');

exports.createEstadoEquipo = async (req, res) => {
  try {
    const { nombre, estado } = req.body;
    const estadoEquipo = new EstadoEquipo({ nombre, estado });
    await estadoEquipo.save();
    res.status(201).json(estadoEquipo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getEstadosEquipo = async (req, res) => {
  try {
    const estados = await EstadoEquipo.find();
    res.status(200).json(estados);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateEstadoEquipo = async (req, res) => {
  try {
    const estadoEquipo = await EstadoEquipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(estadoEquipo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteEstadoEquipo = async (req, res) => {
  try {
    await EstadoEquipo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Estado de equipo eliminado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
