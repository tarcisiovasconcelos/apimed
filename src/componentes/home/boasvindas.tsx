import { child, getDatabase, onValue, ref } from 'firebase/database';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Image } from 'react-native-elements';

export interface BoasVindasProps {
}
//LOGIN
export function BoasVindas (props: BoasVindasProps) {
  const auth = getAuth();
  const [ usuarioID, setUsuarioID] = React.useState<any>(null);
  const database = getDatabase();
  let [nome, setNome] = useState();

  onAuthStateChanged(auth, function (user) {
    if (user) {
      const x = user.uid
      setUsuarioID(x)
      //online
    } else {
      //offline
    }
  });

  
  
  React.useEffect(() => {
    //Busca
    if (usuarioID) {
      const refNome = child(child(ref(database, 'usuarios'), usuarioID), 'name');
      onValue(refNome, (snapshot) => {
        console.log(snapshot.val())
        setNome(snapshot.val());
      })
    }
  },[usuarioID])


  

    return (

      <View style={styles.head}>
      <Image style={styles.logo} source={require('./../../assets/imgs/LOGO-Aprovada.png')}/>
      <View style={styles.head1}>
      <Text style={styles.title1}>Olá {nome}, seja bem-vindo(a)!</Text>
      </View>
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    head:{
      flex:0,
      alignItems:'center',
      width: '100%',
      height: '20%',
      marginTop:50,
    },
    head1:{
      flex:0,
      width:'100%',
      height:'40%',
      alignItems:'center',
    },

    logo:{
      width:245,
      height:140,
    },

    //CSS DE TEXTO
    title1:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#DEDBDB',
      marginTop:10,
      width:'60%',
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
  

