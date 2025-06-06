import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Traductor = () => {
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');

  const numberToWords = (num: number): string => {
    const units = [
      '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
    ];
    const tens = [
      '', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa',
    ];
    const teens = [
      'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve',
    ];
    const hundreds = [
      '', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos',
    ];

    if (num === 1000) return 'mil';
    if (num < 10) return units[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) {
      const unit = num % 10;
      const ten = Math.floor(num / 10);
      return tens[ten] + (unit ? ` y ${units[unit]}` : '');
    }
    if (num < 1000) {
      const hundred = Math.floor(num / 100);
      const remainder = num % 100;
      return hundreds[hundred] + (remainder ? ` ${numberToWords(remainder)}` : '');
    }
    return 'Número fuera de rango';
  };

  const handleTranslate = () => {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 1 || num > 1000) {
      setText('Por favor ingresa un número entre 1 y 1000');
    } else {
      setText(numberToWords(num));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traductor de Números</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un número (1-1000)"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Text style={styles.button} onPress={handleTranslate}>
        Traducir
      </Text>
      {text !== '' && <Text style={styles.result}>{text}</Text>}
    </View>
  );
};

export default Traductor;

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
    textAlign: 'center',
  },
});