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
import { CardNotify } from '../../componentes/perfil/cardnotify';
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
  const [leitura, setLeitura] = React.useState('read');
  const refNome = ref(database, `notificacoes/${uid}`);
  const [ notify, setNotificacoes ] = React.useState<any[]>([])


  const getNotificacoes = async () => {  
    //Busca por dados de dispositivos/firebase
    onValue(refNome, (snapshot) => {
      if (snapshot.exists()) {
        setNotificacoes(Object.values(snapshot.val()))
      }
      
      
    })


  }

  React.useEffect(() => {

    getNotificacoes();

    // onValue(refNome, (snapshot) => {
    //   let tempArrayLido:any = []
    //   let tempArrayNaoLido:any = []
    //   snapshot.forEach(doc => {
        
    //     if (doc.val()[1] == true) {
    //       tempArrayLido.push(doc.val()[0])
    //     }
    //     if (doc.val()[1] == false) {
    //       tempArrayNaoLido.push(doc.val()[0])
    //     }
    //   })
    //   setListLido(tempArrayLido)
    //   setListNaoLido(tempArrayNaoLido)
      
      
    // })
  }, [])


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
                  <ScrollViewVerticalTeste notify={notify}/>          
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
    maxHeight: '100%',
    flex: 1,
    backgroundColor: '#0077B6',
    alignItems: 'center',

  },

  head: {
    flex: 0,
    width: 315,
    maxHeight: '30%',
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  list:{
    width:300

  },

  container: {
    flex: 0,
    width: 315,
    minHeight: '60%',
    marginTop: 0,
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
    maxHeight: '10%',
    alignItems: 'center',
    backgroundColor: 'red'

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


