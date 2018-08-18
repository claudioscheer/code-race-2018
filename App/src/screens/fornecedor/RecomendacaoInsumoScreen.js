import React, { Component } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';
import { Kaede } from 'react-native-textinput-effects';

import IconButton from '../../componentes/button/IconButton'
import ListItem from '../../componentes/list/ListItem'
import SubHeader from '../../componentes/list/SubHeader'
import Divider from '../../componentes/list/Divider'

import Toast from '../../componentes/Toast';
import {
    buscarClientes
} from '../../services/UsuarioService';
import {
    getLotesCliente,
} from '../../services/LoteService';
import {
    buscarInsumo,
} from '../../services/InsumoService';

class RecomendacaoInsumoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Recomendação insumos',
        headerLeft: <IconButton iconName="arrow-back" iconColor="#000" onPress={() => navigation.goBack(null)} />,
    });
    state = {
        insumos: [],
        lotes: [],
        valoresInsumos: {},
    };

    async componentDidMount() {
        const item = this.props.navigation.state.params.item;
        const lotes = await getLotesCliente(item.id);
        const insumos = await buscarInsumo();
        this.setState({ lotes: lotes.data, insumos: insumos.data });
    }

    alterarValor(campo, valor) {
        const state = this.state;
        state[campo] = valor;
        this.setState({ ...state });
    }

    mudarValorInsumo(id, valor) {
        const valores = this.state.valoresInsumos;
        valores[id] = valor;
        this.setState({ valoresInsumos: valores });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.lotes.map((lote) => {
                        return (
                            <View key={lote.id}>
                                <ListItem
                                    style={{ backgroundColor: '#BBB' }}
                                    primaryText={lote.nome}
                                />
                                {
                                    lote.animais.filter(x => x.quantidade > 0).map((animal) => {
                                        return (
                                            <View key={animal.id}>
                                                <ListItem
                                                    primaryText={animal.tipo}
                                                    secondaryText={'Quantidade: ' + animal.quantidade}
                                                />
                                                <View>
                                                    {
                                                        this.state.insumos.map((insumo, index) => {
                                                            const id = `${lote.id}|${animal.id}|${insumo.id}`;
                                                            return (
                                                                <View key={insumo.id}>
                                                                    <Kaede
                                                                        label={insumo.nome}
                                                                        onChangeText={text => this.mudarValorInsumo(id, text)}
                                                                        value={this.state.valoresInsumos[id]}
                                                                    />
                                                                </View>
                                                            );
                                                        })
                                                    }
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        );
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
});

export default RecomendacaoInsumoScreen;
