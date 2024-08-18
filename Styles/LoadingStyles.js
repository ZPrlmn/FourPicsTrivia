import { StyleSheet } from "react-native";

const LoadingStyles = StyleSheet.create({
    border: { 
      width: '80%', 
      height: 25, 
      borderWidth: 5, 
      borderRadius: 5,
      maxWidth: 300,
      position: 'absolute',
      bottom: 40 
    },
    box: {
      height: 15,
      width: '1%',
    },
    textContainer:{
        width: '80%',
        maxWidth: 300,
        padding: 12
    },
    text:{
      fontSize: 20
    }
  });
  export default LoadingStyles;
  