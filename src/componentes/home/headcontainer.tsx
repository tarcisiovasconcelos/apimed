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
        
        console.log(Object.values(snapshot.val()))
        setDispositivos(Object.values(snapshot.val()))
      })
      console.log('E');
    }

    const dispositivoNew = async () => {
      let UID = push(ref(database, `dispositivos/${usuarioID}`)).key; //Id unico
      let dadosDispositivo:IDispositivo = {
        idDispositivo: UID,
        nome: 'Dispositivo novo modelo',
        paciente:'Tio Lula',
        slots:[
          {idSlot:"01",status:"ocupado",nome:"Slot01", data: "15/12/2025", hora: "15:30", medicamentos:["Dipirona"]},
          {idSlot:"02",status:"ocupado",nome:"Slot02", data: "12/02/2027", hora: "16:45", medicamentos:["Dipirona","Paracetamol"]},
          {idSlot:"03",status:"livre",nome:"Slot03", data: "", hora: "", medicamentos:[]},
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
  

