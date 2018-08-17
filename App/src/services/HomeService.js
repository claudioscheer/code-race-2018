import storage from './Storage';

export async function getUsuarios() {
    const usuario = await storage.getUsuario();
    try {
        let response = await fetch(
            'http://172.20.156.128:3000/usuario', {
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
