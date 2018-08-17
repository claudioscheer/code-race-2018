import { AppRegistry } from 'react-native';
import DrawerNavigator from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => DrawerNavigator);
