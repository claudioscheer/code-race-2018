import React, { Component } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
} from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';

import IconButton from '../../componentes/button/IconButton'
import ListItem from '../../componentes/list/ListItem'
import SubHeader from '../../componentes/list/SubHeader'
import Divider from '../../componentes/list/Divider'

import Toast from '../../componentes/Toast';
import {
    alterarCliente,
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
        valores: {},
    };

    async componentDidMount() {
        const item = this.props.navigation.state.params;
        const insumos = await buscarInsumo();
        this.setState({ insumos: insumos.data });
    }

    alterarValor(campo, valor) {
        const state = this.state.valores;
        state[campo] = valor;
        this.setState({ valores: state });
    }

    async salvar() {
        const response = await alterarCliente({
            filter: this.props.navigation.state.params,
            insumos: this.state.valores,
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {
                    this.state.insumos.map((insumo) => {
                        return (
                            <View key={insumo.id}>
                                <Hoshi
                                    keyboardType="numeric"
                                    label={insumo.nome}
                                    borderColor={'#b76c94'}
                                    value={this.state.valores[insumo.id] || ''}
                                    style={{ marginTop: 16 }}
                                    onChangeText={valor => this.alterarValor(insumo.id, valor)}
                                />
                            </View>
                        );
                    })
                }
                <View style={styles.buttonContainer}>
                    <Button
                        title="Salvar"
                        color="green"
                        onPress={() => this.salvar()} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    buttonContainer: {
        paddingBottom: 16,
        marginTop: 24
    },
});

export default RecomendacaoInsumoScreen;
