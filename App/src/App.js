import React from 'react';
import {
  Platform,
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import LotesProprietarioScreen from './screens/proprietario/LotesProprietarioScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroProprietarioScreen from './screens/proprietario/CadastroProprietarioScreen';
import CadastroLoteProprietarioScreen from './screens/proprietario/CadastroLoteProprietarioScreen';
import RelatorioProprietarioScreen from './screens/proprietario/RelatorioProprietarioScreen';
import StartupScreen from './screens/StartupScreen';
import InsumosScreen from './screens/fornecedor/InsumosScreen';
import CadastroInsumoScreen from './screens/fornecedor/CadastroInsumoScreen'
import InformacoesClienteScreen from './screens/fornecedor/ClientesScreen';
import LotesClienteScreen from './screens/fornecedor/LotesClienteScreen';
import Icon from './componentes/Icon';
import ClientesScreen from './screens/fornecedor/ClientesScreen';
import RecomendacaoInsumoScreen from './screens/fornecedor/RecomendacaoInsumoScreen';

const LotesProprietarioStack = createStackNavigator({
  Home: { screen: LotesProprietarioScreen },
});
LotesProprietarioStack.navigationOptions = {
  drawerLabel: 'Lotes',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      color={tintColor}
    />
  ),
};

const RelatorioProprietarioStack = createStackNavigator({
  Insumos: { screen: RelatorioProprietarioScreen },
});
RelatorioProprietarioStack.navigationOptions = {
  drawerLabel: 'Relatório',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="list"
      color={tintColor}
    />
  ),
};

const NavigatorProprietario = createDrawerNavigator({
  Relatorio: { screen: RelatorioProprietarioStack },
  Lotes: { screen: LotesProprietarioStack },
}, {
    initialRouteName: 'Relatorio',
  });


const ClientesFornecedorStack = createStackNavigator({
  Clientes: { screen: ClientesScreen },
});
ClientesFornecedorStack.navigationOptions = {
  drawerLabel: 'Clientes',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      color={tintColor}
    />
  ),
};

const InsumosFornecedorStack = createStackNavigator({
  Insumos: { screen: InsumosScreen },
});
InsumosFornecedorStack.navigationOptions = {
  drawerLabel: 'Insumos',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      color={tintColor}
    />
  ),
};

const NavigatorFornecedor = createDrawerNavigator({
  Clientes: { screen: ClientesFornecedorStack },
  Insumos: { screen: InsumosFornecedorStack },
}, {
    initialRouteName: 'Clientes',
  });

const CadastroProprietarioStack = createStackNavigator({
  CadastroProprietario: { screen: CadastroProprietarioScreen },
});

const CadastroLoteProprietarioStack = createStackNavigator({
  CadastroLoteProprietario: { screen: CadastroLoteProprietarioScreen },
});

const CadastroAtualizacaoInsumoStack = createStackNavigator({
  CadastroAtualizacaoInsumo: { screen: CadastroInsumoScreen },
});

const InformacoesClientesStack = createStackNavigator({
  InformacoesCliente: { screen: InformacoesClienteScreen },
});

const LotesClienteStack = createStackNavigator({
  LotesCliente: { screen: LotesClienteScreen },
});

const RecomendacaoInsumoStack = createStackNavigator({
  RecomendacaoInsumo: { screen: RecomendacaoInsumoScreen },
});

const AppNavigator = createStackNavigator(
  {
    Startup: { screen: StartupScreen },
    Login: { screen: LoginScreen },
    CadastroProprietario: { screen: CadastroProprietarioStack },
    RecomendacaoInsumo: { screen: RecomendacaoInsumoStack },
    LotesCliente: { screen: LotesClienteStack },
    CadastroLoteProprietario: { screen: CadastroLoteProprietarioStack },
    Proprietario: { screen: NavigatorProprietario },
    Fornecedor: { screen: NavigatorFornecedor },
    Insumos: { screen: InsumosScreen },
    CadastrarAtualizar: { screen: CadastroAtualizacaoInsumoStack },
    ListagemCliente: { screen: InformacoesClientesStack }
  },
  {
    initialRouteName: 'Startup',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default AppNavigator;
