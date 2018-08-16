const provider = require('../provider/dbProvider');
const retorno = require('../utils/retorno');
const auth = require('./auth');

module.exports = {
    insert(req, res) {
        const user = req.body.data;
        provider.insert('usuarios', user).then(() => {
            res.status(200).send(retorno(200, true, 'Usuário inserido com sucesso.'));
        }).catch((erro) => {
            res.status(999).send(retorno(999, false, `Não foi possível inserir o usuário. ${erro}`));
        });
    },
    updateOne(req, res) {
        const user = req.body.data;
        const { filter } = req.body;

        provider.updateOne('usuarios', filter, user).then(() => {
            res.status(200).send(retorno(200, true, 'Usuário alterado com sucesso.'));
        }).catch((erro) => {
            res.status(999).send(retorno(999, false, `Não foi possível alterar o usuário. ${erro}`));
        });
    },
    delete(req, res) {
        const { filter } = req.body;
        provider.delete('usuarios', filter).then(() => {
            res.status(200).send(retorno(200, true, 'Usuário excluído com sucesso.'));
        }).catch((erro) => {
            res.status(999).send(retorno(999, false, `Não foi possível excluir o usuário. ${erro}`));
        });
    },
    find(req, res) {
        provider.find('usuarios', {}).then(() => {
            res.status(200).send();
        }).catch((erro) => {
            res.status(999).send(retorno(999, false, `Não foi possível consultar os usuários. ${erro}`));
        });
    },
    validateUser(req, res) {
        const { email, senha } = req.body;

        const query = {
            email,
            senha,
        };

        provider.find('usuarios', query).then((usuario) => {
            if (usuario.length > 0) {
                const response = {};
                auth.createToken(usuario).then((token) => {
                    if (token) {
                        response.token = token;
                        response.data = usuario;
                        res.status(200).send(response);
                    } else {
                        res.status(404).send(retorno(404, false, 'Não foi possível criar o token de autenticação.'));
                    }
                });
            } else {
                res.status(404).send(retorno(404, false, 'Usuário não encontrado ou dados incorretos.'));
            }
        }).catch((error) => {
            console.log(error);
            res.status(500).send(retorno(500, false, 'Falha ao validar o usuário solicitado.'));
        });
    },

    findOne(req, res) {
        const { filter } = req.body;

        provider.find('usuarios', filter).then(() => {
            res.status(200).send(retorno(200, false, 'Consulta realizada com sucesso.'));
        }).catch(() => {
            res.status(500).send(retorno(500, false, 'Excessão interna na busca do usuário.'));
        });
    },
};
