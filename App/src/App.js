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

const DrawerNavigator = createDrawerNavigator({
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
    Login: { screen: LoginScreen },
    Drawer: { screen: DrawerNavigator },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default AppNavigator;
