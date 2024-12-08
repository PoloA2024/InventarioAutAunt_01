const Inventario = require('../models/inventarioModel');

exports.createInventario = async (req, res) => {
  try {
    const { serial, modelo, descripcion, foto, color, fechaCompra, precio, usuarioACargo, marca, estadoEquipo, tipoEquipo } = req.body;
    const inventario = new Inventario({ serial, modelo, descripcion, foto, color, fechaCompra, precio, usuarioACargo, marca, estadoEquipo, tipoEquipo });
    await inventario.save();
    res.status(201).json(inventario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getInventarios = async (req, res) => {
  try {
    const inventarios = await Inventario.find()
      .populate('usuarioACargo')
      .populate('marca')
      .populate('estadoEquipo')
      .populate('tipoEquipo');
    res.status(200).json(inventarios);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateInventario = async (req, res) => {
  try {
    const inventario = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(inventario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteInventario = async (req, res) => {
  try {
    await Inventario.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Inventario eliminado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
