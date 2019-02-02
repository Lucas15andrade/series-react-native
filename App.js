import {createStackNavigator, createAppContainer, styleSheet} from 'react-navigation'
import LoginScreen from './src/pages/LoginScreen'

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: 'Bem vindo!'
    })
  }
}, {
  defaultNavigationOptions: {
    title: 'Séries',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#6ca2f7'
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 25
}
  }
});

export default createAppContainer(AppNavigator);