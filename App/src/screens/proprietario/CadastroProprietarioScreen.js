import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Picker,
} from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Toast from '../../componentes/Toast';
import {
    cadastrarUsuario,
} from '../../services/UsuarioService';
import storage from '../../services/Storage';
import Usuario from '../../models/usuario';
import IconButton from '../../componentes/button/IconButton';

class CadastroProprietarioScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Cadastro',
        headerLeft: <IconButton iconName="arrow-back" iconColor="#000" onPress={() => navigation.goBack(null)} />
    });
    state = {
        nome: 'Claudio',
        localidade: 'Três de Maio - RS',
        nomePropriedade: 'MAGAL',
        email: 'claudioscheer16@gmail.com',
        telefone: '55 99961-3346',
        senha: '123',
        confirmacaoSenha: '123',
        frequenciaEntrega: 'mensal',
        clienteServico: 'sim',
    };

    async cadastrar() {
        if (this.state.senha !== this.state.confirmacaoSenha) {
            Toast.show('As senhas não são iguais.');
            return;
        }
        const usuario = new Usuario();
        usuario.nome = this.state.nome;
        usuario.localidade = this.state.localidade;
        usuario.nomePropriedade = this.state.nomePropriedade;
        usuario.email = this.state.email;
        usuario.telefone = this.state.telefone;
        usuario.senha = this.state.senha;
        usuario.frequenciaEntrega = this.state.frequenciaEntrega;
        usuario.clienteServico = this.state.clienteServico;

        try {
            const response = await cadastrarUsuario(usuario);
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
                    label='Localidade'
                    borderColor='#b76c94'
                    value={this.state.localidade}
                    onChangeText={valor => this.alterarValor('localidade', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='Nome propriedade'
                    borderColor='#b76c94'
                    value={this.state.nomePropriedade}
                    onChangeText={valor => this.alterarValor('nomePropriedade', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='E-mail'
                    borderColor='#b76c94'
                    value={this.state.email}
                    onChangeText={valor => this.alterarValor('email', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='Telefone'
                    borderColor='#b76c94'
                    value={this.state.telefone}
                    onChangeText={valor => this.alterarValor('telefone', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='Senha'
                    borderColor='#b76c94'
                    value={this.state.senha}
                    onChangeText={valor => this.alterarValor('senha', valor)}
                    style={{ marginTop: 16 }}
                />
                <Hoshi
                    label='Confirmação de senha'
                    borderColor='#b76c94'
                    value={this.state.confirmacaoSenha}
                    onChangeText={valor => this.alterarValor('confirmacaoSenha', valor)}
                    style={{ marginTop: 16 }}
                />
                <View style={{ marginTop: 16 }}>
                    <Text>Deseja contratar o serviço do veterinário?</Text>
                    <Picker
                        selectedValue={this.state.clienteServico}
                        onValueChange={(itemValue, itemIndex) => this.setState({ clienteServico: itemValue })}>
                        <Picker.Item label="Sim" value="sim" />
                        <Picker.Item label="Não" value="nao" />
                    </Picker>
                </View>
                <View style={{ marginTop: 16 }}>
                    <Text>Frequência de entregas</Text>
                    <Picker
                        selectedValue={this.state.frequenciaEntrega}
                        onValueChange={(itemValue, itemIndex) => this.setState({ frequenciaEntrega: itemValue })}>
                        <Picker.Item label="Quinzenal" value="quinzenal" />
                        <Picker.Item label="Mensal" value="mensal" />
                        <Picker.Item label="Anual" value="anual" />
                    </Picker>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Cadastrar-se"
                        color="green"
                        onPress={() => this.cadastrar()} />
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
    textLogin: {
        paddingTop: 32,
        fontSize: 48,
        textAlign: 'center',
        color: '#000',
    },
    buttonContainer: {
        paddingBottom: 16,
        marginTop: 24
    },
    selectIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});

export default CadastroProprietarioScreen;
