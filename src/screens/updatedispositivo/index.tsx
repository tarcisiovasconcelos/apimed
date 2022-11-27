import * as React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { HeadContainerSlot } from '../../componentes/slots/headcontainerslot';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { ScrollViewVertical } from '../../componentes/slots/scrollviewvertical';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';



export interface UpdateDispositivoProps {
  route:any;
}
//LOGIN
export function UpdateDispositivo (props: UpdateDispositivoProps) {


  const { dispositivo } = props.route.params;
  const auth = getAuth()
  const usuarioID = auth.currentUser.uid;
  const database = getDatabase();
  const nav = useNavigation();


  const handleDelete = async () => {
    Alert.alert('Remover', 'Deseja realmente deletar o dispositivo', [
      {text:'Cancelar'},
      {text: 'Confirmar', onPress: () => {
        // console.log(dispositivo)
        console.log('ID: ',usuarioID, dispositivo.idDispositivo)
        remove(ref(database, "dispositivos/" + usuarioID + "/" + dispositivo.idDispositivo))
        .then(() => {
          Alert.alert('Dispositivo deletado!');
          nav.navigate('Tela-Home')
        })
        .catch(() => {
          alert("erro");
        })
      }}
    ])
  }

  const handleBack = async () => {
    nav.navigate('Tela-Home')
  }


  React.useEffect(() => {
    // getDispositivos();
  }, [])

  return (
  <View style={styles.background}>

      <View style={styles.icons}>
      <TouchableOpacity style={{marginTop:100}} onPress={handleBack}>
      <Ionicons name="arrow-back" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:100}} onPress={handleDelete}>
      <FontAwesome name="trash-o" size={24} color="white" />
      </TouchableOpacity>
      </View>  
      <HeadContainerSlot/>
      <ScrollViewVertical slots={dispositivo.slots} teste={dispositivo.idDispositivo}/>

  </View>       
  );}
  
  const styles = StyleSheet.create({
    background: {
      flex: 0,
      height:'100%',
      backgroundColor: '#3556AA',
      alignItems:'center'
    },
    icons:{
      flex:0,
      flexDirection:'row',
      width:'90%',
      justifyContent:'space-between'
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
  

