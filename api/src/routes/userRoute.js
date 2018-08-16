const express = require('express');
const userController = require('../controllers/userContoller');
const auth = require('../controllers/auth');

const router = express.Router();

// Valida se o usuário existe.
router.post(
    '/login',
    userController.validateUser,
);

// Informações completas sobre o usuário.
router.post(
    '/find',
    auth.verifyToken,
    userController.findOne,
);

// Salvar ou atualizar usuário.
router.post(
    '/create',
    auth.verifyToken,
    userController.insert,
);

router.post(
    '/verifyToken',
    (req, res) => {
        if (auth.verifyToken) {
            res.status(200);
        }
    },
);

// Atualizar usuário se ele existir.
router.post(
    '/update',
    auth.verifyToken,
    userController.updateOne,
);

// Excluir usuário.
router.post(
    '/delete',
    auth.verifyToken,
    userController.delete,
);

module.exports = router;
