import React from 'react';
import { View } from 'react-native';
import { StyledTextInput, StyledInputLabel } from './styles';

export default function InputSection(props) {
  const { name, setName, label } = props;

  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput value={name} onChangeText={setName} />
    </View>
  );
}
