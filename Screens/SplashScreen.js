import React, { useEffect } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import Styles from '../Styles/Styles'

function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login")
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <ImageBackground source={require('../assets/splashScreen.jpg')} resizeMode='cover' style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: "rgba(0,0,0,0.3)", padding: 20, borderRadius: 30, borderWidth: 5, borderColor: 'rgba(0,0,0,0.7)'}}>
          <Text style={{fontSize: 50}}>Trivia Game</Text>
          <Text style={{fontSize: 50}}>4 Pics 1 Word</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default SplashScreen
