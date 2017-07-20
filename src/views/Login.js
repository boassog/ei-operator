import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  TextInput,
  Keyboard,
  View,
  StatusBar,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Button from '../components/Button';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
        <View style={styles.top}>
          <View style={styles.contentField}>
            <TextInput style = {styles.field}
              onChangeText = {(text) => this.setState({text})}
              placeholderTextColor = {'#555555'}
              placeholder = {"Usuario"}
              // value={this.state.text}
              keyboardAppearance = {'dark'}
              keyboardType = {'ascii-capable'}
              clearButtonMode = 'never'
              autoCorrect = {false}
              onSubmitEditing={Keyboard.dismiss}
            />
            <TextInput style = {styles.field}
              onChangeText = {(text) => this.setState({text})}
              placeholderTextColor = {'#555555'}
              placeholder = {"Contraseña"}
              // value={this.state.text}
              keyboardAppearance = {'dark'}
              keyboardType = {'ascii-capable'}
              clearButtonMode = 'never'
              autoCorrect = {false}
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Button style={styles.button}
            onPress={() => navigate('Home')}
            >
            Ingresar
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    backgroundColor: '#212121',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    // flex: 1,
    padding: 30,
    margin: 10,
    width: 400,
    height: 100,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    borderRadius: AppStyles.generalLayout.borderRadius,
    backgroundColor: 'grey',
  },
  button: {
    // flex: 1,
    width: 400,
    height: 100,
  },
});
