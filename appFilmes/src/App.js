import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles/styles';

import api from './services/api';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  async function loadFilmes() {
    const response = await api.get('filmes');

    setFilmes(response.data);
  }
  console.log(filmes);

  return (
    <View>
      <Text style={styles.title}>Lista de filmes</Text>
      <Pressable onPress={loadFilmes} style={styles.button}>
        <Text style={styles.buttonText}>Carregar filmes</Text>
      </Pressable>
      <View style={styles.list}>
        {filmes.map(filme => (
          <View key={filme.id} style={styles.item}>
            <Text style={styles.itemText}>{filme.nome}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
