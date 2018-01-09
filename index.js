import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import FirstScreen from './components/FirstScreen.js';
import TabScreen from './components/TabScreen.js';

const MyProject = StackNavigator({
     Home: {
          screen: FirstScreen
     },
     Tabs: {
          screen: TabScreen
     }
});

AppRegistry.registerComponent('reactNativeTabNavigation', () => MyProject);
