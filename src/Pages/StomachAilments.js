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

export default class StomachAilments extends Component {


	render() {
		return (
		<View style={styles.container}>	
			<Text>Stomach Ailments</Text>
			<Text adjustsFontSizeToFit={true} numberOfLines={4} style={{fontSize:20, marginVertical:6}}>
				   Conditions that affect digestion or cause pain or discomfort in the abdomen are often perceived and described as stomach problems, although the stomach may not always be involved.
			</Text>
			<Text>Symptoms</Text>
				<Text>- Abdominal pain </Text>
				<Text>- Constipation </Text>
				<Text>- Diarrhea </Text>
				<Text>- Indigestion </Text>
				<Text>- Nausea </Text>
				<Text>- Urgent need to stool </Text>
			<Text>Prevention</Text>
				<Text>- Be mindful of food preparation </Text>
				<Text>- Be mindful of storage methods of anything you consume </Text>
				<Text>- Proper hand washing </Text>
			<Text>Treatment</Text>
				<Text>- Drink bitters and soda </Text>
				<Text>- Take ginger into consideration for it can give cure to pain and nausea and everything in between </Text>
				<Text>- Brew a cup of peppermint or spearmint tea </Text>
				<Text>- Take apple cider </Text>
		</View>
	}	
}

const styles = StyleSheet.create({


});