const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Asegúrate de que la ruta coincida

// Ruta para iniciar sesión
router.post('/login', authController.login);

module.exports = router;
