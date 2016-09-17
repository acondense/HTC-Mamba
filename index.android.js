/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';

// Pages
import Login from './src/Pages/Login';
import Main from './src/Pages/Main';

class FloodGo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      loading: true,
    };
  };

  componentWillMount() {
    // write a function to check if log in via, async or realm
  }

  setLoggedIn() {
    // alert("Login");
    this.setState({
      logged: true
    });
    console.log("logged: " + this.state.logged);
  }

  exitApp() {
    BackAndroid.exitApp();
  }

  render() {
    const backPress = () => {
      console.log("Exit");
      return;
    }
    return (
      <Router>
        <Scene key="root">
          <Scene onLoginSuccess={this.setLoggedIn} initial={!this.state.logged} hideNavBar={true} key="login" component={Login} title="Login"/>
          <Scene onPop={this.exitApp} initial={this.state.logged} hideNavBar={true} key="main" component={Main} panHandlers={null} onBack={backPress}/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FloodGo', () => FloodGo);