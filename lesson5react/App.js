import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StudentScreen from './screens/StudentScreen';
import HobbiesScreen from './screens/HobbiesScreen';
const Stack = createStackNavigator();

export default function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Hobbies"
      screenOptions={{
        headerTitle:'APP',
      }}
    >
        <Stack.Screen name="Hobbies" component={HobbiesScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   );
  }
