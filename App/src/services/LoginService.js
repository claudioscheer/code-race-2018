export async function login(email, senha) {
    try {
        let response = await fetch(
            'http://172.20.156.128:3000/usuario/login', {
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
