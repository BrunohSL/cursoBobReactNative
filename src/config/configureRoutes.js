import { createStackNavigator } from 'react-native'

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

export default createStackNavigator({

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Teste',
    }
  },
  Home: {
    screen: HomeScreen,
  }

});
