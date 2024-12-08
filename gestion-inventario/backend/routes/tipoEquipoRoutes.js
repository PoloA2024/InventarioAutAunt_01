const express = require('express');
const router = express.Router();
const tipoEquipoController = require('../controllers/tipoEquipoController');

router.post('/', tipoEquipoController.createTipoEquipo);
router.get('/', tipoEquipoController.getTiposEquipo);
router.put('/:id', tipoEquipoController.updateTipoEquipo);
router.delete('/:id', tipoEquipoController.deleteTipoEquipo);

module.exports = router;
