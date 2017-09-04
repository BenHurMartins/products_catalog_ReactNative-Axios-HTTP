import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import ListaItens from './src/components/ListaItens.js';

export default class chamadaHttp extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <ListaItens/>
      </View>
    );
  }
}

AppRegistry.registerComponent('chamadaHttp', () => chamadaHttp);
