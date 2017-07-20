import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  Button,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('Home')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
});
