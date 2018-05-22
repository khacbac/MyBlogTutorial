import React, { Component } from 'react';
import {
StyleSheet,
View,
} from 'react-native';
import Home from './Home';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: 'Styling for Text'
        }
    }

    render() {
        return (
      <View style={styles.container}>
            <Home 
                txtStyle={styles.txtStyle}
                text={this.state.text}
            />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtStyle: {
      textAlign: 'center',
      color:'red',
      fontSize: 20,
  }
});