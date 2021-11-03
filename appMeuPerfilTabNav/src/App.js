import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Experiencia from './pages/experiencia';
import Formacao from './pages/formacao';
import Pessoal from './pages/pessoal';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const icons = {
  Experiência: 'briefcase',
  Formação: 'graduation-cap',
  Pessoal: 'user',
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            return <Icon name={icons[route.name]} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Experiência" component={Experiencia} />
        <Tab.Screen name="Formação" component={Formacao} />
        <Tab.Screen name="Pessoal" component={Pessoal} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
