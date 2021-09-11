import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const resultado = alcool / gasolina;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Álcool ou Gasolina?</Text>
      <Image
        style={styles.containerImage}
        source={{
          uri: 'https://www.terra.com.br/economia/infograficos/alcool-x-gasolina/img/gasolina.gif',
          width: 200,
          height: 200,
        }}
      />
      <TextInput
        style={styles.input}
        value={parseFloat(alcool)}
        onChangeText={setAlcool}
        placeholder="Preço do álcool:"
        keyboardType="decimal-pad"
      />
      <TextInput
        style={styles.input}
        value={parseFloat(gasolina)}
        onChangeText={setGasolina}
        placeholder="Preço da gasolina:"
        keyboardType="decimal-pad"
      />
      <Text style={styles.result}>Resultado: {resultado.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '300',
  },
  containerImage: {
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    fontFamily: 'Lato',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
});
