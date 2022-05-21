import * as React from 'react';
import { StyleSheet, View, Text , ImageBackground, ActivityIndicator, YellowBox, Platform, ToastAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { useState } from 'react';
import { InputRound } from './components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface StartProps {
}
//LOGIN
export function Start (props: StartProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState<null|string>(null);
        
    const start = async (dados:any) => {

      await new Promise((resolve) => setTimeout(() => resolve(''), 2000))
    }

    return (
    <View style={styles.background}>
      <View style={styles.head}>
      </View>

      <View style={styles.container}>        
        <Text style={styles.title2}>
          Seja bem vindo ao aplicativo Remédio na Hora,
          Acompanhar o tratamento e bem-estar de quem você mais ama é nosso ideal!  
        </Text>
      </View>
      <View style={styles.rodape}>
        <Button buttonStyle={styles.btn} title="Começar" onPress={() => nav.navigate('Tela-Login')}></Button>
      </View>

    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      
      
    },

    head:{
      backgroundColor: 'silver',
      width: 315,
      height: 140,
      marginTop:50

    },

    container:{
      width: 315,
      height: 255,
      marginTop: 50,
      alignItems: 'center',
      backgroundColor:'green'


    },

    btn:{
      flexDirection:'column',
      borderRadius: 15,
      backgroundColor: '#00B4D8',
      width: 165,
      borderColor: '#DEDBDB',
      borderRightWidth: 5,
      borderLeftWidth: 5,
      


    },

    rodape:{
      flex:1,
      width: 315,
      height: 50,
      alignItems: 'center',

    },

    //CSS DE TEXTO
    title1:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#DEDBDB',

    },

    title2:{
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 'bold',
      color: '#DEDBDB',

    },

    text1:{
      textAlign: 'center',
      fontSize: 10,
      color: '#DEDBDB',

    },

    text2:{
      textAlign: 'center',
      fontSize: 10,
      color: '#DEDBDB',

    },
  });
  

