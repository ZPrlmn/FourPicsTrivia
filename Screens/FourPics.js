import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Modal, StatusBar } from 'react-native';
import Styles from '../Styles/Styles';
import styles from '../Styles/FourPicsStyles';
import { StackActions, useNavigation } from '@react-navigation/native';
import picsData from '../Data/picsData';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';

const FourPics = () => {
  const navigation = useNavigation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState(Array(picsData.length).fill(''));
  const [totalScore, setTotalScore] = useState(0);
  const [choicesAns, setChoicesAns] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [count, setCount] = useState(20);
  const [modalSettings, setModalSettings] = useState(false);
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

  const letters = "abcdefghijklmnopqrstuvwxyz";

  function randomChar(str, count) {
    let randomChars = '';
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      randomChars += str.charAt(randomIndex);
    }
    return randomChars;
  }

  function btnSettings() {
    playSound();
    setModalSettings(true);
  }

  function btnRestart() {
    navigation.dispatch(StackActions.replace('FourPics'));
  }

  function btnHome() {
    playSound();
    navigation.navigate("Home");
    setModalSettings(false);
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    setModalVisible(false);

    setUserAnswer('');
    setIsCorrectAnswer(false);
    setCorrectAnswer('');
    setIsWrongAnswer(false);
  }

  function shuffleChoices(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const deleteOutput = (index, item) => {
    playSound();
    const updateChoices = [...choicesAns, item];
    setChoicesAns(updateChoices);
    const updatedAnswer = userAnswer.slice(0, index) + userAnswer.slice(index + 1);
    setUserAnswer(updatedAnswer);
  };

  function inputButton(item, index) {
    playSound();
    const mergeChoices = userAnswer + item;
    setUserAnswer(mergeChoices);

    const updateChoices = [...choicesAns];
    updateChoices.splice(index, 1);
    setChoicesAns(updateChoices);
  }

  const ActivateChoiceAns = () => {
    const answerLength = picsData[currentQuestionIndex].answer.length;
    const otherChoices = 12 - answerLength;
    const setChoicesAvailable = randomChar(letters, otherChoices);
    const joinChoices = picsData[currentQuestionIndex].answer + setChoicesAvailable;
    setChoicesAns(shuffleChoices(joinChoices.split("")));
  };

  useEffect(() => {
    ActivateChoiceAns();
  }, []);

  const timer = () => {
    setCount(20);
    const count = setTimeout(() => {
      setModalVisible(true);
    }, 18000); 
    setTimeoutId(count);

    const countDown = setInterval(() => {
      setCount(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(countDown);
        }
        return prevTimer - 1;
      });
    }, 1000);
    setIntervalId(countDown);
  };

  useEffect(() => {
    timer();
  }, []);

  const handleNextQuestion = () => {
    playSound();
    clearInterval(intervalId);
    setCount(20);
    clearTimeout(timeoutId);
    setModalVisible(false);
    timer();
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    const answerLength = picsData[currentQuestionIndex + 1].answer.length;
    const otherChoices = 12 - answerLength;
    const setChoicesAvailable = randomChar(letters, otherChoices);
    const joinChoices = picsData[currentQuestionIndex + 1].answer + setChoicesAvailable;
    setChoicesAns(shuffleChoices(joinChoices.split("")));

    setUserAnswer('');
    setIsCorrectAnswer(false);
    setCorrectAnswer('');
    setIsWrongAnswer(false);
  };

  const handlePrevQuestion = () => {
    playSound();
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    const answerLength = picsData[currentQuestionIndex - 1].answer.length;
    const otherChoices = 12 - answerLength;
    const setChoicesAvailable = randomChar(letters, otherChoices);
    const joinChoices = picsData[currentQuestionIndex - 1].answer + setChoicesAvailable;
    setChoicesAns(shuffleChoices(joinChoices.split("")));

    setUserAnswer('');
    setIsCorrectAnswer(false);
    setCorrectAnswer('');
    setIsWrongAnswer(false);
  };

  const checkAnswer = () => {
    playSound();
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    const correctAnswerText = picsData[currentQuestionIndex].answer;
    const userEnteredAnswer = userAnswer.trim().toLowerCase();

    if (userEnteredAnswer === correctAnswerText.toLowerCase()) {
        setIsCorrectAnswer(true);
        setTotalScore(totalScore + 1);
    } else {
        setIsCorrectAnswer(false);
        setIsWrongAnswer(true);
    }

    setUserAnswers(prevState => {
        const updatedAnswers = [...prevState];
        updatedAnswers[currentQuestionIndex] = userEnteredAnswer;
        return updatedAnswers;
    });
  };

  const handlePracticeCompleted = () => {
    playSound();
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    setModalVisible(false);

    navigation.navigate('4PicsAns', {
        picsData,
        userAnswers,
        totalScore,
        correctAnswer
    });
  };

  return (
    <View style={Styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ImageBackground style={styles.backgroundImage} source={require('../assets/bg4Pics.png')}>
        {currentQuestionIndex < picsData.length ? (
          <View style={styles.card}>
            <TouchableOpacity style={styles.settingsBtn} onPress={btnSettings}>
              <Image style={styles.settingsImg} source={require('../assets/settings.png')}/>
            </TouchableOpacity>
            <View style={styles.timerContainer}>
              <Text style={styles.timer}>{count}</Text>
            </View>
            <View style={styles.levelContainer}>
              <Text style={styles.level}>{picsData[currentQuestionIndex].id}</Text>
            </View>
            <View style={styles.imageContainer}>
              <View style={styles.imageRow}>
                <Image source={picsData[currentQuestionIndex].img1} style={styles.image}/>
                <Image source={picsData[currentQuestionIndex].img2} style={styles.image}/>
              </View>
              <View style={styles.imageRow}>
                <Image source={picsData[currentQuestionIndex].img3} style={styles.image}/>
                <Image source={picsData[currentQuestionIndex].img4} style={styles.image}/>
              </View>
              <View style={styles.outputContainer}>
                {userAnswer.split("").map((item, index) => (
                  <TouchableOpacity 
                    style={styles.outputBtn} 
                    key={index} 
                    onPress={() => deleteOutput(index, item)}
                  >
                    <Text style={styles.outputText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.btnChoicesContainer}>
                {choicesAns.map((item, index) => {
                  return(
                    <TouchableOpacity style={styles.btnChoices} key={index} onPress={() => inputButton(item, index)}>
                      <Text style={styles.btnText}>{item}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.btnCheck, !userAnswer && styles.disabledButton]} onPress={checkAnswer} disabled={!userAnswer}>
                <Text style={styles.buttonText}>Check Answer</Text>
              </TouchableOpacity>
              {currentQuestionIndex < picsData.length - 1 && (
                <TouchableOpacity style={styles.button1} onPress={handleNextQuestion}>
                  <Image style={styles.btnImage} source={require('../assets/next.png')}/>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity style={styles.btnFinish} onPress={handlePracticeCompleted}>
              <Text style={styles.buttonText}>Finish Practice</Text>
            </TouchableOpacity>

            {isCorrectAnswer ? (
              <View style={[styles.checkAnswer, styles.correctAnswer]}>
                <Text style={[styles.resultText]}>Correct Answer!</Text>
              </View>
            ) : isWrongAnswer ? (
              <View style={[styles.checkAnswer, styles.wrongAnswer]}>
                <Text style={[styles.resultText]}>
                    Incorrect Answer! The correct answer is: {picsData[currentQuestionIndex].answer}
                </Text>
              </View>
            ) : null}
          </View>
        ) : null}
      </ImageBackground>

      <Modal transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <ImageBackground style={styles.bgModal} borderRadius={10} source={require('../assets/fourPics/bgModal.jpg')}>
              <Text style={styles.modalText}>Time Runout!!!</Text>
              <View style={styles.modalButtonContainer}>
                {currentQuestionIndex === picsData.length - 1 && (
                  <TouchableOpacity style={styles.buttonModal} onPress={handlePracticeCompleted}>
                    <LinearGradient
                      colors={['#29af34', 'green']}
                      style={styles.buttonGradientModal}
                    >
                      <Text style={styles.buttonModalText}>Finish Practice</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
                {currentQuestionIndex < picsData.length - 1 && (
                  <TouchableOpacity style={styles.buttonModal} onPress={handleNextQuestion}>
                    <LinearGradient
                      colors={['#29af34', 'green']}
                      style={styles.buttonGradientModal}
                    >
                      <Text style={styles.buttonModalText}>Next</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={btnHome} style={styles.buttonModalHome}>
                  <LinearGradient
                    colors={['#b30600', 'red']}
                    style={styles.buttonGradientModal}
                  >
                    <Text style={styles.buttonModalText}>Home</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ImageBackground>  
          </View>
        </View>
      </Modal>

      <Modal transparent visible={modalSettings}>
        <View style={styles.modalContainer}>
          <View style={styles.settingsModal}>
            <ImageBackground style={[styles.bgModal, {paddingTop: 30}]} borderRadius={10} source={require('../assets/fourPics/bgSettings.jpg')}>
              <TouchableOpacity style={styles.btnClose} onPress={() => setModalSettings(false)}>
                <Image style={styles.btnCloseImg} source={require('../assets/close.png')}/>
              </TouchableOpacity>
              <View style={[styles.modalButtonContainer, {alignItems: 'center'}]}>
                <Text style={styles.modalText}>Settings</Text>
                <TouchableOpacity onPress={btnRestart} style={[styles.buttonModalHome, {marginTop: 5}]}>
                  <LinearGradient
                    colors={['#b30600', 'red']}
                    style={styles.buttonGradientModal}
                  >
                    <Text style={styles.buttonModalText}>Restart</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={btnHome} style={[styles.buttonModalHome, {marginTop: 5}]}>
                  <LinearGradient
                    colors={['#b30600', 'red']}
                    style={styles.buttonGradientModal}
                  >
                    <Text style={styles.buttonModalText}>Home</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ImageBackground>  
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default FourPics;
