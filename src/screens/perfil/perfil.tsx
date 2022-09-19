import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, signOut } from "firebase/auth";


export interface PerfilProps {
}
//LOGIN
export function Perfil (props: PerfilProps) {
    
  const nav = useNavigation();
  const auth = getAuth();

  const Deslogar = async () => {    
    
    signOut(auth)
    .then(() => {
    console.log('Você Deslogou')
    })
    .catch((error) => {
    console.log('Erro!')
    });
  }


    return (
    <View style={styles.background}>
      <View style={styles.head}>
      <Text style={styles.title1}>Área em desenvolvimento</Text>	
      </View>

      <View style={styles.container}>
        
      <Text style={styles.title2}>Notificações!</Text>      
      <Button title="Sair" onPress={Deslogar} buttonStyle={styles.btn}></Button>
      </View>
      <View style={styles.rodape}>

      </View>

    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#0077B6',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },

    head:{
      alignItems:'center',
      width: 315,
      height: 140,
      marginTop:50,
    },
  
    logo:{
      width:245,
      height:140,    
    },

    container:{
      flex:0,
      width: 315,
      height: 255,
      marginTop: 0,
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    btn:{
      flexDirection:'column',
      borderRadius: 15,
      backgroundColor: '#00B4D8',
      width: 165,
      borderColor: '#DEDBDB',
      borderRightWidth: 5,
      borderLeftWidth: 5, 
    },

    rodape:{
      flex:0,
      width: 315,
      height: 50,
      alignItems: 'center',

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
  

