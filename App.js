import { createAppContainer, createStackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import SighnUpScreen from './src/screens/SighnUpScreen';
import LoginScreen from './src/screens/LoginScreen';
const App = createStackNavigator({
  Home:       MemoListScreen,
    MemoEdit:   MemoEditScreen,
    MemoDetail: MemoDetailScreen,

signIN:       SighnUpScreen,
Login:        LoginScreen,
},
{
  defaultNavigationOptions: {
      headerTitle:'在宅医療連携システム「ゆい」',
      headerStyle: {
        backgroundColor: '#265366',
      },
      headerTitleStyle: {
        color:'#fff',
        fontSize:24,
      },
    },
});
export default createAppContainer(App);
