import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList

} from 'react-native';

import IconButton from '../../componentes/button/IconButton'
import ListItem from '../../componentes/list/ListItem'
import Divider from '../../componentes/list/Divider'

import { Hoshi } from 'react-native-textinput-effects';
import Toast from '../../componentes/Toast';
import {
    buscarClientes
} from '../../services/UsuarioService';

class ClientesScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Clientes',
        headerLeft: <IconButton iconName="menu" iconColor="#000" onPress={() => navigation.openDrawer()} />,
    });

    state = {
        clientes: []
    };

    componentWillMount() {
        this.buscarClientes()
    }

    componentDidMount() {
       this.buscarClientes()
    }

    async buscarClientes() {
        const response = await buscarClientes();
        this.setState({ clientes: response.data });
    }

    alterarValor(campo, valor) {
        const state = this.state;
        state[campo] = valor;
        this.setState({ ...state });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.clientes}
                    ItemSeparatorComponent={() => <Divider />}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <ListItem
                            primaryText={item.nome}
                            onPress={() => this.props.navigation.navigate('InformacoesCliente',{item})}
                        />
                    }
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ClientesScreen;
