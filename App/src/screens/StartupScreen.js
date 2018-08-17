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
} from '../services/LoginService';
import finiLogo from '../assets/fini.png';

class StartupScreen extends React.Component {
    async componentDidMount() {
        const user = await storage.getUsuario();
        if (user !== null && (await verificarToken()).status === 200) {
            this.navigateTo('DrawerHome');
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