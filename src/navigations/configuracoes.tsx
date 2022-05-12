import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import{MaterialIcons}from'@expo/vector-icons';
import { Home } from '../screens/home';

const Tab = createBottomTabNavigator();

export function ConfiguracoesNavegacao () {

    return (
        <Tab.Navigator >
            <Tab.Screen name= "Inicio" component={Home} options={{
		    tabBarLabel:"Home",
		    tabBarIcon:()=><MaterialIcons name="home" size={30}/>}}/>
        </Tab.Navigator>
    )
}