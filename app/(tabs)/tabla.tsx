import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Tabla = () => {
  const [number, setNumber] = useState('');

  const renderTable = () => {
    const num = parseInt(number, 10);
    if (isNaN(num)) return null;

    return Array.from({ length: 13 }, (_, i) => (
      <Text key={i} style={styles.tableRow}>
        {num} x {i + 1} = {num * (i + 1)}
      </Text>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tabla de Multiplicar</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un número"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <View style={styles.tableContainer}>{renderTable()}</View>
    </ScrollView>
  );
};

export default Tabla;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  tableContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  tableRow: {
    fontSize: 18,
    marginVertical: 5,
  },
});