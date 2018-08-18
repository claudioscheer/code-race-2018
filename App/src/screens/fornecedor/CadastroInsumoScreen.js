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
  inserir, inserirInsumo,
} from '../../services/InsumoService';
import storage from '../../services/Storage';
import Insumo from '../../models/insumo';

class CadastroInsumoScreen extends Component {

  static navigationOptions = ({ navigation }) => ({

    headerTitle: `${navigation.state.params.metodo == 'ins' ? "Novo insumo" : "Atualização de insumo"}`,
    headerLeft: <IconButton iconName="menu" iconColor="#000" onPress={() => navigation.openDrawer()} />,
    headerRight: <IconButton iconName="add" iconColor="#000" onPress={() => navigation.navigate('CadastrarAtualizar', { metodo: 'ins' })} />
  });

  constructor(props) {

    super(props);
    this.state = {
      id: '',
      nome: '',
      descricao: '',
      valor: 0,
    }

    let metodo = this.props.navigation.state.params.metodo//upd ou ins

    navigationOptions = {
      headerTitle: '',
    };


  }



  async cadastrar() {

    if (this.state.valor == 0) {
      Toast.show('Você não informou o valor do insumo.');
      return;
    } else if (this.state.nome == '') {
      Toast.show('Você não informou o nome do insumo.');
      return;
    }

    const insumo = new Insumo();
    insumo.nome = this.state.nome;
    insumo.descricao = this.state.descricao;
    insumo.valor = this.state.valor;



    const response = await inserirInsumo(insumo);
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
