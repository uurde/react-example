import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import List from './src/components/List';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Örnek Proje'} />
        <List />
      </View>
    );
  }
}
