import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppStyles from '../Styles/styles';

export default class ModuleRight extends Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      curTime: '00:00',
    }
  }
  componentWillMount(){

  }

  componentWillUnmount() {
    if (this.props.status == 0){

    }
  }

  render () {
    let moduleView = null;
    let moduleStyle = null;
    if (this.props.status == 0) {
      moduleStyle = styles.hold
      moduleView =
        <Text style={styles.hour}>
          {this.state.curTime}
        </Text>
    } else {
      moduleStyle = styles.payment
      moduleView =
      <View style={{flex: 1}}>
        <View style={styles.top}>
          <View style={styles.sideLeft}>
            <Text style={styles.subtitle}>
              INGRESO
            </Text>
            <Text style={styles.normal}>
              Martes, 22 Abril
            </Text>
            <Text style={styles.dateHour}>
              19:22 hs
            </Text>
          </View>
          <View style={styles.sideRight}>
            <Text style={styles.subtitle}>
              SALIDA
            </Text>
            <Text style={styles.normal}>
              Martes, 22 Abril
            </Text>
            <Text style={styles.dateHour}>
              20:24 hs
            </Text>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.itemRow}>
            <Text style={[styles.normal, styles.description]}>
              Estacionamiento - 1:02 h
            </Text>
            <Text style={styles.normal}>
              $ 38,00
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.total}>
            $ 38.00
          </Text>
        </View>
      </View>
    }
    return (
      <View style={[styles.module, moduleStyle]}>
        {moduleView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  module: {
    flex: 1,
    borderRadius: AppStyles.generalLayout.borderRadius,
  },
  // Hold
  hold: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBC3C3',
  },
  hour: {
    fontSize: 120,
    fontFamily: 'Roboto',
    fontWeight: '900',
    color: '#212121',
  },
  // Payment
  payment: {
    backgroundColor: '#00BD3F',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 30,
  },
  middle: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'flex-end',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, .08)',
    borderBottomLeftRadius: AppStyles.generalLayout.borderRadius,
    borderBottomRightRadius: AppStyles.generalLayout.borderRadius,
  },
  sideLeft: {
    flex: 1,
  },
  sideRight: {
    flex: 1,
  },
  // Styles payment
  // TOP
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
    marginBottom: 10,
  },
  normal: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Roboto',
    color: 'white',
    marginBottom: 4,
  },
  dateHour: {
    fontSize: 30,
    fontWeight: '800',
    fontFamily: 'Roboto',
    color: 'white',
  },
  // Middle
  itemRow: {
    // flex: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    flex: 2,
  },
  // Total
  total: {
    fontSize: 80,
    paddingRight: 30,
    color: 'white',
    fontWeight: '700',
    textAlign: 'right',
    fontFamily: 'Roboto',
  }
});
