import React from 'react';
import { Image, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import style from '../Style';

class About extends React.Component {

    static navigationOptions = {
        title: 'A propos',
        tabBarIcon: () => {
            return (
                <Image source={require('./icons/user.png')} style={{width: 30, height: 30}}/>
            ) 
        }
    }

    search(){
        this.props.navigation.navigate('Search');
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>
                    A propos de moi
                </Text>
                <Text>lorem </Text>
            </View>
        );
    }
} 

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default createStackNavigator({
    About: {
        screen: About,
        navigationOptions
    }
})