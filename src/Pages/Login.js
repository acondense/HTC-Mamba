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
      <View style={styles.container}>
        <Image source={require('../assets/heartalert.png')}/>
        <TextInput
        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
        placeholder="username"/>
        <TextInput
        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
        placeholder="password"/>
        
        <TouchableOpacity onPress={goToPageTwo}
          style={styles.editBtn}
        >
        <Text style={styles.login}>Log in</Text>
        </TouchableOpacity> 
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
    borderWidth: 4,
    borderRadius: 5,
    borderColor: 'black',
    padding: 8
  },
  login: {
    color: 'black'
  }
});
