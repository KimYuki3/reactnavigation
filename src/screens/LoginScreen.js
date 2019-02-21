import React from 'react';
import {StyleSheet, View, Text, TextInput, Button,TouchableHighlight} from 'react-native';

import AddButton from '../elements/AddButton.js'

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
      <Text　style={styles.TEXTLOGIN}>ログイン</Text>
        <TextInput style={styles.Input} value ='Email Address' />
        <TextInput style={styles.Input} value ='PassWord' />
      <TouchableHighlight style={styles.ButtonStyle}
        onPress={ () => {} }
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
