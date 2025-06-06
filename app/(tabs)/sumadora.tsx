import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Sumadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | string | null>(null);

  const handleSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(isNaN(sum) ? 'Error' : sum);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Text style={styles.button} onPress={handleSum}>
        Calcular
      </Text>
      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  );
};

export default Sumadora;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  button: {
    fontSize: 18,
    color: '#FFF',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});