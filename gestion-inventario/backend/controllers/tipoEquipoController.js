const TipoEquipo = require('../models/tipoEquipoModel');

exports.createTipoEquipo = async (req, res) => {
  try {
    const { nombre, descripcion, estado } = req.body;
    const tipoEquipo = new TipoEquipo({ nombre, descripcion, estado });
    await tipoEquipo.save();
    res.status(201).json(tipoEquipo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTiposEquipo = async (req, res) => {
  try {
    const tipos = await TipoEquipo.find();
    res.status(200).json(tipos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTipoEquipo = async (req, res) => {
  try {
    const tipoEquipo = await TipoEquipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(tipoEquipo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTipoEquipo = async (req, res) => {
  try {
    await TipoEquipo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Tipo de equipo eliminado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
