import React from 'react';
import { TabNavigator } from "react-navigation";

import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
export default class TabScreen extends React.Component {
     static navigationOptions = {
          title: "My tabs",
     }
     render() {
          var TabScreen = TabNavigator({
               FirstTab : {screen: FirstTab },
               SecondTab: {screen: SecondTab }
          });

          return <TabScreen/>;
     }
}
