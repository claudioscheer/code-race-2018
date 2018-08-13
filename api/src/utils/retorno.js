module.exports = function Retorno(Status, Ok, Mensagem, data){

    let retorno = {
        "Status": Status,
        "Ok" : Ok,
        "Mensagem": Mensagem,
        "data" : data       
    }

    return JSON.stringify(retorno);

}