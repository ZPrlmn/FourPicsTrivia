import { StyleSheet } from "react-native";

const FourPicsStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover'
    },
    timerContainer:{
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: 'gray',
        borderRadius: 100,
        height: 35,
        width:35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer:{
        fontSize: 18,
        
    },
    levelContainer:{
        backgroundColor: 'gray',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2
    },
    level:{
        color: 'white',
        fontSize: 20
    },
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
    },
    imageContainer:{
        width: '90%',
    },
    imageRow:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    image:{
        width: 160,
        height: 160,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        margin: 1
    },
    outputContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        minHeight: 40,
        backgroundColor: 'rgba(70,70,70,0.8)',
        padding: 2,
        justifyContent: 'center',
        marginVertical: 2
    },
    outputBtn:{
        backgroundColor: 'rgba(169, 169, 169, 1)',
        height: 35,
        width: 35,
        marginHorizontal: 1,
        marginVertical: 1,
        borderRadius: 3
    },
    outputText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30
    },
    btnChoicesContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    btnChoices:{
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: 55,
        height: 55,
        margin: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgba(100,100,100,1)'
    },



    btnText:{
        color:'white',
        fontSize: 40
    },
    buttonContainer:{
        flexDirection: 'row',
        marginBottom: 3,
        justifyContent: 'space-between',
        minWidth: 220
    },
    button1:{
        backgroundColor: '#3760e3',
        padding: 5,
        borderWidth: 2,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 10,
        borderColor: 'blue'
    },
    btnImage:{
        height: 20,
        width: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
    },
    btnCheck:{
        backgroundColor: '#29af34',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'green',
        width: 170
    },
    btnFinish:{
        backgroundColor: '#b30600',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        width: 220
    },
    checkAnswer:{
        position: 'absolute',
        top: 50,
        padding: 10,
        width: "80%",
        borderRadius: 10,
        borderWidth: 5,
        opacity: 0.8
    },
    correctAnswer:{
        backgroundColor: '#29af34',
        borderColor: 'green'
    },
    wrongAnswer:{
        backgroundColor: '#b30600',
        borderColor: 'red',
    },
    resultText:{
        fontSize: 20,
        fontWeight: '900',
        color: 'white'
    },
    modalContainer:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalBody:{
        borderRadius: 8,
        borderWidth: 5,
        borderColor: 'yellow',
        backgroundColor: 'red',
        padding: 1
    },
    bgModal:{
        padding: 10,
    },
    modalText:{
        fontSize: 35
    },
    modalButtonContainer:{
    },
    buttonModal:{
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'green',
        width: 200,
        marginBottom: 2
    },
    buttonModalHome:{
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'red',
        width: 200
    },
    buttonGradientModal:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '100%',
        borderRadius: 6.5,
    },
    buttonModalText:{
        color:'white',
        fontSize: 23,
        fontWeight: '900'
    },
    settingsBtn:{
        position: 'absolute',
        top: 25,
        right: 10
    },
    settingsImg:{
        height: 40,
        width: 40
    },
    settingsModal:{
    },
    btnClose:{
        position: 'absolute',
        top: 10,
        right: 10
    },
    btnCloseImg:{
        width: 30,
        height: 30
    },
})

export default FourPicsStyles