import React, { useState } from 'react';
import { View, Button } from 'react-native';
import InputSection from '../components/InputSection';

export default function AddEvent() {
  const [name, setName] = useState('');
  const [costPerTicket, setCostPerTicket] = useState('');
  const [registrationCapacity, setRegistrationCapacity] = useState('');

  function addEvent() {
    let payload = {
      name,
      costPerTicket,
      registrationCapacity,
    };
    console.log(payload);
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
      <Button onPress={() => addEvent()} title="Create Event" />
    </View>
  );
}