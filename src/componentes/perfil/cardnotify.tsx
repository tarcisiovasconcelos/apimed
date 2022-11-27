import * as React from 'react';
import { StyleSheet, View, Text, Modal, Alert, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref, set } from 'firebase/database';


//Propriedades do FlatList (data é uma delas)
export interface CardiNotifyProps {
  notify:any;
  handleUpdate():any;
  
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
    set(ref(database, `notificacoes/${usuarioID}/${idNotify}/2`), true)
    Alert.alert('Notificação', textoNotify.toString(), [
      {text: 'Entendi', onPress: () => {
        console.log('Setando como lido')
        props.handleUpdate();

      }}
    ])
  }   
  const read = async () => {  
    Alert.alert('Notificação', textoNotify.toString(), [
      {text: 'Entendi', onPress: () => {
        console.log('Só exibe mas agora ta setando como nao lido')
        props.handleUpdate();

      }}
    ])
  } 

    
  return (

        <Card containerStyle={styles.card} >
            <View style={styles.cardhead}>
              <Text style={{color:'white'}}>{titulo}</Text>
              {lido == false &&(
                <TouchableOpacity onPress={notRead}>
                <Ionicons name="mail-outline" size={24} color="white" />
                </TouchableOpacity>

                )}
              {lido == true &&(
                <TouchableOpacity onPress={read}>
                <Ionicons name="mail-open-outline" size={24} color="white" />
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
    borderRadius:10,
    borderColor:'transparent',
    backgroundColor: '#4663AE',
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

