import * as React from 'react';
import { StyleSheet, View, Text, Modal, Alert, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';


//Propriedades do FlatList (data é uma delas)
export interface CardiNotifyProps {
  notify:any;
  
}


export function CardiNotify (props: CardiNotifyProps) {
  const nav = useNavigation();
  const auth = getAuth()
  const usuarioID = auth.currentUser.uid;
  const database = getDatabase();


  const { notify } = props;
  var idNotify = notify[0]
  var textoNotify = notify[1]
  var lido = notify[2]
  var titulo = notify[3]

  const notRead = async () => {  
    Alert.alert('Notificação', textoNotify.toString(), [
      {text: 'Entendi', onPress: () => {
        console.log('Setando como lido')
        set(ref(database, `notificacoes/${usuarioID}/${idNotify}/2`), true)
      }}
    ])
  }   
  const read = async () => {  
    Alert.alert('Notificação', textoNotify.toString(), [
      {text: 'Entendi', onPress: () => {
        console.log('Só exibe')
      }}
    ])
  }    

    
  return (

        <Card containerStyle={styles.card} >
            <View style={styles.cardhead}>
              <Text>{titulo}</Text>
              {lido == false &&(
                <TouchableOpacity onPress={notRead}>
                <Ionicons name="mail-outline" size={24} color="black" />
                </TouchableOpacity>

                )}
              {notify[2] == true &&(
                <TouchableOpacity onPress={read}>
                <Ionicons name="mail-open-outline" size={24} color="black" />
                </TouchableOpacity>
              )}
           
            </View>
        </Card>

  );
};

const styles = StyleSheet.create({  

  card:{
    flex:0,
    justifyContent:'center',
    width:'95%',
    borderRadius:15,
    backgroundColor: '#00B4D8',
  },

  cardhead:{
    flex:0,
    height:30,
    width:'95%',
    marginRight:10,
    marginLeft:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

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
    color: 'black',

  },

  text1:{

    fontSize: 10,
    color: 'black',
  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },
});

