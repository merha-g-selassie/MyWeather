import React from 'react';
import { Button, Image, Keyboard, TextInput, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import style from '../Style';
import List from './List';

class Search extends React.Component {
    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return (
                <Image source={require('./icons/user.png')} style={{width: 30, height: 30}}/>
            )
        }
    }
    constructor(props){
        super();
        this.state = {
          city: 'Neuchâtel'
        }
    
    }
    setCity(city){
        this.setState({city})
    }
    submit(){
        Keyboard.dismiss();
        this.props.navigation.navigate('Result', {city: this.state.city});
    }
    render() {
        return(
            <View style={style.container}>
            <TextInput  
                underlineColorAndroid={'transparent'}
                style={style.input}
                value={this.state.city}
                onChangeText={(text) => this.setCity(text)}
                onSubmitEditing={() => this.submit()}
            /> 
            <Button color={style.color}  style={style.button} onPress={() => this.submit()} title="Rechercher"/>
            </View>
        );
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

export default createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    },
})