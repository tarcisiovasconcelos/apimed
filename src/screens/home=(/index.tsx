import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BoasVindas } from '../../componentes/home/boasvindas';
import { HeadContainer } from '../../componentes/home/headcontainer';

export interface HomeProps {
}
//LOGIN
export function Home (props: HomeProps) {


  return (
  <View style={styles.background}>
    <BoasVindas/>
    <HeadContainer/>        
          

  </View>       
  );}
  
  const styles = StyleSheet.create({
    background: {
      flex: 0,
      backgroundColor: '#3556AA',
    },
    //#3556AA

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
  

