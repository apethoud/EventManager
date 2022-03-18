import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventList from './src/app/features/EventList';
import AddEvent from './src/app/features/AddEvent';
import Dashboard from './src/app/features/Dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="EventList"
            activeColor="red"
            inactiveColor="green"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'EventList') {
                  iconName = focused ? 'list' : 'list-outline';
                } else if (route.name === 'AddEvent') {
                  iconName = focused ? 'add-circle' : 'add-circle-outline';
                } else if (route.name === 'Dashboard') {
                  iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                } else {
                  iconName = focused ? 'ellipse' : 'ellipse-outline';
                }
                return <Ionicons name={iconName} color={color} size={size} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
              name="EventList"
              options={{ title: 'Event List' }}
              component={EventList}
            />
            <Tab.Screen
              name="AddEvent"
              options={{ title: 'Add Event' }}
              component={AddEvent}
            />
            <Tab.Screen
              name="Dashboard"
              options={{ title: 'Dashboard' }}
              component={Dashboard}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
