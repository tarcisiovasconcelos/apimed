import * as React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import { InputRoundSlot } from './inputslot';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';


export interface InfoDispProps {
}

export function InfoDisp (props: InfoDispProps) {
    const [erro, setErro] = useState<null|string>(null);
    const nav = useNavigation();
    
    const formdate = async (dados1:any) => {

      await new Promise((resolve) => setTimeout(() => resolve(''), 2000)),
      <ActivityIndicator size="large" color="#00B4D8"/>
      console.log(dados1)
      nav.navigate('Tela-Home')

    }

    


    return (
      <View style={styles.infodisp}>
        <Formik
        initialValues={{paciente:'', dispositivo:''}}
        validationSchema={Yup.object({
          paciente: Yup.string().required('*Campo Obrigatório*'),
          dispositivo: Yup.string().required('*Campo Obrigatório*')})}
        
        onSubmit={formdate}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (
          <View style={styles.view}>
            <Text style={styles.title2}>Nome do Dispositivo</Text>
            <InputRoundSlot onBlur={handleBlur('dispositivo')} placeholder="" onChangeText={handleChange('dispositivo')}/>
            { touched.dispositivo && <Text style={styles.text2}>{errors.dispositivo}</Text>}
            { erro != null && <Text style={styles.text2}>{erro}</Text>} 

            <Text style={styles.title2}>Nome do Paciente</Text>
            <InputRoundSlot onBlur={handleBlur('paciente')} placeholder="" onChangeText={handleChange('paciente')}/>
            { touched.paciente && <Text style={styles.text2}>{errors.paciente}</Text>}
            { erro != null && <Text style={styles.text2}>{erro}</Text>}
            { isSubmitting && <ActivityIndicator size="large" color="#00B4D8"/>}
            { !isSubmitting && <Button title="Salvar" onPress={handleSubmit} buttonStyle={styles.btn}></Button>}

          </View>)}
        </Formik>
      </View>
        );
    }

const styles = StyleSheet.create({      
      infodisp:{
        flex:0,
        height: 200,
        width: 315,
        alignItems: 'center',
        alignContent:'flex-start',
        marginTop:80,
      },
      view:{
        flex:0,
        alignItems:'center'

      },

      btn:{
        backgroundColor: '#00B4D8',
        borderRadius:15,
        width:100,
      },

      //CSS DE TEXTO
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