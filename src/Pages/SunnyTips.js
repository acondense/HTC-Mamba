import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

class DiseaseIcon extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.icon}>
        <Image source={this.props.imgsrc} style={styles.diseaseIcon} />
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default class SunnyTips extends Component {

  _handlePressX() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this._handlePressX()}>
          <Text>X</Text>
        </Button>
        <Text>Tips for sunny days</Text>

        <View style={styles.tipsRow}>
          <DiseaseIcon imgsrc={require('../assets/user.jpg')} title="Malaria" />
          <DiseaseIcon imgsrc={require('../assets/user.jpg')} title="Leptospyrosis" />
        </View>
        <View style={styles.tipsRow}>
          <DiseaseIcon imgsrc={require('../assets/user.jpg')} title="Happiness" />
          <DiseaseIcon imgsrc={require('../assets/user.jpg')} title="Sakit sa puso" />
        </View>

      </View>
    );
  }
}

var buttonHeight = (Dimensions.get('window').height - 100) / 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  category: {
    height: buttonHeight,
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  buttonTitle: {
    color: "white",
    fontSize: 30,
  },
  categoryBG: {
    height: buttonHeight,
    flexDirection: 'row',
    backgroundColor: 'blue',
    flex: 1,
    padding: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    height: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  diseaseIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
  },
  tipsRow:{
    flexDirection: 'row',
  },
});

AppRegistry.registerComponent('FloodGo', () => FloodGo);
