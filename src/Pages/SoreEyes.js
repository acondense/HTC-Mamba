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

export default class SoreEyes extends Component {


	render() {
		return (
		<View style={styles.container}>	
			<Text>Sore Eyes</Text>
			<Text adjustsFontSizeToFit={true} numberOfLines={4} style={{fontSize:20, marginVertical:6}}>
				  also known as Conjunctivitis; is the inflammation of the conjuctiva or the outer lining of the eyeball and the inner lining of the eyelid.
			</Text>
			<Text>Symptoms</Text>
				<Text>- Redness of the eyes </Text>
				<Text>- Discomfort </Text>
				<Text>- Photophobia (sensitivity to light) </Text>
				<Text>- Difficulty opening the eyes after sleeping </Text>
				<Text>- Eyelids stuck together after sleeping </Text>
				<Text>- Gritty sensation </Text>
			<Text>Prevention</Text>
				<Text>- Wash hands thoroughly with soap and water before you touch your eyes and face </Text>
				<Text>- Materials sucha as towels, eyeglasses, and make-up that made contact with an infected person should be washed and cleaned </Text>
			<Text>Treatment</Text>
				<Text>- Protect the eye </Text>
				<Text>- Get medical help as soon as possible </Text>
		</View>
	}	
}

const styles = StyleSheet.create({


});