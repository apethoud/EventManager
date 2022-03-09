import React from 'react';
import { View, Text } from 'react-native';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

export default function EventList() {
  const eventList = useSelector((state: RootState) => state.events.eventList)

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Event List</Text>
      <Text>Total events: {eventList.length}</Text>
    </View>
  );
}
