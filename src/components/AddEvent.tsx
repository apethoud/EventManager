import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddEvent() {
  const [name, setName] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.inputLabel}>Event Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.inputField}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    height: 48,
    width: 240,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 8,
  },
  inputLabel: {
    fontSize: 18,
    color: '#222',
  },
});
