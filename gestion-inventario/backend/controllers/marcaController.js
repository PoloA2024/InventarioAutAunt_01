const Marca = require('../models/marcaModel');

exports.createMarca = async (req, res) => {
  try {
    const { nombre, estado } = req.body;
    const marca = new Marca({ nombre, estado });
    await marca.save();
    res.status(201).json(marca);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMarcas = async (req, res) => {
  try {
    const marcas = await Marca.find();
    res.status(200).json(marcas);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateMarca = async (req, res) => {
  try {
    const marca = await Marca.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(marca);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteMarca = async (req, res) => {
  try {
    await Marca.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Marca eliminada' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
