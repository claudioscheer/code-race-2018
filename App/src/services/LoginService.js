import storage from './Storage';
import configuracoes from '../config'

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
            'http://172.20.156.128:3000/usuario/verifyToken', {
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
