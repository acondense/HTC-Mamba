import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

export default class Add extends Component {

  _handlePress() {
    Actions.main({
      newEmp: {
        name: "John Olivo",
        location: "Sta. Mesa",
        hasSended: "false",
      },
      hasNew: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Add a new employee</Text>
        <TouchableOpacity
          style={styles.editBtn}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          <Text style={styles.monitorBtn}>ADD+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var placeswidth = (Dimensions.get('window').width) - 50;
var placesheight = (Dimensions.get('window').height) - 200;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
  },
  places: {
    alignItems: 'flex-start',
    margin: 20,
    width: placeswidth,
    height: 280,
  },
  placename: {
    fontSize: 18,
    fontWeight: "500",
  },
  placeitem: {
    marginTop: 5,
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
  monitorBtn: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
