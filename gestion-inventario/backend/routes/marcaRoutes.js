const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcaController');

router.post('/', marcaController.createMarca);
router.get('/', marcaController.getMarcas);
router.put('/:id', marcaController.updateMarca);
router.delete('/:id', marcaController.deleteMarca);

module.exports = router;
