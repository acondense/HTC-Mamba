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

export default class Heatstroke extends Component {


	render() {
		return (
		<View style={styles.container}>	
			<Text>Heat Stroke</Text>
			<Text adjustsFontSizeToFit={true} numberOfLines={4} style={{fontSize:20, marginVertical:6}}>
				It is a condition marked by fever and often by unconsciousness, caused by failure of the body's temperature-regulating mechanism when exposed to excessively high temperatures.
			</Text>
			<Text>Symptoms</Text>
				<Text>- High body temperature (40 C or higher) </Text>
				<Text>- Altered mental state or behavior </Text>
				<Text>- headache </Text>
				<Text>- Alteration in sweating </Text>
				<Text>- Nausea and vomiting </Text>
				<Text>- Flushed skin </Text>
				<Text>- Rapid breathing </Text>
				<Text>- Racing of heart beat </Text>
				<Text>- Headache </Text>
				<Text>- Lack of sweating despite the heat </Text>
			<Text>Prevention</Text>
				<Text>- Wear lightweight, light-colored, loose-fitting clothing. </Text>
				<Text>- Use sunscreen with SPF 30 or more </Text>
				<Text>- Drink extra fluids to prevent dehydration: </Text>
				<Text>- Drink at least eight glasses of water, fruit juice, or vegetable juice per day </Text>
				<Text>- Take extra precaution when exercising or working outdoors </Text>
			<Text>Treatment</Text>
				<Text>- call emergency landline</Text>
				<Text>- First aid:</Text>
				<Text>- Move the person to air-conditioned environment or at least any cool area</Text>
				<Text>- Cooling techiniques applicable:</Text>
				<Text>- Fan the air over the patient while wetting his/her skin from sponge or garden hose</Text>
				<Text>- Apply ice packs to patient's armpits, groin, neck, and back</Text>
				<Text>- Immerse the patient in a shower or tub of cool water, or an ice bath.</Text>
		</View>
		
}

const styles = StyleSheet.create({


});