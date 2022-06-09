import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import dispositivos from '../../pequenoback/dispositivos';
import { useState } from 'react';

//dados do dispositivo que eu vou usar nessa tela pra printar as informaçoes do dispositivo, a questão é
//como que eu vou alimentar esse data.. antes eu tava alimentando através do flatlist.. mas agora tem que ser do firebase.
//essa mesma ideia vou usar nas outras telas, pensei isso baseado no que você fez no slot.
export interface IDispInfo {
  data: IDisp
}

//Propriedades do dispositivo
export interface IDisp {
  id: number,
  nome: string,
  paciente: string,


}

const InfoDisp = ({data}: IDispInfo) => {
    data = useState(dispositivos);

    return (
          <View style={styles.infodisp}>
          <Text style={styles.title2}>
            Nome do dispositivo
          </Text>
          <Text style={styles.text1}>
            {data.nome}
          </Text>
          <Text style={styles.title2}>
            Nome do paciente 
          </Text>
          <Text style={styles.text1}>
            {data.paciente}
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