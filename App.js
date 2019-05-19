import React from 'react';
import { StatusBar, View } from 'react-native';
import TabNavigator from './components/TabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
          <TabNavigator/>
      </View>
    );
  }
}