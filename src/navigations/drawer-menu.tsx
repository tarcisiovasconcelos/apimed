import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ConfiguracoesNavegacao } from './configuracoes';

    const Drawer = createDrawerNavigator

    export const NavegacaoDrawer = () => {
        <Drawer.Navigator>
            <Drawer.Screen name="test" component={ConfiguracoesNavegacao} options={{drawerLabel:"Home"}}/>
        </Drawer.Navigator>
    }
