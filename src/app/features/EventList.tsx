import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import EventListItem from './EventListItem';

export default function EventList() {
  const eventList = useSelector((state: RootState) => state.events.eventList);

  const renderItem = ({ item }) => (
    <EventListItem
      name={item.name}
      costPerTicket={item.costPerTicket}
      registrationCapacity={item.registrationCapacity}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {eventList.length > 0 ? (
        <FlatList
          data={eventList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No events scheduled.</Text>
        </View>
      )}
    </View>
  );
}
