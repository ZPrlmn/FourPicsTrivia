import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import LoadingScreen from '../LoadingScreen';
import Styles from '../Styles/Styles';

const AnswerScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    const route = useRoute();
    const { data, userAnswers, totalScore, correctAnswer } = route.params;
    const navigation = useNavigation();

    const btnRestart = () => {
        navigation.dispatch(StackActions.replace('Trivia'));
    };

    const handleNavigateHome = () => {
        navigation.navigate('Home');
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
                <View style={styles.container}>
                        <Text style={styles.heading}>Trivia Answers</Text>
                        <ScrollView style={styles.scroll}>
                            {data.map((question, index) => (
                                <View key={question.questionId} style={[styles.card, userAnswers[index] === question.questionAnswer.toLowerCase() ? styles.correctCard : styles.wrongCard]}>
                                    {userAnswers[index] === question.questionAnswer.toLowerCase() ? (
                                        <View>
                                            <Text style={styles.correctText}>{question.question}</Text>
                                            <Text style={styles.correctText}>{userAnswers[index]}</Text>
                                        </View>
                                    ) : (
                                        <View>
                                            <Text style={styles.wrongText}>{question.question}</Text>
                                            <Text style={styles.wrongText}>{userAnswers[index]}</Text>
                                            <Text>{correctAnswer}</Text>
                                        </View>
                                    )}
                                </View>
                            ))}
                        </ScrollView>
                        <Text style={styles.totalScore}>Total Score: {totalScore}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.btnContainer} onPress={btnRestart}>
                                <Text style={styles.btnText}>Restart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnContainer} onPress={handleNavigateHome}>
                                <Text style={styles.btnText}>Home</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        width: '100%',
    },
    heading: {
        fontSize: 29,
        fontWeight: '900',
        marginBottom: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        width: '100%',
    },
    correctCard: {
        backgroundColor: 'rgba(200, 230, 201, 0.8)',
    },
    wrongCard: {
        backgroundColor: 'rgba(255, 8, 0, 0.8)',
    },
    questionText: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    correctText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'green',
    },
    wrongText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },
    totalScore: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bg: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    scroll: {
        width: '95%',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: 'rgba(255,255,255, 0.8)',
    },
    btnContainer: {
        backgroundColor: '#29af34',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green',
        width: 150,
        marginBottom: 10,
        marginHorizontal: 3,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
    },
});

export default AnswerScreen;
