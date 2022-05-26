import { useNavigation } from '@react-navigation/core';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { Formik } from 'formik';
import * as React from 'react';
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, Platform,ToastAndroid, View, Image } from 'react-native';
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
    
        
    const cadastro = async (dados:any) => {

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
        <Image style={styles.logo} source={require('./../../assets/imgs/LOGO-Aprovada.png')}/>
        </View>
        <View style={styles.container}>
        <Formik
        initialValues={{user:'',email:'', senha: '', senha1:''}}
        validationSchema={Yup.object({
          email: Yup.string().required('*Campo Obrigatório*').email('Campo deve ser EMAIL'),
          senha: Yup.string().required('*Campo Obrigatório*').min(6,'A senha deve conter no minimo 6 dígitos')
          .max(6,'A senha deve conter no máximo 6 dígitos'),
          user: Yup.string() .required('*Campo Obrigatório*'),
          senha1: Yup.string().required('*Campo Obrigatório*').oneOf([Yup.ref('senha')], 'as senhas precisam ser iguais'),


        })}
        onSubmit={cadastro}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (
        <View>
          <Text style={styles.title1}>Cadastrar</Text>

          <Text style={styles.title2}>Nome</Text>
          <InputRound onBlur={handleBlur('user')} placeholder="Digite seu nome" icone="person" onChangeText={handleChange('user')}/>
          { touched.user && <Text style={styles.text2}>{errors.user}</Text>}

          <Text style={styles.title2}>E-mail</Text>
          <InputRound onBlur={handleBlur('email')} placeholder="Digite seu email" icone="email" onChangeText={handleChange('email')}/>
          { touched.email && <Text style={styles.text2}>{errors.email}</Text>}
          
          <Text style={styles.title2}>Senha</Text>
          <InputRound onBlur={handleBlur('senha')} placeholder="Digite sua senha" icone="lock" senha onChangeText={handleChange('senha')}/>
          { touched.senha && <Text style={styles.text2}>{errors.senha}</Text>}
          { erro != null && <Text style={styles.text2}>{erro}</Text>}


          <Text style={styles.title2}>Confirmar Senha</Text>
          <InputRound onBlur={handleBlur('senha1')} placeholder="Digite novamente sua senha" icone="lock" senha onChangeText={handleChange('senha1')}/>
          { touched.senha1 && <Text style={styles.text2}>{errors.senha1}</Text>}
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
    height: 417,
    marginTop:50,
  },

  btn:{
    borderRadius: 15,
    backgroundColor: '#00B4D8',
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
    fontSize: 10,
    color: '#DEDBDB',

  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },

})