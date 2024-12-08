const express = require('express');
const router = express.Router();
const estadoEquipoController = require('../controllers/estadoEquipoController');

router.post('/', estadoEquipoController.createEstadoEquipo);
router.get('/', estadoEquipoController.getEstadosEquipo);
router.put('/:id', estadoEquipoController.updateEstadoEquipo);
router.delete('/:id', estadoEquipoController.deleteEstadoEquipo);

module.exports = router;
