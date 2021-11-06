import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Form from './components/Form';
import Tasks from './components/Tasks';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
