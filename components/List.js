import axios from 'axios';
import React from 'react';
import { ActivityIndicator, Image, ListView } from 'react-native';
import { API_KEY } from '../api_key';
import style from '../Style';
import WeatherRow from './Row';

export default class List extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo / ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return (
                    <Image source={require('./icons/user.png')} style={{width: 30, height: 30}}/>
                ) 
            }
        }
    }
    constructor(props){
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            report:  null,
        }
    }

    componentDidMount(){
        this.fetchWeather();
    }

    fetchWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&APPID=${API_KEY}`)
            .then( response => {
                console.log(response.data)
                this.setState({report: response.data})
            })
            .catch( error => {
                console.log(error);
            });
    }

    // filteredRobots = () => {        
    //     return this.state.report !== null ? this.state.report.list.filter(weather => {
    //         return weather.dt_txt.includes('12:00:00');
    //     }) : null
	// }
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => (
        <WeatherRow day={item} key={item.id} index={parseInt(item.id, 10)} />
      );

    render() {
        const ds = this.state.report !== null ? new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) : null;
        //console.log(this.filteredRobots);
        return this.state.report !== null ?  
        (
            
            <ListView
                dataSource={ds.cloneWithRows(this.state.report.list)}
                renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)} />}/> 
            // <FlatList
            //     data={this.state.report.list}
            //     extraData={this.state}
            //     keyExtractor={this._keyExtractor}
            //     renderItem={this._renderItem}
            // />
        )
        :
        <ActivityIndicator color={style.color} size="large"/>
    }
}