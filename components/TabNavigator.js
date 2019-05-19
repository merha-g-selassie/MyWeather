import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import About from './About';
import Search from './Search';

const TabNavigator = createBottomTabNavigator({
  Search: Search,
  About: About,
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    style: {
      backgroundColor: '#A2273C',
      borderTopWidth: 1,
      borderColor: '#3f101c'
    }
  }
});

export default createAppContainer(TabNavigator);