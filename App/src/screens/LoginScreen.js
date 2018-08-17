import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Isao } from 'react-native-textinput-effects';
import Button from 'react-native-button';

class LoginScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Login',
    };

    login() {
        const { navigation } = this.props;
        navigation.replace('DrawerHome');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textLogin}>App</Text>
                    <Isao
                        style={{ marginTop: 16 }}
                        label='Usuário'
                        activeColor='#000'
                        passiveColor='#000'
                        inputStyle={{ color: '#000' }}
                    />
                    <Isao
                        style={{ marginTop: 16 }}
                        label='Senha'
                        activeColor='#000'
                        passiveColor='#000'
                        inputStyle={{ color: '#000' }}
                    />
                    <Button
                        activeOpacity={.7}
                        style={{ fontSize: 24, color: 'green', marginTop: 24 }}
                        styleDisabled={{ color: 'red' }}
                        onPress={() => this.login()}>
                        Login
                    </Button>
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
