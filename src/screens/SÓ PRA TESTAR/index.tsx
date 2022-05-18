import * as React from 'react';
import { StyleSheet, View, Text , ImageBackground, ActivityIndicator, YellowBox, Platform, ToastAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { useState } from 'react';
import { InputRound } from './components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface LoginProps {
}
//LOGIN
export function Login (props: LoginProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState<null|string>(null);
        
    const login = async (dados:any) => {

      firebase.auth().signInWithEmailAndPassword(dados.email, dados.senha)
        .then(usuario => nav.navigate('Tela-Home'))
        .catch(erro => {
          if (Platform.OS == "android")
              ToastAndroid.show("email ou senha incorreta", 3000);
          else
            setErro("email ou senha incorreta");
        })
    }

    return (
      <ImageBackground source={require('./../../assets/imgs/bg2.png')}
                            style={styles.background}>
      
      <Formik
        initialValues={{email:'', senha: ''}}
        validationSchema={Yup.object({
          email: Yup.string().required('*Campo Obrigatório*').email('Campo deve ser EMAIL'),
          senha: Yup.string().required('*Campo Obrigatório*').min(4,'A senha deve conter no minimo 4 dígitos').max(6,'A senha deve conter no minimo 6 dígitos')

        })}
        onSubmit={login}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (
        <View style={styles.container}>
          <Text style={styles.text1}>Entrar</Text>

          <Text style={{paddingLeft: 30}}>E-mail</Text>
          <InputRound onBlur={handleBlur('email')} placeholder="Digite seu email" icone="email" onChangeText={handleChange('email')}/>
          { touched.email && <Text style={styles.errorLabel}>{errors.email}</Text>}
          
          <Text style={{paddingLeft: 30}}>Senha</Text>
          <InputRound onBlur={handleBlur('senha')} placeholder="Digite sua senha" icone="lock" senha onChangeText={handleChange('senha')}/>
          { touched.senha && <Text style={styles.errorLabel}>{errors.senha}</Text>}
          { erro != null && <Text style={styles.errorLabel}>{erro}</Text>}
          { isSubmitting && <ActivityIndicator style={styles.bolinha}  size="large" color="black"/>}
          { !isSubmitting && <Button title="Logar" onPress={handleSubmit} buttonStyle={{borderRadius: 30, backgroundColor: '#1C3144', marginTop: 10}}></Button>}
        </View>)}
      </Formik>
      <View style={styles.container2}>
      <TouchableOpacity onPress={() => nav.navigate('Tela-EsqueceuSenha')}>
          <Text style={styles.text2}>Esqueceu a senha? Solicite uma nova</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate('Tela-Cadastro')}>
          <Text style={styles.text2}>Não tem uma conta? Clique aqui para criar uma agora.</Text>
      </TouchableOpacity>
      <StatusBar style="dark"/>
      </View>
      <View style={styles.rodape}>

      </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({

//CSS BACKGROUND + INDICATOR
background: {
  width: '100%',
  height: '100%',  
},

bolinha: {
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 15
},

//CSS VIEWS
rodape:{
  flex:1,
  backgroundColor: 'yellow'
},

container: {
  flex: 10,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 30,
   
},

container2: {
  flex:1,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'space-around'

},

//CSS TEXTOS
text2: {
  color:'black',
  fontSize: 11,
  textAlign: 'center',
  textDecorationLine: 'underline',
},

text1: {
  textAlign: 'center',
  padding: 10,
  color:'black',
  fontSize: 20,
  paddingLeft: 30,
  paddingTop:50,
  fontStyle: 'italic'
},

errorLabel: {
  color:'red',
  fontSize: 12,
  marginTop: 0,
  marginBottom: 5,
  textAlign: 'center'
  
}

})