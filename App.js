/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeModules,StyleSheet
} from 'react-native';

export default class App extends React.Component {

  state = {
    password:""
  }

  componentDidMount(){
    console.log(NativeModules.KeyChainWrapper)
    NativeModules.KeyChainWrapper.getPassword(value=>{
      debugger
      console.log(value)
    })
  }
  
  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  savePasswordBtnClicked = () => {
    if (this.state.password == ""){
      alert("Please enter valid password")
      return
    }
    else {
        NativeModules.KeyChainWrapper.savePassword(this.state.password, value=>{
          debugger
          if (value){
            alert("Password saved successfully")
          }
          else{
            alert("Some error occured while saving password")
          }
        })
    }
  }

  render(){
  return(
    <View style={styles.container}>
      <TextInput style= {{width:300,height:40, fontWeight: "bold", fontSize:15,
      backgroundColor:"lightgrey",paddingLeft:20}} 
      placeholder="Enter password"
      onChangeText={this.handleChangePassword}
        value ={this.state.token}>
      </TextInput>
      <TouchableOpacity style={styles.touchableButton}
      onPress = {this.savePasswordBtnClicked}
      >
         <Text style={styles.button}>Save Password</Text>
        </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  button: {
    fontSize:15,
    fontWeight: "bold", 
    color:"grey",
    color:"white"

  },
  touchableButton:{
    height:25,
      backgroundColor:"green",
      marginTop:20,
      height:40,
      width:120,
      justifyContent:"center",
      alignItems:"center"}
});