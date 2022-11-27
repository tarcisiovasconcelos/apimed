import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native-elements';




export interface TitleMedicamentosProps {
}
//LOGIN
export function TitleMedicamentos (props: TitleMedicamentosProps) {

    return (    
      <View style={styles.head}>
      <Image style={styles.logo} source={require('./../../assets/imgs/LOGO-Aprovada.png')}/>
      <Text style={styles.title1}>Medicamentos</Text>
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
   
    head:{
      alignItems:'center',
      width: 315,
      height: 175,
      marginTop:50
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
      marginTop:10

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
  

