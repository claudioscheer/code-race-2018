let provider = require('../provider/dbProvider');
let retorno = require('../utils/retorno');
let auth = require('./auth');

module.exports = {

    insert(req, res, next) {

        let user = req.body.data;
        provider.insert('usuarios', user).then((sucess) => {
            res.status(200).send(retorno(200, true, "Usuário inserido com sucesso!"));
        }).catch((erro) => {
            res.status(999).send(retorno(999, false, "Não foi possível inserir o usuário!" + erro));
        })
    },

    updateOne(req, res, next) {

        let user = request.body.data;
        let filter = request.body.filter;

        provider.updateOne('usuarios', filter, user).then((sucess) => {
            res.status(200).send(retorno(200, true, "Usuário alterado com sucesso!"));
        }).catch((erro) => {
            res.status(999).send(retorno(999, false, "Não foi possível alterar o usuário!" + erro));
        })

    },

    delete(req, res, next) {

        let filter = request.body.filter;

        provider.delete('usuarios', filter).then((sucess) => {
            res.status(200).send(retorno(200, true, "Usuário excluido com sucesso!"));
        }).catch((erro) => {
            res.status(999).send(retorno(999, false, "Não foi possível excluir o usuário!" + erro));
        })

    },

    find(req, res, next) {

        provider.find('usuarios', {}).then((sucess) => {
            res.status(200).send(success);
        }).catch((err) => {
            res.status(999).send(retorno(999, false, "Não foi possível consultar os usuários!" + erro));
        })

    },

    validateUser(req, res, next) {

        let parmEmail = req.body.email;
        let parmSenha = req.body.senha;

        let query = {}

        query.email = parmEmail;
        query.senha = parmSenha;

        provider.find("usuarios", query).then((usuario) => {

            if (usuario.length > 0) {

                console.log(usuario);

                let response = {};

                auth.createToken(usuario).then((token) => {

                    if (token) {
                        response.token = token;
                        response.data = usuario;
                        res.status(200).send(response);
                    } else {
                        res.status(404).send(retorno(404, false, "Não foi possível criar o token de autenticação!"))
                    }
                });

            } else {
                res.status(404).send(retorno(404, false, "Usuário não encontrado ou dados incorretos!"));
            }

        }).catch((error) => {
            console.log(error);
            res.status(500).send(retorno(500, false, "Falha ao validar o usuário solicitado!"));
        });
    },

    findOne(req, res, next) {

        let filter = req.body.filter;

        provider.find('usuarios', filter).then((sucess) => {
            res.status(200).send(retorno(200, false, "Consulta realizada com sucesso!"));
        }).catch((err) => {
            res.status(500).send(retorno(500, false, "Excessao interna na busca do usuario"));
        })

    }


};
