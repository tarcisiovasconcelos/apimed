import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { InfoDisp } from '../../componentes/slots/infodisp';
import { FlatSlot } from '../../componentes/slots/flatlistslot';
import { HeadContainerSlot } from '../../componentes/slots/headcontainerslot';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface UpdateDispositivoProps {
  dispositivo: any;
}
//LOGIN
export function UpdateDispositivo (props: UpdateDispositivoProps) {


  return (
  <View style={styles.background}>

    
    <InfoDisp/>
    <TouchableOpacity>
    <FontAwesome name="trash-o" size={24} color="white" />
    </TouchableOpacity>
    <HeadContainerSlot/>
    <FlatSlot/>
    

  </View>       
  );}
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
      alignItems:'center'
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
  

