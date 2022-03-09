import React, { useState } from 'react';
import { View, Button } from 'react-native';
import InputSection from '../components/InputSection';
import { useDispatch } from 'react-redux';
import { addEvent } from './EventsSlice';

export default function AddEvent() {
  const [name, setName] = useState('');
  const [costPerTicket, setCostPerTicket] = useState('');
  const [registrationCapacity, setRegistrationCapacity] = useState('');
  const dispatch = useDispatch();

  function saveEvent() {
    let payload = {
      name,
      costPerTicket: Number(costPerTicket) || 0,
      registrationCapacity: Number(registrationCapacity) || 0,
    };
    console.log(payload);
    dispatch(addEvent(payload));
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <InputSection
        inputValue={name}
        inputUpdater={setName}
        label="Event Name"
      />
      <InputSection
        inputValue={costPerTicket}
        inputUpdater={setCostPerTicket}
        label="Ticket Price"
      />
      <InputSection
        inputValue={registrationCapacity}
        inputUpdater={setRegistrationCapacity}
        label="Event Capacity"
      />
      <Button onPress={() => saveEvent()} title="Create Event" />
    </View>
  );
}
