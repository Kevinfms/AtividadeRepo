const express = require('express');


const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.get('/tbl_cliente', clienteController.selectCliente);
router.get('/tbl_cliente/:id', clienteController.selectOneCliente);
router.post('/tbl_cliente', clienteController.insertCliente);
router.put('/tbl_cliente/:id', clienteController.updateCliente);
router.delete('/tbl_cliente/:id', clienteController.deleteCliente);


module.exports = router;