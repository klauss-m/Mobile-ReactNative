import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import api from './services/api';
import styles from './styles/styles';

export default function App() {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  async function handleSubmit() {
    const response = await api.get(`/${user}`);
    setData(response.data);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Perfil dos Devs</Text>
      </View>
      <View>
        <View>
          <Image source={{uri: data.avatar_url}} style={styles.avatar} />
        </View>
        <Text style={styles.label}>Usuário:</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            value={user}
            onChangeText={setUser}
            placeholder="Digite seu usuário no Github:"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>🔎︎</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.text}>
          <Text style={styles.textBold}>ID:</Text>
          {data.id}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Nome:</Text> {data.name}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Repositórios Publicos:</Text>
          {data.public_repos}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Data de Cadastro:</Text>
          {data.created_at}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Seguidores:</Text> {data.followers}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Seguindo:</Text> {data.following}
        </Text>
      </View>
    </View>
  );
}
