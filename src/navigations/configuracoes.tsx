import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home=(';
import { Medicamento } from '../screens/medicamento';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'; 
import { Perfil } from '../screens/perfil';


const Tab = createBottomTabNavigator();

export function MyTabs(){
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Tab.Screen name="Medicamentos" component={Medicamento} options={{
          tabBarActiveBackgroundColor:'#00B4D8',
          tabBarShowLabel:false,
          tabBarInactiveBackgroundColor:'#0077B6',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="pill" size={40} color="#DEDBDB" />
          ),
        }}/>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarActiveBackgroundColor:'#00B4D8',
          tabBarShowLabel:false,
          tabBarInactiveBackgroundColor:'#0077B6',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={40} color="#DEDBDB" />
          ),
        }}/>
        <Tab.Screen name="Perfil" component={Perfil} options={{
          tabBarActiveBackgroundColor:'#00B4D8',
          tabBarShowLabel:false,
          tabBarInactiveBackgroundColor:'#0077B6',
          tabBarIcon: () => (
            <FontAwesome name="user" size={40} color="#DEDBDB" />
          ),
        }}/>
      
    </Tab.Navigator>
    );
}
