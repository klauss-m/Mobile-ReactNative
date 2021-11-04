import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';

import styles from './styles/styles';

import api from './services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState('');

  async function handleSubmit() {
    const response = await api.get(`/${cep}/json`);
    setData(response.data);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cep x Endereço</Text>
      </View>
      <View style={styles.containerInputButton}>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          value={cep}
          onChangeText={setCep}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Buscar</Text>
        </Pressable>
      </View>
      <View style={styles.containerDados}>
        <Text style={styles.text}>Logradouro: {data.logradouro}</Text>
        <Text style={styles.text}>Bairro: {data.bairro}</Text>
        <Text style={styles.text}>Cidade: {data.localidade}</Text>
        <Text style={styles.text}>Estado: {data.uf}</Text>
      </View>
    </View>
  );
}
