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
import Add from './src/Pages/Add';
import SunnyTips from './src/Pages/SunnyTips.js';

import Heatstroke from './src/Pages/Heatstroke.js';
import Sunburn from './src/Pages/Sunburn.js';
import SoreEyes from './src/Pages/SoreEyes.js';
import CoughAndCold from './src/Pages/CoughAndCold.js';
import Rabies from './src/Pages/Rabies.js';
import StomachAilments from './src/Pages/StomachAilments.js';
import SkinDisease from './src/Pages/SkinDisease.js';

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
<<<<<<< HEAD
          <Scene onPop={this.exitApp} initial={this.state.logged} hideNavBar={true} key="main" component={Main} panHandlers={null} onBack={backPress}/>

          <Scene component={SunnyTips} hideNavBar={true} key="sunnyTips" />
          <Scene component={Heatstroke} hideNavBar={true} key="heatStroke" />
          <Scene component={Sunburn} hideNavBar={true} key="sunnyBurn" />
          <Scene component={SoreEyes} hideNavBar={true} key="soreEyes" />
          <Scene component={CougnAndCold} hideNavBar={true} key="cghandcld" />
          <Scene component={Rabies} hideNavBar={true} key="rabies" />
          <Scene component={SkinDisease} hideNavBar={true} key="skinDisease" />

=======
          <Scene onPop={this.exitApp} initial={this.state.logged} hideNavBar={true} key="main" component={Main} panHandlers={null} onBack={backPress} hasNew={false}/>
>>>>>>> 42591bcfd375d7558ac1b128a14dee0d622571bf
          <Scene component={SunnyTips} hideNavBar={true} key="sunnytips" />
          <Scene component={Add} hideNavBar={true} key="add" />

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
