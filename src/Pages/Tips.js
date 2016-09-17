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

export default class Tips extends Component {

  _gotoSunnyTips() {
    Actions.sunnyTips();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Safety Tips
        </Text>
        <View>
        <Button
          style={styles.category}
          styleDisabled={{color: 'red'}}
          onPress={() => this._gotoSunnyTips()}>
          <Image source={require('../assets/sunny.jpg')} style={styles.categoryBG}>
            <Text style={styles.buttonTitle}>Sunny</Text>
          </Image>
        </Button>
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
    // backgroundColor: 'blue',
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
});

AppRegistry.registerComponent('FloodGo', () => FloodGo);
