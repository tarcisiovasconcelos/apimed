import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
export interface BoasVindasProps {
}
//LOGIN
export function BoasVindas (props: BoasVindasProps) {


    return (
        <View style={styles.head}>
            <Text style={styles.title1}>Olá {<Text style={styles.title2}>Tarcisio 
            Vasconcelos</Text>}, seja bem-vindo(a)!</Text>
        </View>        
    );
  }
  
  const styles = StyleSheet.create({
    head:{
      flex:0,
      alignItems:'center',
      width: 390,
      marginLeft:10,
      height: 50,
      marginTop:80,
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
  

