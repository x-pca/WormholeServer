import * as React from 'react';
import { StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fa6040',
    fontSize: 18,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default function CustomButton({ message, styles2 }) {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Hello!')}>
      <Text style={styles.button} children="Click here to Go" />

      <Text style={styles2.button} >{message ? message : 'no message'}</Text>

    </TouchableOpacity>
  );
}
