import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import EventList from './src/components/EventList';
import AddEvent from './src/components/AddEvent';
import Dashboard from './src/components/Dashboard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EventList" component={EventList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
