import { StyleSheet } from "react-native";

const FourPicsAnswerStyles = StyleSheet.create({
    headerContainer:{
        backgroundColor: 'white',
        opacity: 0.7,
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10
    },
    headerText:{
        fontSize: 40,
        fontWeight: '900'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
      },
      scoreContainer:{
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 10,
        top: 20,
      },
      scoreText:{
        color: 'white',
        fontSize: 20
      },
      imgContainer:{
        flexDirection: 'row',
      },
      img:{
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginHorizontal: 1
      },
      correctCard: {
        backgroundColor: '#c8e6c9',
      },
      wrongCard: {
        backgroundColor: '#ffcdd2',
      },
    answer:{
        color: 'blue'
    },
    correctAnswer:{
        color: 'green'
    },
    wrongAnswer:{
        color:'red'
    },
    btnContainer:{
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
    btnText:{
        color: 'white',
        fontSize: 20
    }
})
export default FourPicsAnswerStyles