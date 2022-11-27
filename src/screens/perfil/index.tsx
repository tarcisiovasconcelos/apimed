import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Image, Text } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, onValue, ref } from 'firebase/database';
import { ScrollViewVerticalTeste } from '../../componentes/perfil/scrollviewverticalteste';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
  const [atualizar, setAtualizar] = React.useState(true);
  const [ notifyLido, setNotifyLido ] = React.useState<any[]>([])
  const [ notifyNaoLido, setNotifyNaoLido ] = React.useState<any[]>([])
  const [ notify, setNotificacoes ] = React.useState<any[]>([])
  
  
  const getNotificacoes = async () => {  
    //Busca por dados de dispositivos/firebase
    if (uid) {
      const refNome = ref(database, `notificacoes/${uid}`);
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
  }

  const handleUpdate = async () => {
    setAtualizar(!atualizar)
  }

  React.useEffect(() => {
    getNotificacoes();
  }, [leitura, atualizar, uid])

''
  const Deslogar = async () => {
    firebase.auth().signOut()
      .then(function () {
        console.log('Logout');
      }, function (error) {
        console.error(error);
      });
  }
  const [isActiveLido, setIsActiveLido] = React.useState(true);
  const [isActiveNaoLido, setIsActiveNaoLido] = React.useState(false);

  const read = async () => {
    setLeitura('read')
    setIsActiveLido(true);
    setIsActiveNaoLido(false);
    console.log("aqui vai mudar para lido")
    
  }

  const notRead = async () => {
    setLeitura('notRead')
    setIsActiveNaoLido(true);
    setIsActiveLido(false);
    console.log("aqui vai mudar para não lido")
  }




  return (
    <View style={styles.background}>

      <View style={styles.head1}>
	      <Image style={styles.logo} source={require('./../../assets/imgs/LOGO-Aprovada.png')}/>
      </View>
      <View style={styles.head}>
        <Button title="Lido" icon={
          <MaterialCommunityIcons name="email-open-multiple-outline" size={24} color={ isActiveLido ? '#4663AE' : 'white'} />
        } 
        onPress={read} titleStyle={{color: isActiveLido ? '#4663AE' : 'white',marginLeft:10}} 
        buttonStyle={{
          borderRadius: 5,
          backgroundColor: isActiveLido ? 'white' : '#4663AE',
          width:120,
          marginTop:10,
          borderWidth:2,
          borderColor: isActiveLido ? '#4663AE' : 'white' 
        }}>
        </Button>
        <Button title="Não Lido" icon={
          <MaterialCommunityIcons name="email-multiple-outline" size={24} color={ isActiveNaoLido ? '#4663AE' : 'white'} />
        } 
        onPress={notRead} titleStyle={{color: isActiveNaoLido ? '#4663AE' : 'white',marginLeft:10}} 
        buttonStyle={{
          borderRadius: 5,
          backgroundColor: isActiveNaoLido ? 'white' : '#4663AE',
          width:120,
          marginTop:10,
          borderWidth:2,
          borderColor: isActiveNaoLido ? '#4663AE' : 'white' 
        }}>         

        </Button>
      </View>


      <View style={styles.container}>
        {leitura == 'read' && (
                  <ScrollViewVerticalTeste notify={notifyLido} handleUpdate={handleUpdate}/>          
        )}
        {leitura == 'notRead' && (
                  <ScrollViewVerticalTeste notify={notifyNaoLido} handleUpdate={handleUpdate}/>          
        )}
      </View>
      <View style={styles.rodape}>
        <Button title="Sair" onPress={Deslogar} titleStyle={{color:'#3556AA'}} buttonStyle={styles.btn1}></Button>
      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
    flex: 0,
    backgroundColor: '#3556AA',
    alignItems: 'center',

  },
  head1:{
    alignItems:'center',
    width: 315,
    height: 140,
    marginTop:50
  },

  logo:{
    width:245,
    height:140,    
  },

  head: {
    flex: 0,
    width: 315,
    height: '8%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    },

  list:{
    width:300

  },

  container: {
    flex: 0,
    width: '80%',
    height: '45%',
  },


    btn1:{
      borderRadius: 5,
      backgroundColor: '#9FBAFF',
      width:100,
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


