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

class LotesClienteScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Lotes cliente',
        headerLeft: <IconButton iconName="arrow-back" iconColor="#000" onPress={() => navigation.goBack(null)} />,
    });
    state = {
        lotes: [],
    };

    async componentDidMount() {
        const item = this.props.navigation.state.params.item;
        const lotes = await getLotesCliente(item.id);
        this.setState({ lotes: lotes.data });
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
                                            <ListItem
                                                primaryText={animal.tipo}
                                                secondaryText={'Quantidade: ' + animal.quantidade}
                                                onPress={() => this.props.navigation.navigate('RecomendacaoInsumo', {
                                                    clienteId: this.props.navigation.state.params.item.id,
                                                    loteId: lote.id,
                                                    animalId: animal.id,
                                                })}
                                            />
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

export default LotesClienteScreen;
