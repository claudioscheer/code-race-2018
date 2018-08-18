import storage from './Storage';
import configuracoes from '../config';

export async function buscarInsumo(filter) {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/insumos/update`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${usuario.token}`,
                },
                body: JSON.stringify({
                    filter : filter,
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};


export async function inserirInsumo(insumo) {

    try {
        let response = await fetch(
            `${configuracoes.hostApi}/insumos/insert`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data : insumo
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};

export async function atualizarInsumo(filter,insumo) {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/insumos/update`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${usuario.token}`,
                },
                body: JSON.stringify({
                    filter : filter,
                    data : insumo
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};

export async function excluirInsumo(filter) {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/insumos/delete`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${usuario.token}`,
                },
                body: JSON.stringify({
                    filter : filter
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};

