import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import userinfo from '../API/StubsAPI/userinfo';

class PlacesItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.placeitem}>
        <View style={styles.names}>
          <Text style={styles.placename}>{this.props.empname}</Text>
          <Text>{this.props.location}</Text>
        </View>
        <View>
          <Text style={{color: "#e74c3c", margin: 5, fontWeight: "500"}}>X</Text>
        </View>
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
        <TouchableOpacity style={styles.icon}>
          <Image source={require('../assets/dan.jpg')} style={styles.diseaseIcon} />
        </TouchableOpacity>
        <Text style={styles.name}>{userinfo.username}</Text>
        <View style={styles.places}>
          <Text style={{color: '#e74c3c', fontSize: 16, fontWeight: "500"}}>Your employees</Text>
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
  diseaseIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: "#e74c3c",
    borderWidth: 3,
    marginTop: 20,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
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
    height: 250,
  },
  placename: {
    fontSize: 18,
    fontWeight: "500",
  },
  placeitem: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  names: {
    width: 250,
    marginRight: 50,
  },
  xBtn: {
    fontSize: 20,
    fontWeight: "900",
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
