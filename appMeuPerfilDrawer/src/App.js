import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Experiencia from './pages/experiencia';
import Formacao from './pages/formacao';
import Pessoal from './pages/pessoal';

import CustomDrawer from './components/CustomDrawer/';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawer}>
        <Drawer.Screen name="Experiência" component={Experiencia} />
        <Drawer.Screen name="Formação" component={Formacao} />
        <Drawer.Screen name="Pessoal" component={Pessoal} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
