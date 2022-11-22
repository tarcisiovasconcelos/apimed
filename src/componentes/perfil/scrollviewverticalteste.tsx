import { getDatabase, onValue, ref } from 'firebase/database';
import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import firebase from "firebase/compat/app"
import { CardiNotify } from './cardnotify';






export interface ScrollViewVerticalTesteProps {
 notify:any[]
}
//LOGIN
export function ScrollViewVerticalTeste (props: ScrollViewVerticalTesteProps) {
  
  return (  
      <View style={{height:'90%',width:'95%'}}>  
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{minHeight:250,width:'100%'}}>
        {props.notify.map(not => 
            <>
              <CardiNotify notify={not} />
            </>
            
            )}
      </ScrollView>
      </View>        

     
  )}
  

