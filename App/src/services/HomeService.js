import storage from './Storage';

export async function getUsuarios() {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            `${configuracoes.hostApi}/usuario`, {
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
