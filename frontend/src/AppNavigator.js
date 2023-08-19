import { createStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';
import Main from './screens/Main';

const AppNavigator = createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      initialRouteName: 'Main',
    }
  );
  
  export default createAppContainer(AppNavigator);