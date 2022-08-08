import { child, getDatabase, onValue, ref } from 'firebase/database';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

import "firebase/compat/auth";
import "firebase/compat/firestore";

export interface BoasVindasProps {
}
//LOGIN
export function BoasVindas (props: BoasVindasProps) {
  const auth = getAuth()
  const usuarioID = auth.currentUser.uid;
  const database = getDatabase();
  let [nome, setNome] = useState();

  
  const refNome = child(child(ref(database, 'usuarios'), usuarioID), 'name');

  React.useEffect(() => {
  //Busca
  onValue(refNome, (snapshot) => {
  console.log(snapshot.val())
  setNome(snapshot.val());
  })
  },[])


  

    return (
        <View style={styles.head}>
            <Text style={styles.title1}>Olá {nome}, seja bem-vindo(a)!</Text>
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
  

