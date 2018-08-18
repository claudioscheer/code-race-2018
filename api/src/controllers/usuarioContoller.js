const provider = require('../provider/dbProvider');
const retorno = require('../utils/retorno');
const auth = require('./auth');

module.exports = {
    insert(req, res) {
        const usuario = req.body.data;
        provider.insert('usuarios', usuario).then(() => {
            res.json(retorno(200, true, 'Usuário inserido com sucesso.', usuario));
        }).catch((erro) => {
            res.status(401).json(retorno(999, false, `Não foi possível inserir o usuário. ${erro}`));
        });
    },
    updateOne(req, res) {
        const user = req.body.data;
        const { filter } = req.body;

        provider.updateOne('usuarios', filter, user).then(() => {
            res.status(200).json(retorno(200, true, 'Usuário alterado com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(999, false, `Não foi possível alterar o usuário. ${erro}`));
        });
    },
    delete(req, res) {
        const filter = {id : req.params.id};
        provider.delete('usuarios', filter).then(() => {
            res.status(200).json(retorno(200, true, 'Usuário excluído com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(999, false, `Não foi possível excluir o usuário. ${erro}`));
        });
    },
    find(req, res) {
        const filter = req.params.id ? { id: req.params.id } : {};

        provider.find('usuarios', filter).then((usuarios) => {
            res.json(retorno(200, true, '', usuarios));
        }).catch((erro) => {
            res.status(401).json(retorno(999, false, `Não foi possível consultar os usuários. ${erro}`));
        });
    },
    validateUser(req, res) {
        const { email, senha } = req.body;
        const query = {
            email,
            senha,
        };

        console.log(query);
        provider.find('usuarios', query)
            .then((usuarios) => {
                if (usuarios.length > 0) {
                    auth.createToken(usuarios).then((token) => {
                        if (token) {
                            const response = {
                                status: 200,
                                token,
                                data: usuarios[0],
                            };
                            res.json(response);
                        } else {
                            res.status(404).json(retorno(404, false, 'Não foi possível criar o token de autenticação.'));
                        }
                    });
                } else {
                    res.status(404).json(retorno(404, false, 'Usuário ou senha incorreto.'));
                }
            }).catch((error) => {
                console.log(error);
                res.status(500).json(retorno(500, false, 'Falha ao validar o usuário solicitado.'));
            });
    },
    findOne(req, res) {
        const { filter } = req.body;

        provider.find('usuarios', filter).then(() => {
            res.status(200).json(retorno(200, false, 'Consulta realizada com sucesso.'));
        }).catch(() => {
            res.status(500).json(retorno(500, false, 'Excessão interna na busca do usuário.'));
        });
    },
};
