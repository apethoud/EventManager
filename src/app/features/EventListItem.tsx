import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EventListItem(props) {
  const { name } = props;

  return (
    <View style={styles.EventWrapper}>
      <Text style={styles.EventName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  EventWrapper: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#ccc',
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  EventName: {
    fontWeight: 'bold',
  },
});
