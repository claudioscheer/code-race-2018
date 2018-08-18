import React from 'react';
import {
    View,
    StyleSheet,
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
import logo from '../assets/magal.png';

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
        setTimeout(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName, params })],
            });
            this.props.navigation.dispatch(resetAction);
        }, 0);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={{ height: 180 }}
                    source={logo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
    },
});

export default StartupScreen;