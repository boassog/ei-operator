import React from 'react';
import {
  AppRegistry
} from 'react-native';

import { StackNavigator } from 'react-navigation';

// Views
import Home from './views/Home';
import LoginScreen from './views/LoginScreen';

const App = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: Home },
});

AppRegistry.registerComponent('App', () => App);

export default App;
