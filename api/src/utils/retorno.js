module.exports = (status, ok, mensagem, data) => {
    const retorno = {
        status,
        ok,
        mensagem,
        data,
    };
    return JSON.stringify(retorno);
};
