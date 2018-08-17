// Authorization: Bearer <access_token>
const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken(req, res, next) {
        const userHeader = req.headers.authorization;
        const response = {
            code: 403,
            message: '',
        };

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
                    response.message = 'Token de autenticação inválido.';
                    res.status(403).json(response);
                } else {
                    next();
                }
            });
        } else {
            response.message = 'Nenhum token de autenticação encontrado.';
            res.status(403).json(response);
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
