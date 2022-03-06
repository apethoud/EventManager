import React, { useState } from 'react';
import { View } from 'react-native';
import InputSection from './InputSection';

export default function AddEvent() {
  const [name, setName] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <InputSection name={name} setName={setName} label="Event Name" />
    </View>
  );
}
