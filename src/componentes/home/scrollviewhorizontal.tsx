import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Cardi } from '../../componentes/home/card';



export interface ScrollViewHorizontalProps {
}
//LOGIN
export function ScrollViewHorizontal (props: ScrollViewHorizontalProps) {


  return (  
      <View style={{height:450}}>  
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Cardi/>
        <Cardi/>
        <Cardi/>
        <Cardi/>
        <Cardi/>
      </ScrollView>
      </View>        

     
  );}
  

