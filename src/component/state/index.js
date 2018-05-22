import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Home extends Component {
   state = {
      myState: 'This is my Text from class Home'
   }
   updateState = () => this.setState({ myState: 'This is my Text from class Home,but it changed' })
   render() {
      return (
         <View>
            <Text onPress = {this.updateState}>
               {this.state.myState}
            </Text>
         </View>
      );
   }
}
export default Home;