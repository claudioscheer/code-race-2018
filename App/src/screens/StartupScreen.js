import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import {
    StackActions,
    NavigationActions,
} from 'react-navigation';
import storage from '../services/Storage';
import {
    verificarToken,
} from '../services/UsuarioService';
import finiLogo from '../assets/fini.png';

class StartupScreen extends React.Component {
    async componentDidMount() {
        const usuario = await storage.getUsuario();
        if (usuario !== null && (await verificarToken()).status === 200) {
            if (usuario.data.tipo === 'fornecedor') {
                this.navigateTo('Fornecedor');
            } else if (usuario.data.tipo === 'proprietario') {
                this.navigateTo('Proprietario');
            } else {
                this.navigateTo('Login');
            }
        } else {
            this.navigateTo('Login');
        }
    }

    navigateTo(routeName, params) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName, params })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={{ height: 72 }}
                    source={finiLogo}
                />
                <Text style={styles.textCarregando}>Carregando...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    textCarregando: {
        marginTop: 16,
        fontSize: 16,
        color: '#000',
    },
});

export default StartupScreen;