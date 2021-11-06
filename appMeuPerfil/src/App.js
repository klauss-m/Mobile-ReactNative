import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      <Image
        source={{
          uri: 'https://avatars.githubusercontent.com/u/13542543?v=4',
        }}
        style={styles.avatar}
      />

      <Text style={styles.text}>Nome: K.M</Text>
      <Text style={styles.text}>Idade: 31</Text>

      <Text style={styles.text}>
        Formação: Análise e Desenvolvimento de Sistemas
      </Text>
      <Text style={styles.text}> Hobbies: Video-games, livros e filmes.</Text>
      <Text style={styles.text}>
        Projetos: Desenvolvimento de sistema para hotelaria.
      </Text>
    </View>
  );
}
