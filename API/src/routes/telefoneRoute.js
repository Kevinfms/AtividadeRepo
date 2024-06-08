const express = require('express');


const router = express.Router();

const telefoneController = require('../controllers/telefoneController');

router.get('/telefone', telefoneController.selectTel);
router.get('/telefone/:id', telefoneController.selectOneTel);
router.post('/telefone', telefoneController.insertTel);
router.put('/telefone/:id', telefoneController.updateTel);
router.delete('/telefone/:id', telefoneController.deleteTel);


module.exports = router;