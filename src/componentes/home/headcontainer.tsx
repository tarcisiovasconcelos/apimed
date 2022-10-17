import * as React from 'react';
import { StyleSheet, View, Text, ToastAndroid, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { child, getDatabase, onValue, push, ref, set } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { ScrollViewHorizontal } from './scrollviewhorizontal';



//dispositivo
export interface IDispositivo {
  idDispositivo: string,
  nome: string,
  paciente: string,
  slots:[{idSlot: string, status: string,nome: string,data: string,hora: string , medicamentos:string[]}]
}
//Cabeçalho da home Meus dispositivos  + add dispositivo
export function HeadContainer () {   
  

    const [ dispositivos, setDispositivos ] = useState<any[]>([])
    const auth = getAuth()
      const usuarioID = auth.currentUser.uid;
      const database = getDatabase();

    const getDispositivos = async () => {  
      const refDispositivos = ref(database,  `dispositivos/${usuarioID}`);
      //Busca por dados de dispositivos/firebase
      onValue(refDispositivos, (snapshot) => {
        if (snapshot.exists()) {
          console.log(Object.values(snapshot.val()))
          setDispositivos(Object.values(snapshot.val()))
        }
      })
      console.log('E');
    }

    const dispositivoNew = async () => {
      let UID = push(ref(database, `dispositivos/${usuarioID}`)).key; //Id unico
      let dadosDispositivo:IDispositivo = {
        idDispositivo: UID,
        nome: 'Dispositivo Modelo',
        paciente:'Paciente Modelo',
        slots:[
          {idSlot:"01",status:"ocupado",nome:"Slot01", data: "15/12/2025", hora: "15:30", medicamentos:["Dipirona"]},
          {idSlot:"02",status:"ocupado",nome:"Slot02", data: "12/02/2027", hora: "16:45", medicamentos:["Dipirona","Paracetamol"]},
          {idSlot:"03",status:"livre",nome:"Slot03", data: "", hora: "", medicamentos:[]},
          {idSlot:"04",status:"livre",nome:"Slot04", data: "", hora: "", medicamentos:[]},
          {idSlot:"05",status:"livre",nome:"Slot05", data: "", hora: "", medicamentos:[]},
          {idSlot:"06",status:"livre",nome:"Slot06", data: "", hora: "", medicamentos:[]},
          {idSlot:"07",status:"livre",nome:"Slot07", data: "", hora: "", medicamentos:[]},
          {idSlot:"08",status:"livre",nome:"Slot08", data: "", hora: "", medicamentos:[]},
          {idSlot:"09",status:"livre",nome:"Slot09", data: "", hora: "", medicamentos:[]},
          {idSlot:"10",status:"livre",nome:"Slot10", data: "", hora: "", medicamentos:[]},
          {idSlot:"11",status:"livre",nome:"Slot11", data: "", hora: "", medicamentos:[]},
          {idSlot:"12",status:"livre",nome:"Slot12", data: "", hora: "", medicamentos:[]},
          {idSlot:"13",status:"livre",nome:"Slot13", data: "", hora: "", medicamentos:[]},
          {idSlot:"14",status:"livre",nome:"Slot14", data: "", hora: "", medicamentos:[]},
          {idSlot:"15",status:"livre",nome:"Slot15", data: "", hora: "", medicamentos:[]},
          {idSlot:"16",status:"livre",nome:"Slot16", data: "", hora: "", medicamentos:[]},
          {idSlot:"17",status:"livre",nome:"Slot17", data: "", hora: "", medicamentos:[]},
          {idSlot:"18",status:"livre",nome:"Slot18", data: "", hora: "", medicamentos:[]},
          {idSlot:"19",status:"livre",nome:"Slot19", data: "", hora: "", medicamentos:[]},
          {idSlot:"20",status:"livre",nome:"Slot20", data: "", hora: "", medicamentos:[]},
          {idSlot:"21",status:"livre",nome:"Slot21", data: "", hora: "", medicamentos:[]},
          {idSlot:"22",status:"livre",nome:"Slot22", data: "", hora: "", medicamentos:[]},
          {idSlot:"23",status:"livre",nome:"Slot23", data: "", hora: "", medicamentos:[]},
          {idSlot:"24",status:"livre",nome:"Slot24", data: "", hora: "", medicamentos:[]},
          {idSlot:"25",status:"livre",nome:"Slot25", data: "", hora: "", medicamentos:[]},
          {idSlot:"26",status:"livre",nome:"Slot26", data: "", hora: "", medicamentos:[]},
          {idSlot:"27",status:"livre",nome:"Slot27", data: "", hora: "", medicamentos:[]},
          {idSlot:"28",status:"livre",nome:"Slot28", data: "", hora: "", medicamentos:[]},
          {idSlot:"29",status:"livre",nome:"Slot29", data: "", hora: "", medicamentos:[]},
          {idSlot:"30",status:"livre",nome:"Slot30", data: "", hora: "", medicamentos:[]},

        ],
      };

      Alert.alert('Adicionar', 'Deseja realmente adicionar um dispositivo', [
        {text:'Cancelar'},
        {text: 'Confirmar', onPress: () => {
          set(child(ref(database, `dispositivos/${usuarioID}`), dadosDispositivo.idDispositivo), dadosDispositivo)
          .then(() => {
            Alert.alert('Dispositivo adicionado!');
          })
          .catch(() => {
            alert("erro");
          })
        }}
      ])
    }    

    React.useEffect(() => {
      getDispositivos();
    }, [])


    return (
        <View>
          <View style={styles.headcontainer}>
              <Text style={styles.title2}>Meus Dispositivos</Text>
              <TouchableOpacity onPress={(dispositivoNew)}>
              <AntDesign name="plus" size={24} color="#DEDBDB" />
              </TouchableOpacity>     
          </View>    
          <ScrollViewHorizontal dispositivos={dispositivos}/>     
        </View>
    );
  }
  
  const styles = StyleSheet.create({

    headcontainer:{
        flex:0,
        flexDirection:'row',
        justifyContent:'space-between',
        width: '90%',
        marginLeft:15,
        margin:15,
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
  

