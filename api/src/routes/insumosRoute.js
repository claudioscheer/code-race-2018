const express = require('express');
const insumosController = require('../controllers/insumosController');
const retorno = require('../utils/retorno');

const router = express.Router();

///////////////////////
//Elements Schema
///////////////////////

//get insumos info
router.get(
    '/find/:id?',
    // auth.verifyToken,
    insumosController.find
);

//insumos create
router.post(
    '/insert',
    // auth.verifyToken,
    insumosController.insert
);

//insumos update 
router.post(
    '/update',
    // auth.verifyToken,
    insumosController.update
)

//insumos delete
router.delete(
    '/delete/:id',
    // auth.verifyToken,
    insumosController.delete
);

module.exports = router;