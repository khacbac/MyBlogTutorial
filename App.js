import React, { Component } from 'react';
import { AppRegistry, View, FlatList, Text, TouchableOpacity } from 'react-native';
import data from './src/data/data';

class reactTutorialApp extends Component {

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate(item.screen);
                }}
            >
                <Text style={{ fontSize: 20, color: 'black',padding: 10 }}>{item.title}</Text>

            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={data}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.screen}
                ItemSeparatorComponent={()=><View style={{height: 0.5,backgroundColor:'grey'}}/>}
            />
        );
    }
}
export default reactTutorialApp