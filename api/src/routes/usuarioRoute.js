const express = require('express');
const userController = require('../controllers/usuarioContoller');
const auth = require('../controllers/auth');
const retorno = require('../utils/retorno');

const router = express.Router();

// Valida se o usuário existe.
router.post(
    '/login',
    userController.validateUser,
);

// Todos os usuários.
router.get(
    '/',
    auth.verifyToken,
    userController.find,
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
    // auth.verifyToken,
    userController.insert,
);

router.post(
    '/verifyToken',
    auth.verifyToken,
    (req, res) => {
        res.json(retorno(200, true, ''));
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