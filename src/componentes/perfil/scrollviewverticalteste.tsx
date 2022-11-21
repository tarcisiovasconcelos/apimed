import { getDatabase, onValue, ref } from 'firebase/database';
import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardiSlot } from './cardislot';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, signOut } from "firebase/auth";
import firebase from "firebase/compat/app"
import { CardiNotify } from './cardnotify';






export interface ScrollViewVerticalTesteProps {
 notify:any[]
}
//LOGIN
export function ScrollViewVerticalTeste (props: ScrollViewVerticalTesteProps) {

      //checando se ele esta on ou off
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const x = user.uid
      setUid(x)
      //online
    } else {
      //offline
    }
  });


  const database = getDatabase();
  const [uid, setUid] = React.useState('')


  const refNome = ref(database, `notificacoes/${uid}`);





  return (  
      <View style={{minHeight:260,width:'80%'}}>  
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{minHeight:250}}>
        {props.notify.map(not => 
            <>
              <CardiNotify notify={not} />
            </>
            )}
      </ScrollView>
      </View>        

     
  )}
  

