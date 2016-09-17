  import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

export default class Summer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Climate Health
        </Text>
        
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          GET STARTED
        </Button>
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
