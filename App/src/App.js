import React from 'react';
import {
  Platform,
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import LoginScreen from './screens/LoginScreen';
import StartupScreen from './screens/StartupScreen';
import Icon from './componentes/Icon';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
});
HomeStack.navigationOptions = {
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
    screen: HomeStack,
  },
  Notification: {
    screen: NotificationStack,
  },
}, {
    initialRouteName: 'Home',
  });

const NavigatorFornecedor = createDrawerNavigator({
  Home: {
    screen: HomeStack,
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
