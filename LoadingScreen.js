import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ImageBackground, Text } from 'react-native';
import Styles from './Styles/Styles';
import LoadingStyles from './Styles/LoadingStyles';

const DATA = [
  { id: 0, img: require('./assets/Loading/loading1.jpg'), dark: true },
  { id: 1, img: require('./assets/Loading/loading2.jpg'), dark: false },
  { id: 2, img: require('./assets/Loading/loading3.jpg'), dark: false },
  { id: 3, img: require('./assets/Loading/loading4.jpg'), dark: true },
  { id: 4, img: require('./assets/Loading/loading5.jpg'), dark: true },
];

const Tip = [
  { id: 1, tip:'\"Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible.\" - Francis of Assisi' },
  { id: 2, tip:'\"The only way to do great work is to love what you do.\" - Steve Jobs' },
  { id: 3, tip:'\"The secret of getting ahead is getting started.\" - Mark Twain' },
  { id: 4, tip:'\"It always seems impossible until it\'s done.\" - Nelson Mandela' },
  { id: 5, tip:'\"The more you use your brain, the more brain you will have to use.\" - George A. Dorsey' },
]

const LoadingScreen = () => {
  const [theme, setTheme] = useState();
  const [imageSource, setImageSource] = useState(null);
  const [tip, setTip] = useState('')

  useEffect(() => {
    const tipValue = Math.floor(Math.random() * 5);
    setTip(Tip[tipValue].tip);
    const value = Math.floor(Math.random() * 5);
    setTheme(DATA[value].dark);
    setImageSource(DATA[value].img);
  }, []);
  
  return (
    <View style={[Styles.container, { width: '100%' }]}>
      <ImageBackground source={imageSource} style={[Styles.container, { width: '100%' }]}>
        <ActivityIndicator size="large" color="gray" />
        <View style={[LoadingStyles.textContainer, theme ? {backgroundColor: 'rgba(50,50,50,0.8)'} : {backgroundColor:'rgba(255,255,255,0.8)'}]}>
          <Text style={[LoadingStyles.text, theme ? {color:'white'} : {color:'black'}]}>{tip}</Text>
        </View>
        <View style={[LoadingStyles.border, theme ? {borderColor: 'rgba(50,50,50,0.8)'} : {borderColor:'rgba(255,255,255,0.8)'} ]}>
          <View style={[LoadingStyles.box, theme ? {backgroundColor: 'rgba(26, 0, 255, 0.6)'} : {backgroundColor: 'rgba(255, 179, 0, 0.6)'}]} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;
