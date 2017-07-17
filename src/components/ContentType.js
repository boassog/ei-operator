import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from '../components/Button';

export default class ContentCTA extends Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      isOnPressing: false
    }
  }
  render () {
    var onPressProps;
    if (this.state.isOnPressing) {
      onPressProps = styles.buttonStylePressing
    } else {
      onPressProps = styles.buttonStyle1
    }
    return (
      <View style={styles.module}>
      <Button style={styles.button}>
        Auto
      </Button>
      <Button style={styles.button}>
        Camioneta
      </Button>
      <Button style={styles.button}>
        Moto
      </Button>
      <Button style={styles.button}>
        Bici
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  module: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'orange',
    flex: 1,
  },
  buttonStylePressing: {
    borderColor: 'red',
    backgroundColor: 'red',
    flex: 1,
  },
  buttonStyle1: {
    borderColor: '#d35400',
    backgroundColor: '#e98b39',
    flex: 1,
  },
});
