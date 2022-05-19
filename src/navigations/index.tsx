import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/login';
import { ConfiguracoesNavegacao } from './configuracoes';
import { Home } from '../screens/home';
import { Cadastro } from '../screens/cadastro';
import { Alarme } from '../screens/alarme';
import { Medicamento } from '../screens/medicamento';
import { Slot } from '../screens/slot';
import { Notificacao } from '../screens/notificacao';
import { Esqueceusenha } from '../screens/esqueceusenha';


const Stack = createStackNavigator();

export function MainNavigation(){

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animationEnabled:true,headerShown:false}}>
                <Stack.Screen name="Tela-Login" component={Login}/>
                <Stack.Screen name="Tela-Cadastro" component={Cadastro}/>
                <Stack.Screen name="Tela-EsqueceuSenha" component={Esqueceusenha}/>
                <Stack.Screen name="Tela-Nav" component={ConfiguracoesNavegacao}/>
                <Stack.Screen name="Tela-Home" component={Home}/>
                <Stack.Screen name="Tela-Alarme" component={Alarme}/>
                <Stack.Screen name="Tela-Medicamento" component={Medicamento}/>   
                <Stack.Screen name="Tela-Slot" component={Slot}/>
                <Stack.Screen name="Tela-Notificacao" component={Notificacao}/>                  

            </Stack.Navigator>
        </NavigationContainer>
    )

    }