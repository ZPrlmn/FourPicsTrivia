import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from "./Screens/SplashScreen";
import Login from "./Screens/Login";
import Home from "./Screens/Home"
import Trivia from "./Screens/Trivia";
import AnswerScreen from "./Screens/AnswerScreen"

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SplashScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Trivia' component={Trivia} />
        <Stack.Screen name='AnswerScreen' component={AnswerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
