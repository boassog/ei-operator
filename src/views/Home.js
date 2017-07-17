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
              <TextInput style={styles.field}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                keyboardAppearance='dark'
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#212121',
  },
  bottom: {
    flex: 1,
  },
  sideLeft: {
    flex: 1,
    flexDirection: 'column',
  },
  sideRight: {
    flex: 1,
  },
  contentField: {
    flex: 2,
    padding: 20,
    backgroundColor: '#2F3335',
  },
  contentType: {
    flex: 1,
    backgroundColor: '#373C3E',
  },
  contentCTA: {
    flex: 1,
    backgroundColor: '#373C3E',
  },
  field: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

AppRegistry.registerComponent('eioperator', () => eioperator);
