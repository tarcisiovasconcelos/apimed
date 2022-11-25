import * as React from 'react';
import { StyleSheet, View, Text , Image } from 'react-native';
import { Button } from 'react-native-elements';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

export interface StartProps {
}
//LOGIN
export function Start (props: StartProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState<null|string>(null);
        
    const start = async (dados:any) => {
      nav.navigate('Tela-Login')
    }

    return (
    <View style={styles.background}>
      <View style={styles.head}>
	      <Image style={styles.logo} source={require('./../../assets/imgs/LOGO-Aprovada.png')}/>
      </View>

      <View style={styles.container}>        
        <Text style={styles.title2}>
          Seja bem vindo ao aplicativo Remédio na Hora,
          Acompanhar o tratamento e bem-estar de quem você mais ama é nosso ideal!  
        </Text>
      </View>
      <View style={styles.rodape}>
        <Button buttonStyle={styles.btn} titleStyle={{color:'#3556AA'}} title="Começar" onPress={start}></Button>
      </View>

    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#3556AA',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },

    head:{
      alignItems:'center',
      width: 315,
      height: 140,
      marginTop:50
    },
  
    logo:{
      width:245,
      height:140,    
    },

    container:{
      width: 315,
      height: 255,
      marginTop: 50,
      alignItems: 'center',
    },

    btn:{
      flexDirection:'column',
      borderRadius: 15,
      backgroundColor: '#9FBAFF',
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
  

