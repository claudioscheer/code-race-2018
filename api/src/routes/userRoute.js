let express = require('express');
let retorno = require('../utils/retorno');
let userController = require('../controllers/userContoller');
let router = express.Router();
const auth      = require('../controllers/auth');

//Validation user exists
router.post(
    '/login',
    userController.validateUser
);

//get user complete Info by Id or All users
router.post(
    '/find',
    auth.verifyToken,
    userController.findOne
);

//User register and update
router.post(
    '/create',
    auth.verifyToken,
    userController.insert
);

router.post('/verifyToken',function(req, res){
    if(auth.verifyToken){
        res.status(200);
    }
})

//Update user if exists
router.post(
    '/update',
    auth.verifyToken,
    userController.updateOne
);

//User delete
router.post(
    '/delete',
    auth.verifyToken,
    userController.delete
);

module.exports = router;