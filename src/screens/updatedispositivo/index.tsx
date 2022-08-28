import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatSlot } from '../../componentes/slots/flatlistslot';
import { HeadContainerSlot } from '../../componentes/slots/headcontainerslot';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';


export interface UpdateDispositivoProps {
  dispositivo: any;
}
//LOGIN
export function UpdateDispositivo (props: UpdateDispositivoProps) {


  return (
  <View style={styles.background}>
    
    <HeadContainerSlot/>
    <FlatSlot/>
    <Text>A partir daqui se o slot tiver livre ao clicar em configurar você libera a porta de inserir medicamento, e se tiver ocupado ele vai ter uma opção de lixeira que serve para esvaziar o slot e consequentemente abrir a porta de despejar medicamento</Text>
    <TouchableOpacity style={{marginTop:25}}>
    <FontAwesome name="trash-o" size={24} color="white" />
    </TouchableOpacity>

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
  

