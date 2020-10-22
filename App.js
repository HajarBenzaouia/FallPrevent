import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import Login from './src/Login';
import Signup from './src/Signup';
import Tasks from './src/Notification';

const Stack = createStackNavigator();


export default class App extends Component {
  render(){
    return (

      <View  style={styles.container}>
        <Tasks />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
  }

});