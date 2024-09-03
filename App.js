import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Trivia from './Screens/Trivia';
import FourPics from './Screens/FourPics';
import AnswerScreen from './Screens/AnswerScreen';
import FourPicsAnswerScreen from './Screens/FourPicsAnswerScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SplashScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Trivia' component={Trivia} />
        <Stack.Screen name='FourPics' component={FourPics} />
        <Stack.Screen name='AnswerScreen' component={AnswerScreen} />
        <Stack.Screen name='4PicsAns' component={FourPicsAnswerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


