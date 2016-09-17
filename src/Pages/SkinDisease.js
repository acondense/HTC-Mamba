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

export default class SkinDisease extends Component {


	render() {
		return (
		<View style={styles.container}>	
			<Text>Skin Disease</Text>
			<Text adjustsFontSizeToFit={true} numberOfLines={4} style={{fontSize:20, marginVertical:6}}>
				  a condition or disease affecting the skin.
			</Text>
			<Text>Symptoms</Text>
				<Text>- Raised bumps that are red or white </Text>
				<Text>- Rash that is painful or itchy </Text>
				<Text>- Scaly or rough skin </Text>
				<Text>- Dry skin </Text>
				<Text>- Discolored patchs of skin </Text>
				<Text>- A loss of skin pigment </Text>
			<Text>Prevention</Text>
				<Text>- Wash your hands frequently with soap and water </Text>
				<Text>- Drink plenty of water </Text>
				<Text>- Eat a nutritious diet </Text>
				<Text>- Avoid sharing utensils and drinking glasses with other people </Text>
				<Text>- Clean things in public spaces, such as gym equipment, before using them </Text>
				<Text>- Don't share personal items like blankets </Text>
			<Text>Treatment</Text>
				<Text>- Antibiotics </Text>
				<Text>- Vitamins or steriods injection </Text>
				<Text>- Laser therapy </Text>
				<Text>- Antihistamines </Text>
				<Text>- Targeted prescription medications </Text>
				<Text>- Medicated creams and ointments </Text>
		</view>
	}	
}

const styles = StyleSheet.create({


});