import storage from './Storage';
import configuracoes from '../config';

export async function login(email, senha) {
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/usuario/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    senha,
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};

export async function verificarToken() {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/usuario/verifyToken`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
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

export async function cadastrarUsuario(usuario) {
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/usuario/create`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: usuario,
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }

};

export async function buscarClientes(filter) {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/usuario/clientes/`, {
                method: 'GET',
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

export async function alterarCliente(valores) {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/usuario/update`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${usuario.token}`,
                },
                body: JSON.stringify({
                    filter: { id: valores.filter.clienteId },
                    data: valores,
                }),
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
};

export async function getRelatorio() {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/usuario/relatorio/${usuario.data.id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
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

