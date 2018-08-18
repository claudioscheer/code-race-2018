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
  Home: { screen: InsumosScreen },
});
HomeFornecedorStack.navigationOptions = {
  drawerLabel: 'Home',
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
  Home: {
    screen: createStackNavigator({
      Insumos: { screen: InsumosScreen },
    }),
  },
}, {
    initialRouteName: 'Home',
  });

const CadastroProprietarioStack = createStackNavigator({
  CadastroProprietario: { screen: CadastroProprietarioScreen },
});

const CadastroLoteProprietarioStack = createStackNavigator({
  CadastroLoteProprietario: { screen: CadastroLoteProprietarioScreen },
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
    CadastrarAtualizar: { screen: CadastroInsumoScreen }
  },
  {
    initialRouteName: 'Startup',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default AppNavigator;
