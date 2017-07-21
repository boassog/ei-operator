import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from '../components/Button';

export default class CTAButtons extends Component {
  constructor (props: Object) {
    super(props)
    console.log(props)
  }

  onPress (value) {
    this.props.onSelection(value)
  }

  render () {
    var self = this
    const buttons = this.props.actions.map((action, i) =>
      <Button style={styles.button} key={i} onPress={() => this.onPress(i)}>
        {action.label}
      </Button>
    )
    return (
      <View style={styles.module}>
        {buttons}
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
    flex: 1,
    margin: 2.5,
  },
});
