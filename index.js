console.disableYellowBox = true;
import { AppRegistry } from 'react-native';

import {
    StackNavigator
} from 'react-navigation';

import App from './App';
import State from './src/component/state';
import Prop from './src/component/props';
import Styling from './src/component/styling';

const Navigator = StackNavigator({
    App: {
        screen: App
    },
    State: {
        screen: State
    },
    Prop: {
        screen: Prop
    },
    Styling: {
        screen: Styling
    },
})

AppRegistry.registerComponent('MyBlogTurotial', () => Navigator);
