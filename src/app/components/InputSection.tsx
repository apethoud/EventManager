import React from 'react';
import { View } from 'react-native';
import { StyledTextInput, StyledInputLabel } from '../styles';

export default function InputSection(props) {
  const { inputValue, inputUpdater, label } = props;

  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput value={inputValue} onChangeText={inputUpdater} />
    </View>
  );
}
