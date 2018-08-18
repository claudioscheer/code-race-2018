import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
} from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Toast from '../componentes/Toast';
import {
    login,
} from '../services/UsuarioService';
import storage from '../services/Storage';
import logo from '../assets/magal.png';

class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    state = {
        email: 'claudio',
        senha: '1234',
    };

    async handleLogin() {
        const response = await login(this.state.email, this.state.senha);
        if (response.status !== 200) {
            Toast.show(response.mensagem);
            return;
        }
        await storage.setUsuario(response);
        if (response.data.tipo === 'fornecedor') {
            this.props.navigation.replace('Fornecedor');
        } else if (response.data.tipo === 'proprietario') {
            this.props.navigation.replace('Proprietario');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image
                        resizeMode="contain"
                        style={{ height: 120, width: 120, alignSelf: "center", marginBottom: 16 }}
                        source={logo}
                    />
                    <Hoshi
                        label='E-mail'
                        borderColor={'#b76c94'}
                        value={this.state.email}
                        style={{ marginTop: 16 }}
                    />
                    <Hoshi
                        label='Senha'
                        borderColor={'#b76c94'}
                        value={this.state.senha}
                        style={{ marginTop: 16 }}
                    />
                    <View style={{ marginTop: 24 }}>
                        <Button
                            title="Entrar"
                            color="green"
                            onPress={() => this.handleLogin()} />
                    </View>
                    <View style={{ marginTop: 24 }}>
                        <Button
                            title="Ainda não sou cadastrado"
                            color="blue"
                            onPress={() => this.props.navigation.navigate('CadastroProprietario')} />
                    </View>
                </View>
                <View>
                    <Text style={{ textAlign: 'center' }}>Desenvolvido por Fini 8k, 2018</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    textLogin: {
        paddingTop: 32,
        fontSize: 48,
        textAlign: 'center',
        color: '#000',
    },
});

export default LoginScreen;
