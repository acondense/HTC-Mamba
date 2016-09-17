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

export default class Rabies extends Component {


	render() {
		return (
		<View style={styles.container}>	
			<Text>Rabies</Text>
			<Text adjustsFontSizeToFit={true} numberOfLines={4} style={{fontSize:20, marginVertical:6}}>
				   is a viral disease that causes acute inflammation of the brain in humans and other mammals.
			</Text>
			<Text>Symptoms</Text>
				<Text>- Fever </Text>
				<Text>- Partial paralysis </Text>
				<Text>- Paranoia </Text>
				<Text>- Hallucinations </Text>
				<Text>- Abnormal behavior </Text>
				<Text>- Hydrophobia </Text>
			<Text>Prevention</Text>
				<Text>- Vaccinate dogs, cats and ferrets with rabies </Text>
				<Text>- Keep pets under supervision </Text>
				<Text>- Dont handle wild animals or strays </Text>
				<Text>- Contact animal control upon observing a wild animal or stray </Text>
			<Text>Treatment</Text>
				<Text>- Clean the wound with soap and water for 10 to 15 minutes </Text>
				<Text>- Apply alcohol to the wound </Text>
				<Text>- Leave the wound open  </Text>
				<Text>- Go to the nearest hospital and explain that you've been bitten </Text>
				<Text>- Injection of rabies immunoglobulin as well as rabies vaccine </Text>
		</View>
	}	
}

const styles = StyleSheet.create({


});