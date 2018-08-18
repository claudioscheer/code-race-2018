const provider = require('../provider/dbProvider');
const retorno = require('../utils/retorno');
const CollectionName = "lotes"

module.exports = {
    insert(req, res) {
        const lote = req.body.data;
        provider.insert(CollectionName, lote).then(() => {
            res.json(retorno(200, true, 'Lote inserido com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível inserir o lote. ${erro}`));
        });
    },
    update(req, res) {
        const lote = req.body.data;
        const filter = req.body.filter;

        provider.updateOne(CollectionName, filter, lote).then(() => {
            res.status(200).json(retorno(200, true, 'Lote alterado com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível alterar o lote. ${erro}`));
        });
    },
    delete(req, res) {
        const filter = {id : req.params.id};
        provider.delete(CollectionName, filter).then(() => {
            res.status(200).json(retorno(200, true, 'Lote excluído com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível excluir o lote. ${erro}`));
        });
    },
    find(req, res) {
        const filter = req.params.id ? {id : req.params.id}:{};


        provider.find(CollectionName, filter).then((lotes) => {
            res.json(retorno(200, true, '', lotes));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível consultar os lotes. ${erro}`));
        });
    }
};
