import React from 'react';
import {
  Platform,
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import HomeProprietarioScreen from './screens/proprietario/HomeProprietarioScreen';
import HomeFornecedorScreen from './screens/fornecedor/HomeFornecedorScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroProprietarioScreen from './screens/proprietario/CadastroProprietarioScreen';
import StartupScreen from './screens/StartupScreen';
import Icon from './componentes/Icon';

const HomeProprietarioStack = createStackNavigator({
  Home: { screen: HomeProprietarioScreen },
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
  Home: { screen: HomeFornecedorScreen },
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
    screen: HomeFornecedorScreen,
  },
}, {
    initialRouteName: 'Home',
  });

const CadastroProprietarioStack = createStackNavigator({
  CadastroProprietario: { screen: CadastroProprietarioScreen },
});

const AppNavigator = createStackNavigator(
  {
    Startup: { screen: StartupScreen },
    Login: { screen: LoginScreen },
    CadastroProprietario: { screen: CadastroProprietarioStack },
    Proprietario: { screen: NavigatorProprietario },
    Fornecedor: { screen: NavigatorFornecedor },
  },
  {
    initialRouteName: 'Startup',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default AppNavigator;
