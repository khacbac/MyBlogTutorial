import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View>
                <Text onPress={this.props.updateState}>
                    {this.props.myState}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});