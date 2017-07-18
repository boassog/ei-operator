import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Platform,
  StatusBar,
  View
} from 'react-native';

import ModuleRight from '../components/ModuleRight';
import ContentType from '../components/ContentType';
import ContentCTA from '../components/ContentCTA';

export default class eioperator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'PATENTE' };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.top}>
          <View style={styles.sideLeft}>
            <View style={styles.contentField}>
              <TextInput style = {styles.field}
                onChangeText = {(text) => this.setState({text})}
                placeholderTextColor = '#555555'
                placeholder = "MTI 970"
                // value={this.state.text}
                keyboardAppearance = 'dark'
                returnKeyType = 'search'
                keyboardType = {'ascii-capable'}
                autoCapitalize = 'characters'
                clearButtonMode = 'never'
                autoCorrect = {false}
              />
            </View>
            <View style={styles.contentType}>
              <ContentType></ContentType>
            </View>
            <View style={styles.contentCTA}>
              <ContentCTA></ContentCTA>
            </View>
          </View>
          <View style={styles.sideRight}>
            <ModuleRight></ModuleRight>
          </View>
        </View>
        <View style={styles.bottom}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#212121',
  },
  top: {
    // flex: 1,
    height: 390,
    flexDirection: 'row',
    backgroundColor: '#212121',
  },
  bottom: {
    flex: 1,
  },
  sideLeft: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 2.5,
  },
  sideRight: {
    flex: 1,
    paddingLeft: 2.5,
    paddingRight: 5,
    paddingBottom: 2.5,
  },
  contentField: {
    flex: 2,
    backgroundColor: '#2F3335',
    borderRadius: 3,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginBottom: 2.5,
  },
  contentType: {
    flex: 1,
    backgroundColor: '#212121',
  },
  contentCTA: {
    flex: 1,
    backgroundColor: '#212121',
  },
  field: {
    flex: 1,
    fontSize: 80,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

AppRegistry.registerComponent('eioperator', () => eioperator);
