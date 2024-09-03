import React, { useEffect, useState } from 'react'
import { Text, View, Button, TextInput, Alert, TouchableOpacity } from 'react-native'
import Styles from '../Styles/Styles'
import { Audio } from 'expo-av';

function Login({ navigation }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [sound, setSound] = useState()
  const [inavlid, setInvalid] = useState(false)


  async function playSound(){
    const { sound } = await Audio.Sound.createAsync( require('../sounds/buttonClick.mp3'))
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound ? () => {
      sound.unloadAsync();
    } : undefined
  }, [sound]);

  
  const Accounts = [
    { id: 1, userName: 'Admin', password: 'admin' }
  ]

  function loginFunction() {
    playSound();
    const findUser = Accounts.find(item => item.userName === userName && item.password === password);
    if (findUser) {
      navigation.navigate('Home');
      setInvalid(false)
    }
    else {
      setInvalid(true)
    }
  }
  

  return (
    <View style={Styles.container}>
      <View style={Styles.card}>
        <View style={Styles.header}>
          <Text style={Styles.headerTitle}>Login</Text>
        </View>
        <View style={Styles.cardBody}>
          <Text style={{fontSize: 18}}>Name</Text>
          <TextInput  style={Styles.textInput} value={userName} onChangeText={setUserName} placeholder='Name' />
          <Text style={{fontSize: 18}}>Password</Text>
          <TextInput style={Styles.textInput} value={password} onChangeText={setPassword} secureTextEntry={true} placeholder='Password' />
          {inavlid ? <Text style={{color:'red'}}>Invalid Input</Text>: null}
          <TouchableOpacity style={{backgroundColor:'#2196F3', padding: 10, borderRadius: 10}} onPress={loginFunction}>
            <Text style={{color: 'white', fontSize: 18}}>Login</Text>
          </TouchableOpacity>  
        </View>
      </View>
    </View>
  )
}

export default Login
