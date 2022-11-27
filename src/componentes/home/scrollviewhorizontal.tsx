import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Cardi } from '../../componentes/home/card';



export interface ScrollViewHorizontalProps {
  dispositivos: any[]
}
//LOGIN
export function ScrollViewHorizontal (props: ScrollViewHorizontalProps) {


  return (  
      <ScrollView style={{height:'100%'}}>  
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dispositivos.map(dispositivo => <Cardi key={dispositivo.idDispositivo} dispositivo={dispositivo} />)}
      </ScrollView>
      </ScrollView>        

     
  );}
  

