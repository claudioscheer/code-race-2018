import React, { Component } from 'react';
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
  inserirInsumo, atualizarInsumo,
} from '../../services/InsumoService';
import storage from '../../services/Storage';
import Insumo from '../../models/insumo';
import IconButton from '../../componentes/button/IconButton'

class CadastroInsumoScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.metodo == 'ins' ? "Novo insumo" : "Atualização de insumo"}`,
    headerLeft: <IconButton iconName="arrow-back" iconColor="#000" onPress={() => { navigation.goBack(null) }} />,

  });


  state = {
    id: '',
    nome: '',
    descricao: '',
    valor: 0,
  }

  metodo = 'ins'

  componentWillMount() {
    this.metodo = this.props.navigation.state.params.metodo//upd ou ins
    if (this.metodo === 'upd') {
      this.setState(this.props.navigation.state.params.item)
    }
  }

  async cadastrar() {

    if (this.state.valor == 0) {
      Toast.show('Você não informou o valor do insumo.');
      return;
    } else if (this.state.nome == '') {
      Toast.show('Você não informou o nome do insumo.');
      return;
    }

    let response;
    let insumo = new Insumo();

    if(this.metodo === 'ins'){
      insumo.nome = this.state.nome;
      insumo.descricao = this.state.descricao;
      insumo.valor = this.state.valor;
      response = await inserirInsumo(insumo);
    }else{
      let filter = {id : this.state.id}
      insumo = this.state;
      response = await atualizarInsumo(filter,insumo);
    }

    if (response.status === 200) {
      Toast.show(response.mensagem);
      this.props.navigation.goBack(null);
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
          label='Descricao'
          borderColor='#b76c94'
          value={this.state.descricao}
          onChangeText={valor => this.alterarValor('descricao', valor)}
          style={{ marginTop: 16 }}
        />
        <Hoshi
          label='Valor'
          borderColor='#b76c94'
          value={this.state.valor}
          onChangeText={valor => this.alterarValor('valor', valor)}
          style={{ marginTop: 16 }}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Cadastrar"
            color="green"
            onPress={() => this.cadastrar()} />
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  buttonContainer: {
    marginTop: 16
  }
});

export default CadastroInsumoScreen;
