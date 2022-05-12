import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { Formik } from 'formik';
import * as React from 'react';
import { useState } from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { InputRound } from './components';

export interface CadastroProps {
}
//LOGIN
export function Cadastro (props: CadastroProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState<null|string>(null);
    
        
    const cadastro = async (dados) => {
      firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha);
      
        
            console.log(dados);       
    }

    return (
      <ImageBackground source={require('./../../assets/imgs/bg2.png')}
                            style={styles.background}>
      
      <Formik
        initialValues={{email:'', senha: ''}}
        validationSchema={Yup.object({
          email: Yup.string().required('*Campo Obrigatório*').email('campo deve ser EMAIL'),
          senha: Yup.string().required('*Campo Obrigatório*').min(4,'A senha deve conter no minimo 4 dígitos').max(6,'A senha deve conter no máximo 6 dígitos'),
          
        })}
        onSubmit={cadastro}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (
        <View style={styles.container}>
        <Text style={styles.text1}>Cadastro</Text>
        <Text style={{paddingLeft: 30}}>E-mail</Text>

          <InputRound onBlur={handleBlur('email')} placeholder="Digite seu email" icone="email" onChangeText={handleChange('email')}/>
          { touched.email && <Text style={styles.errorLabel}>{errors.email}</Text>}

        <Text style={{paddingLeft: 30}}>Senha</Text>
          <InputRound onBlur={handleBlur('senha')} placeholder="Digite sua senha" icone="lock" senha onChangeText={handleChange('senha')}/>
          { touched.senha && <Text style={styles.errorLabel}>{errors.senha}</Text>}
          { erro != null && <Text style={styles.errorLabel}>{erro}</Text>}
          
          { !isSubmitting && <Button title="Cadastrar" onPress={handleSubmit} buttonStyle={{ borderRadius: 30, backgroundColor: '#1C3144', marginTop: 10}}></Button>}

        </View>)}


      </Formik>
      <View style={styles.container2}>
      <TouchableOpacity onPress={() => nav.navigate('Tela-Login')}>
          <Text style={styles.text2}>Já se cadastrou? Clique aqui para entrar.</Text>
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
},

container: {
  flex: 20,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 30,

},

container2: {
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-end'
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