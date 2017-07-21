import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

// Views
import Home from './views/Home';
import Login from './views/Login';

const App = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
});

AppRegistry.registerComponent('App', () => App);

export default App;
