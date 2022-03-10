import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Event } from '../models/Event';
import _ from 'lodash';

export default function Dashboard() {
  const eventList = useSelector((state: RootState) => state.events.eventList);

  function getAverageTicketCost(events: Event[]) {
    console.log(events);
    let sumOfAllTicketCosts = _.reduce(
      events,
      (result, event) => {
        return result + event.costPerTicket;
      },
      0,
    );
    return sumOfAllTicketCosts / events.length;
  }

  function getTotalAvailableTickets(events: Event[]) {
    return _.reduce(
      events,
      (result, event) => {
        return result + event.registrationCapacity;
      },
      0,
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Total # of Events: {eventList.length}</Text>
      <Text>Average Ticket Cost: {getAverageTicketCost(eventList)}</Text>
      <Text>
        Total # of Tickets Still Available:{' '}
        {getTotalAvailableTickets(eventList)}
      </Text>
    </View>
  );
}
