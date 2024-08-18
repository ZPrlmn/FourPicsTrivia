import { StyleSheet } from "react-native";
const AnswerStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 10,
      width: '100%',
    },
    correctCard: {
      backgroundColor: '#c8e6c9',
    },
    wrongCard: {
      backgroundColor: '#ffcdd2',
    },
    questionText: {
      fontSize: 16,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    answerText: {
      fontSize: 16,
      marginBottom: 5,
    },
    totalScore: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
  });

  export default AnswerStyles;