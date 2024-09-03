import React, { useEffect, useState } from 'react';
import { Text, View, Button, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import Styles from '../Styles/Styles';
import LoadingScreen from '../LoadingScreen';
import { Audio } from 'expo-av';
import { StackActions } from '@react-navigation/native';

function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('../sounds/buttonClick.mp3'));
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound ? () => {
      sound.unloadAsync();
    } : undefined;
  }, [sound]);

  const handleLogout = () => {
    playSound();
    navigation.navigate('Login');
  };

  const trivia = () => {
    playSound();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.dispatch(StackActions.replace('Trivia'));
    }, 2000);
  };

  const fourPics = () => {
    playSound();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.dispatch(StackActions.replace('FourPics'));
    }, 2000);
  };

  const fetchData = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={Styles.container}>
      {isLoading ? <LoadingScreen /> :
        <View style={[Styles.container, { width: '100%' }]}>
          <ImageBackground style={[Styles.container, { width: '100%' }]} source={require('../assets/bgHome.jpg')}>
            <TouchableOpacity
              style={[{ position: 'absolute', top: 30, right: 20, backgroundColor: 'red', padding: 10, borderRadius: 10 }]}
              onPress={handleLogout}
            >
              <Text style={{ color: 'white' }}>Log out</Text>
            </TouchableOpacity>

            <View style={Styles.card}>
              <View style={Styles.header}>
                <Text style={Styles.headerTitle}>Home</Text>
              </View>
              <View style={Styles.cardBody}>
                <TouchableOpacity style={Styles.button} onPress={trivia}>
                  <Text style={Styles.buttonText}>Trivia Game</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button} onPress={fourPics}>
                  <Text style={Styles.buttonText}>4 Pics 1 Word</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      }
      <StatusBar />
    </View>
  );
}

export default Home;
