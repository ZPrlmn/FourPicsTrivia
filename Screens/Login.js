import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Styles from '../Styles/Styles'

function Login({ navigation }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [invalid, setInvalid] = useState(false)

  const Accounts = [
    { id: 1, userName: '', password: '' }
  ]

  function loginFunction() {
    const findUser = Accounts.find(item => item.userName === userName && item.password === password);
    if (findUser) {
      navigation.navigate('Home');
      setInvalid(false)
    } else {
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
          <TextInput style={Styles.textInput} value={userName} onChangeText={setUserName} placeholder='Name' />
          <Text style={{fontSize: 18}}>Password</Text>
          <TextInput style={Styles.textInput} value={password} onChangeText={setPassword} secureTextEntry={true} placeholder='Password' />
          {invalid ? <Text style={{color:'red'}}>Invalid Input</Text> : null}
          <TouchableOpacity style={{backgroundColor:'#2196F3', padding: 10, borderRadius: 10}} onPress={loginFunction}>
            <Text style={{color: 'white', fontSize: 18}}>Login</Text>
          </TouchableOpacity>  
        </View>
      </View>
    </View>
  )
}

export default Login
