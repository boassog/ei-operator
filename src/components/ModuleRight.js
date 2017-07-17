import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ModuleRight extends Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      isOnHold: true
    }
  }
  render () {
    var onHold;
    if (this.state.isOnHold) {
      onHold = styles.hold
    } else {
      onHold = styles.payment
    }
    return (
      <View style={[styles.module, onHold]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  module: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hold: {
    backgroundColor: '#BBC3C3',
  },
  payment: {
    backgroundColor: '#00B94A',
  },
});
