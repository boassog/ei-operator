'use strict';

import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
// import isEqual from 'lodash.isequal';

import AppStyles from '../Styles/styles';

const Button = React.createClass({
  propTypes: {
    text: PropTypes.string,
    textStyle: Text.propTypes.style,
    disabledStyle: Text.propTypes.style,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.element
    ]),
    accessibilityLabel: PropTypes.string,
    activeOpacity: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    activityIndicatorColor: PropTypes.string,
    delayLongPress: PropTypes.number,
    delayPressIn: PropTypes.number,
    delayPressOut: PropTypes.number,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    onPressIn: PropTypes.func,
    onPressOut: PropTypes.func,
    background: (TouchableNativeFeedback.propTypes) ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
  },

  statics: {
    isAndroid: (Platform.OS === 'android'),
  },

  _renderChildren: function() {
    let childElements = [];
    React.Children.forEach(this.props.children, (item) => {
      if (typeof item === 'string' || typeof item === 'number') {
        const element = (
          <Text
            style={[styles.textButton, this.props.textStyle]}
            allowFontScaling={this.props.allowFontScaling}
            key={item}>
            {item}
          </Text>
        );
        childElements.push(element);
      } else if (React.isValidElement(item)) {
        childElements.push(item);
      }
    });
    return (childElements);
  },

  shouldComponentUpdate: function (nextProps, nextState) {
    // if (!isEqual(nextProps, this.props)) {
    //   return true;
    // }
    return false;
  },

  _renderInnerText: function () {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          size='small'
          style={styles.spinner}
          color={this.props.activityIndicatorColor || 'black'}
        />
      );
    }
    return this._renderChildren();
  },

  render: function () {
    if (this.props.isDisabled === true || this.props.isLoading === true) {
      return (
        <View style={[styles.button, this.props.style, (this.props.disabledStyle || styles.opacity)]}>
          {this._renderInnerText()}
        </View>
      );
    }
    // Extract Touchable props
    let touchableProps = {
      accessibilityLabel: this.props.accessibilityLabel,
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress,
      activeOpacity: this.props.activeOpacity,
      delayLongPress: this.props.delayLongPress,
      delayPressIn: this.props.delayPressIn,
      delayPressOut: this.props.delayPressOut,
    };
    if (Button.isAndroid) {
      touchableProps = Object.assign(touchableProps, {
        background: this.props.background || TouchableNativeFeedback.SelectableBackground()
      });
      return (
        <TouchableNativeFeedback {...touchableProps}>
          <View style={[styles.button, this.props.style]}>
            {this._renderInnerText()}
          </View>
        </TouchableNativeFeedback>
      )
    } else {
      return (
        <TouchableOpacity {...touchableProps}
          style={[styles.button, this.props.style]}>
          {this._renderInnerText()}
        </TouchableOpacity>
      );
    }
  }
});

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: AppStyles.generalLayout.borderRadius,
    backgroundColor: '#373C3E',
  },
  textButton: {
    flex: 1,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    color: 'white',
  },
  spinner: {
    alignSelf: 'center',
  },
  opacity: {
    opacity: 0.8,
  },
});

module.exports = Button;


//
// render () {
//   var onPressProps;
//   if (this.state.isOnPressing) {
//     onPressProps = styles.buttonStylePressing
//   } else {
//     onPressProps = styles.buttonStyle1
//   }
//   return (
//     <View style={styles.container}>
//       <Button
//         background={(Platform.OS === 'android') ? TouchableNativeFeedback.Ripple('#f39c12', true) : null}
//         style={styles.buttonStyle} textStyle={styles.textStyle}
//         onPress={() => {
//           console.log('world!')
//         }}>
//         Hello
//       </Button>
//       <Button
//         textStyle={styles.textStyle}
//         style={onPressProps}
//         activeOpacity={1}
//         isOnPressing={this.state.isOnPressing}
//         onPressIn={() => console.log('onPressIn')}
//         onPressOut={() => console.log('onPressOut')}>
//         Hello
//       </Button>
//       <Button
//         style={styles.buttonStyle2} textStyle={styles.textStyle}
//         onPress={() => {
//           console.log('world!')
//         }}>
//         Hello
//       </Button>
//       <Button
//         style={styles.buttonStyle3} textStyle={styles.textStyle}
//         onPress={() => {
//           console.log('world!')
//         }}>
//         Hello
//       </Button>
//       <Button
//         style={styles.buttonStyle4} textStyle={styles.textStyle}
//         onPress={() => {
//           console.log('world!')
//         }}>
//         Hello
//       </Button>
//       <Button
//         style={styles.buttonStyle5} textStyle={styles.textStyle}
//         onPress={() => {
//           console.log('world!')
//         }}>
//         Hello
//       </Button>
//       <Button
//         style={styles.buttonStyle6} textStyle={styles.textStyle}
//         onPress={() => {
//           console.log('world!')
//         }}>
//         Hello
//       </Button>
//       <Button
//         style={styles.buttonStyle7} textStyle={styles.textStyle6}
//         onPress={() => {
//           console.log('world!')
//         }}>
//         Hello
//       </Button>
//       <Button
//         isLoading={true}
//         style={styles.buttonStyle7} textStyle={styles.textStyle6}
//         onPress={() => {
//           console.log('world!')
//         }}>
//         Hello
//       </Button>
//       <Button
//         disabledStyle={styles.buttonStyle8}
//         isDisabled={true}
//         textStyle={styles.textStyle8}>
//         Disabled
//       </Button>
//       <Button style={styles.buttonStyle8}
//         textStyle={styles.textStyle8}
//         onPress={() => console.log('world!')}>
//         <View style={styles.customViewStyle}>
//           <Text style={{textAlign: 'center', fontFamily: 'Avenir'}}>
//             Custom inner view
//           </Text>
//         </View>
//       </Button>
//     </View>
//   )
// }
// }
//
// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginLeft: 20,
//   marginRight: 20,
// },
// textStyle: {
//   color: 'white'
// },
// textStyle6: {
//   color: '#8e44ad',
//   fontFamily: 'Avenir',
//   fontWeight: 'bold'
// },
// buttonStylePressing: {
//   borderColor: 'red',
//   backgroundColor: 'red'
// },
// buttonStyle: {
//   borderColor: '#f39c12',
//   backgroundColor: '#f1c40f'
// },
// buttonStyle1: {
//   borderColor: '#d35400',
//   backgroundColor: '#e98b39'
// },
// buttonStyle2: {
//   borderColor: '#c0392b',
//   backgroundColor: '#e74c3c'
// },
// buttonStyle3: {
//   borderColor: '#16a085',
//   backgroundColor: '#1abc9c'
// },
// buttonStyle4: {
//   borderColor: '#27ae60',
//   backgroundColor: '#2ecc71'
// },
// buttonStyle5: {
//   borderColor: '#2980b9',
//   backgroundColor: '#3498db'
// },
// buttonStyle6: {
//   borderColor: '#8e44ad',
//   backgroundColor: '#9b59b6'
// },
// buttonStyle7: {
//   borderColor: '#8e44ad',
//   backgroundColor: 'white',
//   borderRadius: 0,
//   borderWidth: 3,
// },
// buttonStyle8: {
//   backgroundColor: 'white',
//   borderColor: '#333',
//   borderWidth: 2,
//   borderRadius: 22,
// },
// textStyle8: {
//   width: 200,
//   fontFamily: 'Avenir Next',
//   fontWeight: '500',
//   color: '#333',
// },
// customViewStyle: {
//   width: 120,
//   height: 40,
//   alignItems: 'center',
//   flexDirection: 'row',
// }
// })
