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
import NotificationScreen from './screens/NotificationScreen';
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

const NotificationStack = createStackNavigator({
  Notification: { screen: NotificationScreen },
});
NotificationStack.navigationOptions = {
  drawerLabel: 'Notifications',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="add"
      color={tintColor}
    />
  ),
};

const NavigatorProprietario = createDrawerNavigator({
  Home: {
    screen: HomeProprietarioStack,
  },
  Notification: {
    screen: NotificationStack,
  },
}, {
    initialRouteName: 'Home',
  });

const NavigatorFornecedor = createDrawerNavigator({
  Home: {
    screen: HomeFornecedorScreen,
  },
  Notification: {
    screen: NotificationStack,
  },
}, {
    initialRouteName: 'Home',
  });

const AppNavigator = createStackNavigator(
  {
    Startup: { screen: StartupScreen },
    Login: { screen: LoginScreen },
    CadastroProprietario: createStackNavigator({
      CadastroProprietario: { screen: CadastroProprietarioScreen },
    }, {
        navigationOptions: {
          headerTitle: 'Cadastro',
        },
      }),
    Proprietario: { screen: NavigatorProprietario },
    Fornecedor: { screen: NavigatorFornecedor },
  },
  {
    initialRouteName: 'CadastroProprietario',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default AppNavigator;
