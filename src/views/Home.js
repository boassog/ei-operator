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

import { NavigationActions } from 'react-navigation'

import AppStyles from '../Styles/styles';
import ModuleRight from '../components/ModuleRight';
import CTAButtons from '../components/CTAButtons';

export default class Home extends Component {

  static navigationOptions = {
    header: null
  };

  constructor (props: Object) {
    super(props);
    this.state = {
      text: 'PATENTE',
      status: 0,
      carTypes: [{
        value: 'auto',
        label: 'Auto'
      }, {
        value: 'camioneta',
        label: 'Camioneta'
      }, {
        value: 'moto',
        label: 'Moto'
      }, {
        value: 'bicicleta',
        label: 'Bicicleta'
      }],
      operationTypes: [{
        value: 'in',
        label: 'Ingresar'
      }, {
        value: 'ei',
        label: 'Pago Ei'
      }, {
        value: 'out',
        label: 'Cobrar'
      }],
      menuOptions: [{
        value: 'promocion',
        label: 'Promoción'
      }, {
        value: 'reservas',
        label: 'Reservas'
      }, {
        value: 'cierre',
        label: 'Cierre Caja'
      }, {
        value: 'logout',
        label: 'Salir'
      }]
    };
  }

  onCarTypeSelection (value) {
    console.log(this.state.carTypes[value])
  }

  onOperationTypeSelection (value) {
    var option = this.state.operationTypes[value]
    switch (option.value) {
      case 'in':
        this.setState({ status: (this.state.status == 1) ? 0 : 1 })
      break;
      default:
    }
  }

  onMenuSelection (value) {
    var option = this.state.menuOptions[value]
    switch (option.value) {
      case 'logout':
        const backAction = NavigationActions.back({
          routeName: 'Login'
        })
        console.log(backAction)
        this.props.navigation.dispatch(backAction)
        break;
      default:
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.sideLeft}>
            <View style={styles.contentField}>
              <TextInput style = {styles.field}
                onChangeText = {(text) => this.setState({text})}
                placeholderTextColor = {'#555555'}
                placeholder = {"MTI 970"}
                // value={this.state.text}
                keyboardAppearance = {'dark'}
                returnKeyType = {'search'}
                keyboardType = {'ascii-capable'}
                clearButtonMode = 'never'
                autoCorrect = {false}
                autoCapitalize = {'characters'}
                maxLength={9}
                onSubmitEditing={Keyboard.dismiss}
              />
            </View>
            <View style={styles.contentType}>
              <CTAButtons actions={this.state.carTypes}
                onSelection={this.onCarTypeSelection.bind(this)}>
              </CTAButtons>
            </View>
            <View style={styles.contentCTA}>
              <CTAButtons actions={this.state.operationTypes}
                onSelection={this.onOperationTypeSelection.bind(this)}>
              </CTAButtons>
            </View>
          </View>
          <View style={styles.sideRight}>
            <ModuleRight status={this.state.status}></ModuleRight>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.contentMenuCTA}>
            <CTAButtons actions={this.state.menuOptions}
              onSelection={this.onMenuSelection.bind(this)}>
            </CTAButtons>
          </View>
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
    height: Platform.OS === 'ios' ? 395 : 385,
    flexDirection: 'row',
    backgroundColor: '#212121',
  },
  bottom: {
    flex: 1,
    padding: 2.5,
    justifyContent: 'flex-end',
  },
  contentMenuCTA: {
    height: 100,
  },
  sideLeft: {
    flex: 1,
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
    borderRadius: AppStyles.generalLayout.borderRadius,
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
    fontSize: 110,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'License Plate',
    color: '#FFFFFF',
  },
});


// <View style={styles.container}>
//   <View style={styles.top}>
//     <View style={styles.sideLeft}>
//       <View style={styles.contentField}>
//         <TextInput style = {styles.field}
//           onChangeText = {(text) => this.setState({text})}
//           placeholderTextColor = {'#555555'}
//           placeholder = {"MTI 970"}
//           // value={this.state.text}
//           keyboardAppearance = {'dark'}
//           returnKeyType = {'search'}
//           keyboardType = {'ascii-capable'}
//           clearButtonMode = 'never'
//           autoCorrect = {false}
//           autoCapitalize = {'characters'}
//           maxLength={9}
//           onSubmitEditing={Keyboard.dismiss}
//         />
//       </View>
//       <View style={styles.contentType}>
//         <ContentType onSelection={this.onCarTypeSelection.bind(this)}></ContentType>
//       </View>
//       <View style={styles.contentCTA}>
//         <ContentCTA></ContentCTA>
//       </View>
//     </View>
//     <View style={styles.sideRight}>
//       <ModuleRight status={this.state.status}></ModuleRight>
//     </View>
//   </View>
//   <View style={styles.bottom}>
//     <Menu></Menu>
//   </View>
// </View>
