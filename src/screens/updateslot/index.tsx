import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, signOut } from "firebase/auth";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import SelectMedicamento from '../../componentes/slots/selectmedicamento';
import { child, getDatabase, ref, set } from 'firebase/database';
import teste from '../../componentes/slots/selectmedicamento';



export interface updateSlotProps {
  route:any;
}
//LOGIN
export function UpdateSlot (props: updateSlotProps) {
    
  const nav = useNavigation();
  const auth = getAuth()
  const database = getDatabase();
  const usuarioID = auth.currentUser.uid;

  

//checando se ele esta on ou off
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //online
    console.log( user );
  } else {
    //offline
  }
  });

  
  const Save = async () => {   
    

  }

    return (
    
    <View style={styles.background}>
      <View style={styles.head1}>
      <Text style={{textAlign: 'center',fontSize: 20,fontWeight: 'bold',color: '#DEDBDB',width:'100%'}}>SLOT 01</Text>
      <TouchableOpacity style={{marginTop:3,marginLeft:10}}>
      <FontAwesome name="trash-o" size={24} color="white" />
      </TouchableOpacity>
      </View>
      <View style={styles.head}>
        <View style={styles.divisor}>
          <Text style={styles.title2}>Alarme:</Text>
          <Text style={styles.title2}>Data:</Text>          
        </View>
        <View style={styles.divisor1}>
        <Text style={styles.title2}>Selecione a Hora</Text>
        <Text style={styles.title2}>Selecione a Data</Text>
        </View>       	
      </View>
      <Text style={{textAlign: 'center',fontSize: 14,fontWeight: 'bold',color: '#DEDBDB'}}>Medicamentos</Text>
      <View style={styles.container}>
        <SelectMedicamento/>
             
      </View>


    </View>
      
        
    );
  }
  
  const styles = StyleSheet.create({

    background: {
      flex: 0,
      backgroundColor: '#0077B6',
      alignItems: 'center',
      width: '80%',
      marginLeft:'10%',
      height: '70%',
      marginTop: '30%',
      borderRadius: 15
      
    },

    divisor:{
      flex: 0,
      width: '30%',
      alignItems: 'flex-end'

    },

    divisor1:{
      flex: 0,
      width: '70%',
      alignItems: 'flex-start',
    },


    head:{
      alignItems:'flex-start',
      width: '70%',
      height: 80,
      marginTop:30,
      flexDirection: 'row',
    },

    head1:{
      alignItems:'flex-start',
      width: '70%',
      marginTop:10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    logo:{
      width:245,
      height:140,    
    },

    container:{
      flex:0,
      width: '80%',
      height: '50%',
      alignItems: 'center',
      backgroundColor: '#0077B6',
      borderRadius: 15,
      borderWidth: 0.8,
      borderColor: 'white'
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
      marginTop: 30
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
      marginBottom:15,
      marginLeft: 5,

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
  

