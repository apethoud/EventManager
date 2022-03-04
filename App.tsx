import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
import EventList from './src/components/EventList';
import AddEvent from './src/components/AddEvent';
import Dashboard from './src/components/Dashboard';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="EventList" component={EventList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
