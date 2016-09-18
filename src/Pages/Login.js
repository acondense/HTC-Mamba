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
  TextInput,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';


// import quickstart from '../tests/quickstart.js';


export default class Login extends Component {
  render() {
    const goToPageTwo = () => {
      // check credential here huh?
      this.props.onLoggedInSuccess;
      console.log("Logging in");
      Actions.main({type: ActionConst.RESET});
    }
    console.log("return to log in");
    return (
      <Image style={styles.container} source={require('../assets/background.jpg')}>
        <View style={styles.loginItems}>
        <Image source={require('../assets/heartalert.png')} style={styles.logo}/>
        <TextInput
        style={{height: 60, width: 300, borderColor: 'white', borderWidth: 1, fontSize: 22, fontWeight: "700", color: "white"}}
        placeholderTextColor="white"
        placeholder="email"/>
        <TextInput
        style={{height: 60, width: 300, borderColor: 'white', borderWidth: 1, fontSize: 22, fontWeight: "700", color: "white"}}
        placeholder="password"
        placeholderTextColor="white"
        secureTextEntry={true} />
        
        <TouchableOpacity onPress={goToPageTwo}
          style={styles.editBtn}
        >
        <Text style={styles.login}>Log in</Text>
        </TouchableOpacity>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    resizeMode: 'cover',
    flexDirection: 'column',
    // backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    width: null,
    height: null
  },
  loginItems: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 50,
    flex: 1,
  },
  logo: {
    width: 300,
  },
  welcome: {
    fontSize: 40,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0,
    color: '#750B0D'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  editBtn: {
    borderColor: '#e74c3c',
    borderRadius: 25,
    borderWidth: 5,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
    margin: 30,
  },
  login: {
    color: 'white',
    fontSize: 20,
    fontWeight: "900",
  }
});
