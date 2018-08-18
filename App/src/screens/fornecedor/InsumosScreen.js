import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Picker

} from 'react-native';

import IconButton from '../../componentes/button/IconButton'

import { Hoshi } from 'react-native-textinput-effects';
import Toast from '../../componentes/Toast';
import {
    buscarInsumo,
    excluirInsumo
} from '../../services/InsumoService';

class InsumosScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Insumos',
    };
 
    state = {
        insumos: [],
    };

    componentWillMount() {
        this.buscarInsumos()
    }

    async buscarInsumos() {
        const insumos = await buscarInsumo({});
        this.setState({ insumos });
    }

    alterarValor(campo, valor) {
        const state = this.state;
        state[campo] = valor;
        this.setState({ ...state });
    }

    async excluir(item){
        let filter = {id : item.id}
        const response = await excluirInsumo(filter)
        
        if(response.status === 200){
            Toast.show(response.mensagem);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.insumos}
                    ItemSeparatorComponent={() => <Divider />}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) =>
                        <ListItem
                            primaryText={item.nome}
                            right={
                                <IconButton
                                    iconName='trash'
                                    iconColor='#00aced'
                                    onPress={()=> this.excluir(item)}
                                    />
                            }
                            onPress={() => this.props.navigation.navigate('')}
                        />
                    }
                />
            </View>

        );
    }
}

export default InsumosScreen;
