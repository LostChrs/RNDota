
import React, { Component } from 'react';
import { connect, Provider } from "react-redux";
import configureStore from './Store/configureStore';
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './Screens/HomePage';

const store = configureStore();
const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    App: HomePage,
  },
  {
    initialRouteName: 'App',
  }
));

class App extends Component {
  state = {

  }
  componentDidMount() {

  }

  render() {

    return (
      <Provider store={store}>
        <AppNavigator></AppNavigator>
      </Provider>

    );
  }
}

export default App;