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
    buscarInsumo,
    excluirInsumo
} from '../../services/InsumoService';

class InsumosScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Insumos',
        headerLeft: <IconButton iconName="menu" iconColor="#000" onPress={() => navigation.openDrawer()} />,
        headerRight: <IconButton iconName="add" iconColor="#000" onPress={() => navigation.navigate('CadastrarAtualizar', { metodo: 'ins' })} />
    });

    state = {
        insumos: []
    };

    componentWillMount() {
        this.buscarInsumos()
    }

    componentDidMount() {
       this.buscarInsumos()
        
    }

    goBack = () => {
        alert('voltou');
    }

    async buscarInsumos() {
        const response = await buscarInsumo();
        this.setState({ insumos: response.data });
    }

    alterarValor(campo, valor) {
        const state = this.state;
        state[campo] = valor;
        this.setState({ ...state });
    }

    async excluir(item) {
        let filter = { id: item.id }
        const response = await excluirInsumo(filter)

        if (response.status === 200) {
            Toast.show(response.mensagem);
            this.buscarInsumos();

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.insumos}
                    ItemSeparatorComponent={() => <Divider />}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <ListItem
                            primaryText={item.nome + " - R$ " + item.valor}
                            right={
                                <IconButton
                                    iconName='trash'
                                    iconColor='#00aced'
                                    onPress={() => this.excluir(item)}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('CadastrarAtualizar',{metodo : 'upd', item})}
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

export default InsumosScreen;
