import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, onValue, ref } from 'firebase/database';
import { array } from 'yup';
import ListaNotify from '../../componentes/perfil/listanotificacoes';
import { FlatList } from 'react-native-gesture-handler';
import { ScrollViewVerticalTeste } from '../../componentes/perfil/scrollviewverticalteste';


export interface PerfilProps {
  notify:any
}
//LOGIN
export function Perfil(props: PerfilProps) {

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
  const nav = useNavigation();
  const auth = getAuth();
  const [uid, setUid] = React.useState('')
  const [leitura, setLeitura] = React.useState('notRead');
  const refNome = ref(database, `notificacoes/${uid}`);
  const [ notifyLido, setNotifyLido ] = React.useState<any[]>([])
  const [ notifyNaoLido, setNotifyNaoLido ] = React.useState<any[]>([])
  const [ notify, setNotificacoes ] = React.useState<any[]>([])
  const [att,setATT] = React.useState('notRead');




  const getNotificacoes = async () => {  
    //Busca por dados de dispositivos/firebase
    onValue(refNome, (snapshot) => {
      if (snapshot.exists()) {
        setNotificacoes(Object.values(snapshot.val()))
      }
      let tempArrayLido:any = []
      let tempArrayNaoLido:any = []
      snapshot.forEach(doc => {
        
        if (doc.val()[2] == true) {
          tempArrayLido.push(doc.val())
        }
        if (doc.val()[2] == false) {
          tempArrayNaoLido.push(doc.val())
        }
      })
      setNotifyLido(Object(tempArrayLido))
      setNotifyNaoLido(Object(tempArrayNaoLido))
     
    })


  }

  React.useEffect(() => {
    getNotificacoes();
  }, [leitura])


  const Deslogar = async () => {
    firebase.auth().signOut()
      .then(function () {
        console.log('Logout');
      }, function (error) {
        console.error(error);
      });
  }

  const read = async () => {
    setLeitura('read')
    console.log("aqui vai mudar para lido")
  }

  const notRead = async () => {
    setLeitura('notRead')
    console.log("aqui vai mudar para não lido")

  }

  return (
    <View style={styles.background}>

      <View style={styles.head}>
        
        <Button title="Lido" onPress={read} buttonStyle={styles.btnREAD}></Button>
        <Button title="Não Lido" onPress={notRead} buttonStyle={styles.btnREAD}></Button>
      </View>


      <View style={styles.container}>
        {leitura == 'read' && (
                  <ScrollViewVerticalTeste notify={notifyLido}/>          
        )}
        {leitura == 'notRead' && (
                  <ScrollViewVerticalTeste notify={notifyNaoLido}/>          
        )}







      </View>
      <View style={styles.rodape}>
        <Button title="Sair" onPress={Deslogar} buttonStyle={styles.btn}></Button>
      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    flex: 1,
    backgroundColor: '#0077B6',
    alignItems: 'center',

  },

  head: {
    flex: 0,
    width: 315,
    height: '10%',
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  list:{
    width:300

  },

  container: {
    flex: 0,
    width: '90%',
    height: '70%',
  },

  btn: {
    flexDirection: 'column',
    borderRadius: 15,
    backgroundColor: '#00B4D8',
    width: 165,
    borderColor: '#DEDBDB',
    borderRightWidth: 5,
    borderLeftWidth: 5,
  },

  btnREAD: {
    flexDirection: 'column',
    backgroundColor: '#00B4D8',
    width: 100,
  },

  rodape: {
    flex: 0,
    width: 315,
    height: '10%',
    alignItems: 'center',

  },

  //CSS DE TEXTO
  title1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DEDBDB',

  },

  title2: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#DEDBDB',

  },

  text1: {
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',
  },

  text2: {
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },
});


