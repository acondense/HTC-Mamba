import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

class PlacesItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.placeitem}>
        <Text style={styles.placename}>{this.props.location}</Text>
        <Text>{this.props.time}</Text>
      </TouchableOpacity>
    );
  }
}

export default class Monitor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Jordan Michael Bolinas</Text>
        <Text>60 y/o</Text>
        <Text>120/80</Text>

        <View style={styles.places}>
          <Text>Your places</Text>
          <PlacesItem location="Sta. Mesa, Manila" time="12:00" />
          <PlacesItem location="Cubao, Quezon" time="15:00" />
          <PlacesItem location="Makati, City" time="19:00" />
        </View>

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
    color: 'black'
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
