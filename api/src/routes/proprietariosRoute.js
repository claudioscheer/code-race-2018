const express = require('express');
const proprietariosController = require('../controllers/proprietariosController');
const retorno = require('../utils/retorno');

const router = express.Router();

///////////////////////
//Elements Schema
///////////////////////

//get category info
router.get(
    '/find/:id?',
    // auth.verifyToken,
    proprietariosController.find
);

//CAtegory create
router.post(
    '/insert',
    // auth.verifyToken,
    proprietariosController.insert
);

//Category update 
router.post(
    '/update',
    // auth.verifyToken,
    proprietariosController.update
)

//Category delete
router.delete(
    '/delete/:id',
    // auth.verifyToken,
    proprietariosController.delete
);

module.exports = router;