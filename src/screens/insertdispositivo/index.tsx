import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BoasVindas } from '../../componentes/home/boasvindas';
import { FlatSlot } from '../../componentes/slots/flatlistslot';


export interface InsertDispositivoProps {
}
//LOGIN
export function InsertDispositivo (props: InsertDispositivoProps) {


  return (
  <View style={styles.background}>
    <FlatSlot/>    
  </View>       
  );}
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
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
  

