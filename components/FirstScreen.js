import {Button,View, Text} from 'react-native';
import React from 'react';
import {StackNavigator} from 'react-navigation';

export default class FirstScreen extends React.Component {
     static navigationOptions = {
       title: 'Welcome',
     };
     render() {
          return (
               <View>
                    <Text> You can go to the next page1.</Text>
               <Button onPress={() => this.props.navigation.navigate('Tabs')}
                    title="Next Screen"/>
               </View>);
     }
}
