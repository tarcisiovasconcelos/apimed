import { useNavigation } from '@react-navigation/core';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { Formik } from 'formik';
import * as React from 'react';
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { InputRound } from './components';

export interface CadastroProps {
}
//LOGIN
export function Cadastro (props: CadastroProps) {

    const nav = useNavigation();
    const [erro] = useState<null|string>(null);
    
        
    const cadastro = async (dados) => {

      await new Promise((resolve) => setTimeout(() => resolve(''), 2000))
      firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
      .then(usuario => {
        if (Platform.OS =="android")
            ToastAndroid.show("Conta criada com sucesso!", 3000);
            nav.navigate('Tela-Login')})
      .catch(erro => {
        if (Platform.OS == "android")
            ToastAndroid.show("Já existe conta com esse email", 3000);
            nav.navigate('Tela-Cadastro')})     
    }

    return (
      <View style={styles.background}>
        <View style={styles.head}>

        </View>
        <View style={styles.container}>
        <Formik
        initialValues={{email:'', senha: ''}}
        validationSchema={Yup.object({
          email: Yup.string().required('*Campo Obrigatório*').email('Campo deve ser EMAIL'),
          senha: Yup.string().required('*Campo Obrigatório*').min(4,'A senha deve conter no minimo 4 dígitos').max(6,'A senha deve conter no máximo 6 dígitos')

        })}
        onSubmit={cadastro}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (
        <View>
          <Text style={styles.title1}>Cadastrar</Text>

          <Text style={styles.title2}>E-mail</Text>
          <InputRound onBlur={handleBlur('email')} placeholder="Digite seu email" icone="email" onChangeText={handleChange('email')}/>
          { touched.email && <Text style={styles.text2}>{errors.email}</Text>}
          
          <Text style={styles.title2}>Senha</Text>
          <InputRound onBlur={handleBlur('senha')} placeholder="Digite sua senha" icone="lock" senha onChangeText={handleChange('senha')}/>
          { touched.senha && <Text style={styles.text2}>{errors.senha}</Text>}
          { erro != null && <Text style={styles.text2}>{erro}</Text>}
          { isSubmitting && <ActivityIndicator size="large" color="#00B4D8"/>}
          { !isSubmitting && <Button title="Cadastrar" onPress={handleSubmit} buttonStyle={styles.btn}></Button>}
        </View>)}
      </Formik>
          
        </View>
        <View style={styles.rodape}>
        <TouchableOpacity onPress={() => nav.navigate('Tela-Login')}>
	        <Text style={styles.text1}>Já possui uma conta? Clique aqui para entrar.</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: '#0077B6',
    alignItems: 'center',
    justifyContent: 'space-around'
    
  },

  head:{
    backgroundColor: 'silver',
    width: 315,
    height: 140,

  },

  container:{
    width: 315,
    height: 355,
  },

  btn:{
    borderRadius: 15,
    backgroundColor: '#00B4D8',
  },

  rodape:{
    width: 315,
    height: 50,

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
    fontSize: 10,
    color: '#DEDBDB',

  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },

})