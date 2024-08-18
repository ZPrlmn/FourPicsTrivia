import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, Button, ImageBackground, TouchableOpacity } from 'react-native'
import { StackActions, useNavigation, useRoute } from '@react-navigation/native'
import Styles from '../Styles/Styles'
import styles from '../Styles/FourPicsAnswerStyles'
import LoadingScreen from '../LoadingScreen'
import { Audio } from 'expo-av';

const FourPicsAnswerScreen = () => {
    const [totalQues, setTotalQues] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [sound, setSound] = useState()
  
  
    async function playSound(){
        const { sound } = await Audio.Sound.createAsync( require('../sounds/4picsAnswer.mp3'))
        setSound(sound);
        await sound.playAsync();
      }
  
      useEffect(() => {
        return sound ? () => {
          sound.unloadAsync();
        } : undefined
      }, [sound]);
  
    useEffect(() => {
        playSound();
    }, []);    

    
    const fetchData = () => {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
    
      useEffect(() => {
        fetchData()
      }, [])

    useEffect(() => {
        setTotalQues(picsData.length)
    }, []);

    const route = useRoute()
    const { picsData, userAnswers, totalScore } = route.params
    const navigation = useNavigation()

    const handleNavigateHome = () => {
        navigation.navigate('Home')
        setSound(null)
    }

    function btnRestart(){
        navigation.dispatch(StackActions.replace('FourPics'));
    }

    return (
        <View style={[Styles.container]}>
        {isLoading ? <LoadingScreen /> :
        <ImageBackground style={[Styles.container, {width: '100%'}]} source={require('../assets/bg4Pics.png')}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Finished</Text>
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.scoreText}>{totalScore} / {totalQues}</Text>
            </View>
            <ScrollView style={{width: '90%', paddingTop: 10}}>
                {picsData.map((item, index) => (
                    <View key={item.id} style={[styles.card, userAnswers[index] === item.answer ? styles.correctCard : styles.wrongCard]}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.img} source={item.img1} />
                            <Image style={styles.img} source={item.img2} />
                            <Image style={styles.img} source={item.img3} />
                            <Image style={styles.img} source={item.img4} />
                        </View>
                        <View>
                            <Text style={styles.answer}>Correct Answer is: {item.answer}</Text>
                            {userAnswers[index] === item.answer ? (
                                <Text style={styles.correctAnswer}>Your Answer is "{userAnswers[index]}"</Text>
                            ) : (
                                <Text style={styles.wrongAnswer}>Your Answer is: "{userAnswers[index]}"</Text>
                            )}
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.btnContainer} onPress={btnRestart}>
                    <Text style={styles.btnText}>Restart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={handleNavigateHome}>
                    <Text style={styles.btnText}>Home</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        }
        </View>
    )
}

export default FourPicsAnswerScreen
