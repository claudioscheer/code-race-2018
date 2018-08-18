const uuid = require('uuid/v4');
const provider = require('../provider/dbProvider');
const retorno = require('../utils/retorno');

const CollectionName = 'proprietarios';

module.exports = {
    insert(req, res) {
        const proprietario = req.body.data;
        proprietario.id = uuid();
        provider.insert(CollectionName, proprietario).then(() => {
            res.json(retorno(200, true, 'Proprietário inserido com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível inserir o proprietario. ${erro}`));
        });
    },
    update(req, res) {
        const proprietario = req.body.data;
        const { filter } = req.body;

        provider.updateOne(CollectionName, filter, proprietario).then(() => {
            res.status(200).json(retorno(200, true, 'proprietario alterado com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível alterar o proprietario. ${erro}`));
        });
    },
    delete(req, res) {
        const filter = { id: req.params.id };
        provider.delete(CollectionName, filter).then(() => {
            res.status(200).json(retorno(200, true, 'Proprietario excluído com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível excluir o proprietario. ${erro}`));
        });
    },
    find(req, res) {
        const filter = req.params.id ? { id: req.params.id } : {};

        provider.find(CollectionName, filter).then((proprietarios) => {
            res.json(retorno(200, true, '', proprietarios));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível consultar os proprietarios. ${erro}`));
        });
    },
};
