import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventList from './src/components/EventList';
import AddEvent from './src/components/AddEvent';
import Dashboard from './src/components/Dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="EventList"
        activeColor="red"
        inactiveColor="green"
        screenOptions={({ route }) => ({
          tabBarIcon: (options) => {
            let iconName;

            if (route.name === 'EventList') {
              iconName = options.focused ? 'list' : 'list-outline';
            } else if (route.name === 'AddEvent') {
              iconName = options.focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Dashboard') {
              iconName = options.focused ? 'bar-chart' : 'bar-chart-outline';
            } else {
              iconName = options.focused ? 'ellipse' : 'ellipse-outline';
            }
            return (
              <Ionicons
                name={iconName}
                color={options.color}
                size={options.size}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="EventList" component={EventList} />
        <Tab.Screen name="AddEvent" component={AddEvent} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
