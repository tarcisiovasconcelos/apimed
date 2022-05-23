import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/login';
import { Cadastro } from '../screens/cadastro';
import { Esqueceusenha } from '../screens/esqueceusenha';
import { Start } from '../screens/start';
import { MyTabs } from './configuracoes';


const Stack = createStackNavigator();

export function MainNavigation(){

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animationEnabled:true,headerShown:false}}>
                <Stack.Screen name="Tela-Home" component={MyTabs}/> 
                <Stack.Screen name="Tela-Start" component={Start}/>                
                <Stack.Screen name="Tela-Login" component={Login}/>
                <Stack.Screen name="Tela-Cadastro" component={Cadastro}/>
                <Stack.Screen name="Tela-EsqueceuSenha" component={Esqueceusenha}/>
                       

            </Stack.Navigator>
        </NavigationContainer>
    )

    }