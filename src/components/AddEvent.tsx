import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StyledTextInput, StyledInputLabel } from './styles';

export default function AddEvent() {
  const [name, setName] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StyledInputLabel>Event Name</StyledInputLabel>
      <StyledTextInput value={name} onChangeText={setName} />
    </View>
  );
}
