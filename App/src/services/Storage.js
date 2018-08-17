import {
    AsyncStorage,
} from 'react-native';

const DB_NAME = '@App';
const USUARIO = `${DB_NAME}:USER`;

class Storage {
    async clearAll() {
        await this.removeTokenUsuario();
    }

    async setItem(key, value) {
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    }

    async getItem(key) {
        return JSON.parse(await AsyncStorage.getItem(key));
    }

    async removeItem(key) {
        return await AsyncStorage.removeItem(key);
    }

    // USER
    async setUsuario(value) {
        return await this.setItem(USUARIO, value);
    }

    async getUsuario() {
        return await this.getItem(USUARIO);
    }

    async deleteUsuario() {
        return await this.removeItem(USUARIO);
    }
}

const storage = new Storage();
export default storage;
