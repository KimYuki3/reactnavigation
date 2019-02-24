import React from 'react';
import {StyleSheet, View, Text, TextInput, Button,TouchableHighlight} from 'react-native';
import firebase from 'firebase';

import AddButton from '../elements/AddButton.js'

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    const config = {
      apiKey: 'AIzaSyD0nHAfCEpAmjEtBg04dq1sQRYjOpeYskA',
      authDomain: 'memoapp-4a1b8.firebaseapp.com',
      databaseURL: 'https://memoapp-4a1b8.firebaseio.com',
      projectId: 'memoapp-4a1b8',
      storageBucket: 'memoapp-4a1b8.appspot.com',
      messagingSenderId: '156783376160',
    };
      firebase.initializeApp(config);
      console.log('email: '+this.state.email +' PassWord: '+this.state.password);
  }


  render() {
    return (
      <View style={styles.Container}>
      <Text　style={styles.TEXTLOGIN}>ログイン</Text>
        <TextInput
          style={styles.Input}
          value ={this.state.email}
          onChangeText = {(text)=>{this.setState({email: text})}}
          autoCapitalize ="none"
          autoCorrect = {false}
          placeholder = "EmailAddress"
          placeholderTextColor = "yellow"
          />
        <TextInput
          style={styles.Input}
          value ={this.state.password}
          onChangeText = {(text)=>{this.setState({password: text})}}
          autoCapitalize ='none'
          placeholder = "PassWord"
          placeholderTextColor = "pink"
          secureTextEntry
          />
      <TouchableHighlight style={styles.ButtonStyle}
        onPress={this.handleSubmit.bind(this)}
        >
        <Text style={styles.TextStyle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  Container:{
    flex:1,
    width:'100%',
    fontSize: 28,
    padding:24,
    backgroundColor:'#fff',
  },
  Input:{

    fontSize:24,
    height:48,
    backgroundColor:'#DDD',
    padding:10,
    marginBottom:16,

    marginTop:16,
    borderWidth:1,
    borderColor:'#fff',
  },
  ButtonStyle:{
    width:200,
    backgroundColor:'#D31676',
    alignSelf:"center",
    borderRadius:16,
    justifyContent:"center",
    height:40,
  },
  TextStyle:{
    fontSize:24,
    alignSelf:"center",
    color:"#FFF",

  },
TEXTLOGIN:{
    fontSize:30,
    alignSelf:"center",
    marginBottom:36,
    marginTop:36,
},

    });


export default LoginScreen;
