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

export default class CoughAndCold extends Component {


	render() {
		return (
		<View style={styles.container}>	
			<Text>Cough and Cold</Text>
			<Text adjustsFontSizeToFit={true} numberOfLines={4} style={{fontSize:20, marginVertical:6}}>
				  Coughs and colds are usually caused by infection with a germ called a virus. They normally clear away on their own, and antibiotic medicines are usually of no use.
			</Text>
			<Text>Symptoms</Text>
				<Text>- Cough </Text>
				<Text>- Runny nose </Text>
				<Text>- Fever </Text>
				<Text>- Sore throat </Text>
				<Text>- Headache </Text>
				<Text>- Tiredness </Text>
			<Text>Prevention</Text>
				<Text>- Wash your hands with soap and water </Text>
				<Text>- Rubbing hands with alcohol and sanitizers </Text>
				<Text>- Keep a healthy lifestyle </Text>
				<Text>- Have a balanced diet, sufficient sleep, and enough exercise to strengthen immune system </Text>
			<Text>Treatment</Text>
				<Text>- Drink plebty of fluids </Text>
				<Text>- Drink Paracetamol/Ibuprofen to ease aches and pains, headaches, and fever </Text>
				<Text>- For babies with a blocked nose, put a few drops of salt water (saline) into the nose just before feeds </Text>
				<Text>- Apply vapour rubs into the chest and back to reduce pains </Text>
				<Text>- Inhaling steam can also relieve congestion and coughing </Text>
				<Text>- Suck menthol sweets to ease sore throats </Text>
		</View>
		);
	}	
}

const styles = StyleSheet.create({


});