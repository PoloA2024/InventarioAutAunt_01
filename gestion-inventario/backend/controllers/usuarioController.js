const Usuario = require('../models/usuarioModel');

exports.createUsuario = async (req, res) => {
  try {
    const { nombre, email, estado, role, password } = req.body;

    // Verifica que todos los campos requeridos estén presentes
    if (!nombre || !email || !estado || !role || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const usuario = new Usuario({ nombre, email, estado, role, password });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(usuario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
