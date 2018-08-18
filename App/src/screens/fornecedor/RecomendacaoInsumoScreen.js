import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import IconButton from '../../componentes/button/IconButton'
import ListItem from '../../componentes/list/ListItem'
import Divider from '../../componentes/list/Divider'

import { Hoshi } from 'react-native-textinput-effects';
import Toast from '../../componentes/Toast';
import {
    buscarClientes
} from '../../services/UsuarioService';

class RecomendacaoInsumoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Recomendação insumos',
        headerLeft: <IconButton iconName="arrow-back" iconColor="#000" onPress={() => navigation.goBack(null)} />,
    });
    constructor(props) {
        super(props);
        this.state = {
        };
        const item = props.navigation.getParams('a', '');
        alert(JSON.stringify(item))
    }


    componentDidMount() {

    }

    alterarValor(campo, valor) {
        const state = this.state;
        state[campo] = valor;
        this.setState({ ...state });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>adsf</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default RecomendacaoInsumoScreen;
