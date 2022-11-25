import * as React from 'react';
import { StyleSheet, View, Text ,  ActivityIndicator, Platform, Image, ToastAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { InputRound } from './components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FontAwesome5 } from '@expo/vector-icons';

export interface EsqueceuSenhaProps {
}
//LOGIN
export function Esqueceusenha (props: EsqueceuSenhaProps) {

        
    const requestPassword = async (dados:any) => {

        await new Promise((resolve) => setTimeout(() => resolve(''), 2000))
        firebase.auth().sendPasswordResetEmail(dados.email)
        .then(usuario => {
        if (Platform.OS =="android")
          ToastAndroid.show("Enviamos um link no seu e-mail!", 3000);
        })
        .catch(erro => {
        if (Platform.OS == "android")
          ToastAndroid.show("Desculpe, Não encontramos conta com esse email.", 3000);
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
        })}
        onSubmit={requestPassword}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (
        <View>
          <View style={{flex:0, alignItems:'center'}}>
          <FontAwesome5 name="lock" size={104} color="#9FBAFF"/>
          </View>
          <Text style={styles.title1}>Esqueceu sua senha?</Text>
          <Text style={{color:'white', marginBottom:10}}>Por favor, informe o E-mail associado a sua conta que enviaremos um link para o mesmo com as instruções para a restauração de sua senha.</Text>
      
          <Text style={styles.title2}>E-mail</Text>
          <InputRound onBlur={handleBlur('email')} placeholder="Digite seu email" icone="email" onChangeText={handleChange('email')}/>
          { touched.email && <Text style={styles.text2}>{errors.email}</Text>}        
       
          { !isSubmitting && <Button title="Enviar" titleStyle={{color:'#3556AA'}} onPress={handleSubmit} buttonStyle={styles.btn}></Button>}
          { isSubmitting && <ActivityIndicator size="large" color="#00B4D8"/>}
        </View>
      
        )}
        </Formik>        
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
    height: 220,
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
    fontSize: 10,
    color: '#DEDBDB',

  },

  text2:{
    textAlign: 'center',
    fontSize: 10,
    color: '#DEDBDB',

  },
});

