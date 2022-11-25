import * as React from 'react';
import { StyleSheet, View, Text , ActivityIndicator, Image, Platform, ToastAndroid } from 'react-native';
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

      await firebase.auth().signInWithEmailAndPassword(dados.email, dados.senha)
        .then(usuario => nav.navigate('Tela-Home'))
        .catch(erro => {
          if (Platform.OS == "android")
              ToastAndroid.show("email ou senha incorreta", 3000);
        })
    }

    return (
      <View style={styles.background}>
        <View style={styles.head}>
	        <Image style={styles.logo} source={require('./../../assets/imgs/LOGO-Aprovada.png')}/>
        </View>
        <View style={styles.container}>
        <Formik
        initialValues={{email:'', senha: ''}}
        validationSchema={Yup.object({
          email: Yup.string().required('*Campo Obrigatório*').email('Campo deve ser EMAIL'),
          senha: Yup.string().required('*Campo Obrigatório*').min(6,'A senha deve conter no minimo 4 dígitos')

        })}
        onSubmit={login}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (
        <View>
          <Text style={styles.title1}>Login</Text>

          <Text style={styles.title2}>E-mail</Text>
          <InputRound onBlur={handleBlur('email')} placeholder="Digite seu email" icone="email" onChangeText={handleChange('email')}/>
          { touched.email && <Text style={styles.text2}>{errors.email}</Text>}
          
          <Text style={styles.title2}>Senha</Text>
          <InputRound onBlur={handleBlur('senha')} placeholder="Digite sua senha" icone="lock" senha onChangeText={handleChange('senha')}/>
          { touched.senha && <Text style={styles.text2}>{errors.senha}</Text>}
          { erro != null && <Text style={styles.text2}>{erro}</Text>}
          { isSubmitting && <ActivityIndicator size="large" color="#00B4D8"/>}
          { !isSubmitting && <Button title="Entrar" titleStyle={{color:'#3556AA'}} onPress={handleSubmit} buttonStyle={styles.btn}></Button>}
          <View style={{marginTop: 15}}>
          <TouchableOpacity onPress={() => nav.navigate('Tela-EsqueceuSenha')}>
	        <Text style={styles.text1}>Esqueçeu a senha? Clique aqui para recuperar.</Text>
          </TouchableOpacity>
          </View>
        </View>)}
      </Formik>
          
        </View>
        <View style={styles.rodape}>
        <TouchableOpacity onPress={() => nav.navigate('Tela-Cadastro')}>
	        <Text style={styles.text1}>Não tem uma conta? Clique aqui para criar uma agora.</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#3556AA',
      alignItems: 'center',
      
    },

    head:{
      alignItems:'center',
      width: 315,
      height: 140,
      marginTop:50
    },
  
    logo:{
      width:245,
      height:140,    
    },

    container:{
      width: 315,
      height: 355,
      marginTop:50,
    },

    btn:{
      borderRadius: 5,
      backgroundColor: '#9FBAFF',
      marginTop:10
    },

    rodape:{
      width: 315,
      height: 50,
      marginTop:50,

    },

    //CSS DE TEXTO
    title1:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#DEDBDB',

    },

    title2:{
      textAlign: 'left',
      fontSize: 14,
      fontWeight: 'bold',
      color: '#DEDBDB',

    },

    text1:{
      textAlign: 'center',
      fontSize: 14,
      color: '#DEDBDB',

    },

    text2:{
      textAlign: 'center',
      fontSize: 10,
      color: '#DEDBDB',

    },
  });
  
