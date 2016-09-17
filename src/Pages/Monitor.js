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

import userinfo from '../API/StubsAPI/userinfo';

class PlacesItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.placeitem}>
        <Text style={styles.placename}>{this.props.empname}</Text>
        <Text>{this.props.location}</Text>
      </TouchableOpacity>
    );
  }
}

export default class Monitor extends Component {

  constructor() {
    super();

    var arrEmp = userinfo.employees;
    this.state = {
      employees: arrEmp,
    }

  }

  _handlePress() {
    Actions.add();
  }

  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Text style={styles.name}>Jordan Michael Bolinas</Text>
        <Text>60 y/o</Text>
        <Text>120/80</Text>

=======
        <Text style={styles.name}>{userinfo.username}</Text>
>>>>>>> 0caae1172bb295a56f9e602b9e377f8b845d41f4
        <View style={styles.places}>
          <Text>Your employees</Text>
          {this.state.employees.map(function(emp, index) {
            return (<PlacesItem key={index} location={emp.location} time="15:00" empname={emp.name} />);
          })}
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
