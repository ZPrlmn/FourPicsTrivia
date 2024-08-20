import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import questionsData from '../Data/questionsData';
import styles from '../Styles/TriviaStyles';
import { Audio } from 'expo-av';

const Trivia = () => {
    const navigation = useNavigation();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
    const [isWrongAnswer, setIsWrongAnswer] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(''));
    const [totalScore, setTotalScore] = useState(0);
    const [sound, setSound] = useState();

    async function playSound(){
        const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/buttonClick.mp3'))
        setSound(sound);
        await sound.playAsync();
      }
    
      useEffect(() => {
        return sound ? () => {
          sound.unloadAsync();
        } : undefined
      }, [sound]);

    const btnHome = () => {
        playSound()
        navigation.navigate("Home");
    };

    const handleNextQuestion = () => {
        playSound()
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswer('');
        setIsCorrectAnswer(false);
        setCorrectAnswer('');
        setIsWrongAnswer(false);
    };

    const handlePrevQuestion = () => {
        playSound()
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setUserAnswer('');
        setIsCorrectAnswer(false);
        setCorrectAnswer('');
        setIsWrongAnswer(false);
    };

    const checkAnswer = () => {
        playSound()
        const correctAnswerText = questionsData[currentQuestionIndex].questionAnswer;
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
        playSound()
        const data = questionsData;
        navigation.navigate('AnswerScreen', {
            data,
            userAnswers,
            totalScore,
            correctAnswer
        });
    };

    return (
            <View style={styles.container}>
                <View style={styles.btnHome}>
                    <Button title='Home' onPress={btnHome} />
                </View>
                {currentQuestionIndex < questionsData.length ? (
                    <View style={styles.card}>
                        <Text style={styles.questionText}>{questionsData[currentQuestionIndex].question}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setUserAnswer(text)}
                            value={userAnswer}
                            placeholder="Type your answer here..."
                            placeholderTextColor="#999"
                        />

                        <View style={styles.buttonContainer}>
                            {currentQuestionIndex !== 0 && (
                                <TouchableOpacity style={styles.button1} onPress={handlePrevQuestion}>
                                    <Text style={styles.buttonText}>Previous Question</Text>
                                </TouchableOpacity>
                            )}
                            {currentQuestionIndex < questionsData.length - 1 && (
                                <TouchableOpacity style={styles.button1} onPress={handleNextQuestion}>
                                    <Text style={styles.buttonText}>Next Question</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                        <TouchableOpacity style={[styles.button, !userAnswer && styles.disabledButton]} onPress={checkAnswer} disabled={!userAnswer}>
                            <Text style={styles.buttonText}>Check Answer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handlePracticeCompleted}>
                            <Text style={styles.buttonText}>Finish Practice</Text>
                        </TouchableOpacity>
                        {isCorrectAnswer ? (
                            <Text style={[styles.resultText, { color: 'green' }]}>Correct Answer!</Text>
                        ) : isWrongAnswer ? (
                            <Text style={[styles.resultText, { color: 'red' }]}>
                                Incorrect Answer! The correct answer is: {questionsData[currentQuestionIndex].questionAnswer}
                            </Text>
                        ) : null}
                    </View>
                ) : null}
            </View>
    );
};

export default Trivia;
