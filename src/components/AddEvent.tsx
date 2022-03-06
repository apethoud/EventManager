import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddEvent() {
  const [name, setName] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>test text</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: 240,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 8,
  },
});
