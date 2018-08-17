// Authorization: Bearer <access_token>
const jwt = require('jsonwebtoken');
const retorno = require('../utils/retorno');

module.exports = {
    verifyToken(req, res, next) {
        const userHeader = req.headers.authorization;

        // Check if bearer is undefined
        if (typeof userHeader !== 'undefined') {
            // Split at the space
            const token = userHeader.split(' ');
            // Get token from array
            const userToken = token[1];
            // Set the token
            req.token = userToken;

            // jwt check token
            jwt.verify(req.token, 'secretkey', (err) => {
                if (err) {
                    res.status(403).json(retorno(403, false, 'Token de autenticação inválido.'));
                } else {
                    next();
                }
            });
        } else {
            res.status(403).json(retorno(403, false, 'Nenhum token de autenticação encontrado.'));
        }
    },
    createToken(usuario) {
        return new Promise((resolve, reject) => {
            jwt.sign({ user: usuario }, 'secretkey', { expiresIn: '12h' }, (err, token) => {
                if (!err) {
                    resolve(token);
                } else {
                    reject(err);
                }
            });
        });
    },
    // Verificar este trecho de código.
    // refreshToken(req, res, next) {
    //     jwt.sign({ user: tokenAtual }, 'secretkey', (err, token) => {
    //         if (!err) {
    //             return token;
    //         }
    //         return null;
    //     });
    // },
};
