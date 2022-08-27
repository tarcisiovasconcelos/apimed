import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

import "firebase/compat/auth";
import "firebase/compat/firestore";
import { child, getDatabase, onValue, ref } from 'firebase/database';

export interface InfoDispProps {
}

//dispositivo
export interface IDispositivo {
  idDispositivo: string,
  nome: string,
  paciente: string,
  slots:[{id:'', status:'',nome:'',data:'',horario: '', medicamentos:[]}]
}

export function InfoDisp (props: InfoDispProps) {
  const auth = getAuth()
  const usuarioID = auth.currentUser.uid;
  const database = getDatabase();
  const [ nomeDispositivo, setNomeDispositivo ] = useState<any[]>([])
  let [nomePaciente, setNomePaciente] = useState();

  const refNomeDispositivo = child(child(ref(database,  `dispositivos/${usuarioID}`), usuarioID), "nome");
  ////child(child(ref(database,  `dispositivos/${usuarioID}`), usuarioID),'nome');
  
  
  React.useEffect(() => {
    //Busca
    onValue(refNomeDispositivo, (snapshot) => {
    console.log((snapshot.val()))
    setNomeDispositivo((snapshot.val()))
    /////setNomeDispositivo(snapshot.val());
    })
    },[])



    return (
          <View style={styles.infodisp}>
          <Text style={styles.title2}>
            Nome do dispositivo
          </Text>
          <Text style={styles.text1}>
            {nomeDispositivo}
          </Text>
          <Text style={styles.title2}>
            Nome do paciente 
          </Text>
          <Text style={styles.text1}>
            vem depois
          </Text>
          </View>
        );
    }

const styles = StyleSheet.create({      
      infodisp:{
        flex:0,
        marginTop:15,
        marginRight:10,
        marginLeft:10,
        height: 100
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