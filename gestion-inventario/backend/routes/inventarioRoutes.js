const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');
const { verifyRole } = require('../Middleware/authMiddleware');



router.post('/', verifyRole(['admin']), inventarioController.createInventario);
router.put('/:id', verifyRole(['admin']), inventarioController.updateInventario);
router.delete('/:id', verifyRole(['admin']), inventarioController.deleteInventario);

// Los administradores y docentes pueden listar inventarios
router.get('/', verifyRole(['admin', 'docente']), inventarioController.getInventarios);

module.exports = router;
