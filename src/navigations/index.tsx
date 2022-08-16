import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/login';
import { Cadastro } from '../screens/cadastro';
import { Esqueceusenha } from '../screens/esqueceusenha';
import { Start } from '../screens/start';
import { MyTabs } from './configuracoes';
import { InsertDispositivo } from '../screens/insertdispositivo';
import { UpdateDispositivo } from '../screens/updatedispositivo';
import { View } from 'react-native';
import firebase from "firebase/compat/app"
import { firebaseConfig } from '../config/firebase';

const Stack = createStackNavigator();


export function Carregando() {
    
    const nav = useNavigation<any>();

    //Define para qual tela o usuário irá
    const inicializar = async() => {

        await firebase.initializeApp(firebaseConfig);

        //Checa se o usuário está logado, caso não esteja retorna null em usuario
        firebase.auth().onAuthStateChanged(usuario => {
            console.log(usuario)
            if (usuario == null)
                nav.navigate('Tela-Start')
            else
                nav.navigate('Tela-Home')
        })
    }
    useEffect(() => {
        inicializar();        
    }, [])

    return (<View/>)
}


export function MainNavigation(){

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animationEnabled:true,headerShown:false}}>
                <Stack.Screen name="Carregando" component={Carregando}/>                
                <Stack.Screen name="Tela-Start" component={Start}/>                
                <Stack.Screen name="Tela-Login" component={Login}/>
                <Stack.Screen name="Tela-Cadastro" component={Cadastro}/>
                <Stack.Screen name="Tela-EsqueceuSenha" component={Esqueceusenha}/>
                <Stack.Screen name="Tela-Home" component={MyTabs}/>
                <Stack.Screen name="Tela-UpdateDispositivo" component={UpdateDispositivo}/>
                <Stack.Screen name="Tela-InsertDispositivo" component={InsertDispositivo}/>
                
                

            </Stack.Navigator>
        </NavigationContainer>
    )

    }