import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';




export interface TitleMedicamentosProps {
}
//LOGIN
export function TitleMedicamentos (props: TitleMedicamentosProps) {

    return (    
      <View style={styles.head}>
        <Text style={styles.title1}>Medicamentos</Text>	
      </View>
    );
  }
  
  const styles = StyleSheet.create({
   
    head:{
      alignItems:'center',
      width: 315,
      height: 45,
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
  

