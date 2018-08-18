import storage from './Storage';

export async function getLotes() {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/lotes/find/${usuario.data.id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${usuario.token}`,
                },
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};

export async function getLotesCliente(id) {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/lotes/find/${id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${usuario.token}`,
                },
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};

export async function inserirLote(lote) {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/lotes/insert`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${usuario.token}`,
                },
                body: JSON.stringify({
                    data: lote,
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};

export async function excluirLote(filter) {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/lotes/delete/${filter.id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${usuario.token}`,
                }
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};
