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

export default class Sunburn extends Component {


	render() {
		return (
		<View style={styles.container}>	
			<Text>Sunburn</Text>
			<Text adjustsFontSizeToFit={true} numberOfLines={4} style={{fontSize:20, marginVertical:6}}>
				 one of the most common conditions acquired during summer. Severe sunburn is a risk factor for skin cancer and melanoma.
			</Text>
			<Text>Symptoms</Text>
				<Text>- Increased pain, swelling, redness of the skin </Text>
				<Text>- Fever </Text>
				<Text>- Feeling of the need for more fluid </Text>
				<Text>- Sunken eyes </Text>
				<Text>- Dry mouth </Text>
				<Text>- Pass only a little, dark fluid </Text>
			<Text>Prevention</Text>
				<Text>- Avoid sun exposure </Text>
				<Text>- Prevent sun exposure to children </Text>
				<Text>- Know the ABCS: </Text>
				<Text>- A) Away -- stay away from the sun in the middle of the day </Text>
				<Text>- B) Block -- use sunscreen </Text>
				<Text>- C) Cover up -- wear clothing that covers the skin </Text>
				<Text>- S) Speak out -- teach others on how to protect </Text>
			<Text>Treatment</Text>
				<Text>- Take a cool bath</Text>
				<Text>- Apply moisturizer, lotion, low-dose hydrocortisone cream or gel</Text>
				<Text>- Don't break small blisters</Text>
				<Text>-  If needed, take a pain reliever medicine</Text>
		</View>
	}	
}

const styles = StyleSheet.create({


});