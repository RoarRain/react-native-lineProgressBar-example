/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import AnimatedLineProgressBar from './LineProgressBar/AnimatedLineProgressBar'

const width = Dimensions.get('window').width - 18 -  80.5;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedLineProgressBar
            style={{
                      height: 20,
                      width: width
                   }}
            progressTotal={100}
            progressNumber={50}
            strokeWidth={0}
            barStartColor={'red'}
            barEndColor={'yellow'}
        />
        <AnimatedLineProgressBar
            style={{
                      marginTop: 10,
                      height: 23,
                      width:  width
                   }}
            progressTotal={100}
            progressNumber={70}
            strokeWidth={0}
            barStartColor={'green'}
            barEndColor={'blue'}
        />
        <AnimatedLineProgressBar
            style={{
                      marginTop: 10,
                      height: 25,
                      width: width
                   }}
            progressTotal={100}
            progressNumber={90}
            strokeWidth={0}
            barStartColor={'orange'}
            barEndColor={'purple'}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
