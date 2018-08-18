const provider = require('../provider/dbProvider');
const retorno = require('../utils/retorno');
const CollectionName = "insumos"

module.exports = {
    insert(req, res) {
        const insumo = req.body.data;
        provider.insert(CollectionName, insumo).then(() => {
            res.json(retorno(200, true, 'Insumo inserido com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível inserir o insumo. ${erro}`));
        });
    },
    update(req, res) {
        const insumo = req.body.data;
        const filter  = req.body.filter;

        provider.updateOne(CollectionName, filter, insumo).then(() => {
            res.status(200).json(retorno(200, true, 'insumo alterado com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível alterar o insumo. ${erro}`));
        });
    },
    delete(req, res) {
        const filter = req.body.filter;
        provider.delete(CollectionName, filter).then(() => {
            res.status(200).json(retorno(200, true, 'insumo excluído com sucesso.'));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível excluir o insumo. ${erro}`));
        });
    },
    find(req, res) {
        const filter = req.params.id ? {id : req.params.id}:{};

        provider.find(CollectionName, filter).then((insumos) => {
            res.json(retorno(200, true, '', insumos));
        }).catch((erro) => {
            res.status(401).json(retorno(401, false, `Não foi possível consultar os insumos. ${erro}`));
        });
    }
};
