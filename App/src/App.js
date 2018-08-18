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
import StartupScreen from './screens/StartupScreen';
import InsumosScreen from './screens/fornecedor/InsumosScreen';
import CadastroInsumoScreen from './screens/fornecedor/CadastroInsumoScreen'
import InformacoesClienteScreen from './screens/fornecedor/ClientesScreen'
import Icon from './componentes/Icon';

const HomeProprietarioStack = createStackNavigator({
  Home: { screen: LotesProprietarioScreen },
});
HomeProprietarioStack.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="flower"
      color={tintColor}
    />
  ),
};

const HomeFornecedorStack = createStackNavigator({
  Insumos: { screen: InsumosScreen },
});
HomeFornecedorStack.navigationOptions = {
  drawerLabel: 'Insumos',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="flower"
      color={tintColor}
    />
  ),
};

const NavigatorProprietario = createDrawerNavigator({
  Home: {
    screen: HomeProprietarioStack,
  },
}, {
    initialRouteName: 'Home',
  });

const NavigatorFornecedor = createDrawerNavigator({
  Clientes: {
    screen: createStackNavigator({
      Clientes: { screen: InformacoesClienteScreen },
    }),
  },
  Insumos: {
    screen: createStackNavigator({
      Insumos: { screen: InsumosScreen },
    }),
  }
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

const AppNavigator = createStackNavigator(
  {
    Startup: { screen: StartupScreen },
    Login: { screen: LoginScreen },
    CadastroProprietario: { screen: CadastroProprietarioStack },
    CadastroLoteProprietario: { screen: CadastroLoteProprietarioStack },
    Proprietario: { screen: NavigatorProprietario },
    Fornecedor: { screen: NavigatorFornecedor },
    Insumos: { screen: InsumosScreen },
    CadastrarAtualizar: { screen: CadastroAtualizacaoInsumoStack },
    ListagemCliente : { screen: InformacoesClientesStack}
  },
  {
    initialRouteName: 'Startup',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default AppNavigator;
