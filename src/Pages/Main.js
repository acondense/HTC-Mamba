import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid,
  Animated
} from 'react-native';
import {Scene, Router, Actions, ActionConst} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Tips from './Tips';
import Monitor from './Monitor';

import TabBar from '../Components/TabBar';

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      isScrollDown: false,
    }
  }

  toggleScroll(direction) {
    console.log(direction);
    if (direction === "up")
      this.setState({isScrollDown: false,});
    else
      this.setState({isScrollDown: true});
  }

  render() {
    return (

      <ScrollableTabView style={styles.bar} tabBarPosition='top' renderTabBar={() => <TabBar isScrollDown={this.state.isScrollDown} />}>
        <Monitor tabLabel="Monitor" style={{fontSize: '20'}}/>

      <ScrollableTabView tabBarPosition='top' renderTabBar={() => <TabBar isScrollDown={this.state.isScrollDown} />}>
        <Monitor tabLabel="Monitor" newEmp={this.props.hasNew ? this.props.newEmp : null} hasNew={this.props.hasNew} />
        <Tips tabLabel="Tips" />
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bar: {
    backgroundColor: '#750B0D'
  }
});
