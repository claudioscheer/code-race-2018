import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Toast from '../../componentes/Toast';
import storage from '../../services/Storage';
import {

} from '../../services/LoteService';
import {
    Divider,
    ListItem,
} from '../../componentes/list';
import {
    inserirLote,
} from '../../services/LoteService';
import IconButton from '../../componentes/button/IconButton';
import Lote from '../../models/lotes';

class CadastroLoteProprietarioScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Cadastro de lote',
        headerLeft: <IconButton iconName="arrow-back" iconColor="#000" onPress={() => navigation.goBack(null)} />
    });
    state = {
        nome: 'Lote 01',
        bezerros012: 0,
        novilhas1224: 0,
        novilhas2436: 0,
        vacasSecas: 0,
        vacasLactacao: 0,
    };

    async salvarLote() {
        const usuario = await storage.getUsuario();
        const lote = new Lote();
        lote.nome = this.state.nome;
        lote.idUsuario = usuario.data.id;
        lote.animais = [
            {
                tipo: 'bezeros(0-12)',
                quantidade: this.state.bezerros012,
            },
            {
                tipo: 'novilhas1(12-24)',
                quantidade: this.state.novilhas1224,
            },
            {
                tipo: 'novilhas2(24-36)',
                quantidade: this.state.novilhas2436,
            },
            {
                tipo: 'secas',
                quantidade: this.state.vacasSecas,
            },
            {
                tipo: 'lactacao',
                quantidade: this.state.vacasLactacao,
            },
        ];
        try {
            const response = await inserirLote(lote);
            this.props.navigation.goBack(null);
            Toast.show(response.mensagem);
        } catch (error) {
            Toast.show(error.mensagem);
        }
    }

    alterarValor(campo, valor) {
        const state = this.state;
        state[campo] = valor;
        this.setState({ ...state });
    }

    render() {
        const totalVacas = this.state.bezerros012 + this.state.novilhas1224 + this.state.novilhas2436 + this.state.vacasSecas + this.state.vacasLactacao;
        return (
            <ScrollView style={styles.container}>
                <Hoshi
                    label='Nome'
                    borderColor='#b76c94'
                    value={this.state.nome}
                    onChangeText={valor => this.alterarValor('nome', valor)}
                    style={{ marginTop: 8 }}
                />
                <Hoshi
                    label='Bezerros (0-12)'
                    borderColor='#b76c94'
                    value={this.state.bezerros012.toString()}
                    onChangeText={valor => this.alterarValor('bezerros012', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='Novilhas (12-24)'
                    borderColor='#b76c94'
                    value={this.state.novilhas1224.toString()}
                    onChangeText={valor => this.alterarValor('novilhas1224', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='Novilhas (24-36)'
                    borderColor='#b76c94'
                    value={this.state.novilhas2436.toString()}
                    onChangeText={valor => this.alterarValor('novilhas2436', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='Vacas secas'
                    borderColor='#b76c94'
                    value={this.state.vacasSecas.toString()}
                    onChangeText={valor => this.alterarValor('vacasSecas', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='Vacas lactação'
                    borderColor='#b76c94'
                    value={this.state.vacasLactacao.toString()}
                    onChangeText={valor => this.alterarValor('vacasLactacao', valor)}
                    style={{ marginTop: 16 }}
                />
                <Text style={styles.totalVacas}>Total de vacas: {totalVacas}.</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Salvar"
                        color="green"
                        onPress={() => this.salvarLote()} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        flex: 1,
    },
    totalVacas: {
        marginTop: 16,
        fontSize: 16,
        color: '#000',
        textAlign: 'right',
    },
    buttonContainer: {
        paddingBottom: 16,
        marginTop: 24
    },
});


export default CadastroLoteProprietarioScreen;
