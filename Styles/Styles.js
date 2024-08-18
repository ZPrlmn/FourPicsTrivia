import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'beige',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      margin:20,
      padding:20,
      backgroundColor:'#2196F3',
      borderRadius: 10,
      width: 150,
      alignItems: 'center'
    },
    buttonText:{
      color: 'black',
      fontSize: 20
    },
    card:{
      backgroundColor: 'lightblue',
      borderRadius: 20,
      borderWidth:2,
      borderColor: '#007AFF',
      width: 230,
      
    },
    header:{
      borderBottomWidth: 2, 
      padding: 10, 
      borderColor: '#007AFF'},
    headerTitle:{
      textAlign: 'center', 
      fontSize: 30},
    cardBody:{
      alignItems: 'center',
      paddingVertical: 10
    },
    textInput:{ 
      borderWidth: 1, 
      borderColor: '#007AFF', 
      width: 200, 
      paddingHorizontal: 5,
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 2,
      marginBottom: 10
    }
});

export default Styles