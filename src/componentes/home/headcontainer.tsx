import * as React from 'react';
import { StyleSheet, View, Text, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { child, getDatabase, onValue, push, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';



//dispositivo
export interface IDispositivo {
  idDispositivo: string,
  nome: string,
  paciente: string,
  slots:[{id:'', status:'',nome:'',data:'',horario: '', medicamentos:[]}]
}
//Cabeçalho da home Meus dispositivos  + add dispositivo
export function HeadContainer () {   
  

    
    const dispositivoNew = async () => {
      const auth = getAuth()
      const usuarioID = auth.currentUser.uid;
      const database = getDatabase();
      let UID = push(ref(database, 'dispositivos')).key; //Id unico
      let dadosDispositivo:IDispositivo = {
        idDispositivo: UID,
        nome: 'Dispositivo 1',
        paciente:'Tio Zezo',
        slots:[
          {id:"01",status:"livre",nome:"Slot01", data: "15/12/2025", horario: "15:30", medicamentos:["Dipirona"]},
          {id:"02",status:"livre",nome:"Slot02", data: "12/02/2027", horario: "16:45", medicamentos:["Dipirona vencida","Paracetamol"]}
        ],
      };

      set(child(ref(database, 'dispositivos'), dadosDispositivo.idDispositivo), dadosDispositivo)
      ToastAndroid.show("CRIADO", 3000);

      

    }


    return (
        <View style={styles.headcontainer}>
            <Text style={styles.title2}>Meus Dispositivos</Text>
            <TouchableOpacity onPress={(dispositivoNew)}>
            <AntDesign name="plus" size={24} color="#DEDBDB" />
            </TouchableOpacity>     
        </View>        
    );
  }
  
  const styles = StyleSheet.create({

    headcontainer:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-between',
        width:300,
        marginLeft:15,
        height: 25,
        marginTop: 50,
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
  

