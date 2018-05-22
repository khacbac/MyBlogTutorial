import React, { Component } from 'react'
import { View } from 'react-native'
import Home from './Home';

export default class Props extends Component {
    state = {
        myState: 'React Native Tutorial - Props'
    }

    updateState = () => {
        this.setState({ myState: 'The state is updated' })
    }

    render() {
        return (
            <Home
                myState={this.state.myState}
                updateState={this.updateState} />
        )
    }
}