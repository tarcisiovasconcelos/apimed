import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface InfoDispProps {
}

export function InfoDisp (props: InfoDispProps) {


    return (
          <View style={styles.infodisp}>
          <Text style={styles.title2}>
            Nome do dispositivo
          </Text>
          <Text style={styles.text1}>
            Robô do vô beto
          </Text>
          <Text style={styles.title2}>
            Nome do paciente 
          </Text>
          <Text style={styles.text1}>
            Vô beto
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