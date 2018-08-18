const express = require('express');
const lotesController = require('../controllers/lotesController');
const retorno = require('../utils/retorno');

const router = express.Router();

///////////////////////
//Elements Schema
///////////////////////

//get category info
router.get(
    '/find/:id',
    // auth.verifyToken,
    lotesController.find,
);

//CAtegory create
router.post(
    '/insert',
    // auth.verifyToken,
    lotesController.insert
);

//Category update 
router.post(
    '/update',
    // auth.verifyToken,
    lotesController.update
)

//Category delete
router.delete(
    '/delete/:id',
    // auth.verifyToken,
    lotesController.delete
);

module.exports = router;