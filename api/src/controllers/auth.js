
//FORMAT OF TOKEN
//Authorization: Bearer <access_token>

const jwt = require('jsonwebtoken');

// functions available
module.exports = {

    verifyToken(req, res, next) {
        //get auth header value
        const userHeader = req.headers['authorization'];

        console.log("HEderrrr ", req.headers);

        let response = {
            code : 403,
            message : "" 
        }

        //Check f bearer is undefined
        if (typeof userHeader !== 'undefined') {
            //Split at the space
            const token = userHeader.split(' ');
            //Get token from array
            const userToken = token[1];
            //Set the token
            req.token = userToken;

            console.log("Token capturado ",req.token);

            //jwt check token
            jwt.verify(req.token, 'secretkey',(err, authData) => {
                if (err) {
                    response.message = "Token de autenticação inválido!"
                    res.status(403).send(response);
                } else {
                    next();
                }
            })

        } else {
            response.message = "Nenhum token de autenticação encontrado!"
            res.status(403).send(response);
        }

    },

    createToken(usuario) {
        return new Promise((resolve, reject) => {

            jwt.sign({ user: usuario},'secretkey',{ expiresIn: '12h' }, (err, token) => {

                if (!err) {
                    resolve(token);
                } else {
                    reject(err);
                }
            });

        

        })
    },

    refreshToken(req, res, next) {

        jwt.sign({ user: tokenAtual }, 'secretkey', (err, token) => {

            if (!err) {
                return token;
            } else {
                return null;
            }
        });

    }

}   