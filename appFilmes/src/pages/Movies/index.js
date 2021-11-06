import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Image, ScrollView, FlatList} from 'react-native';
import api from '../../services/api';
import styles from '../../styles/styles';
import {useNavigation} from '@react-navigation/native';

export function Movies() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  async function getFilmes() {
    await api.get('/?api=filmes').then(response => {
      setFilmes(response.data);
    });
  }

  useEffect(() => {
    getFilmes();
    setLoading(false);
  }, []);

  function navigateToDetail(id) {
    navigation.navigate('Info', {id});
  }

  return (
    <FlatList
      data={filmes}
      keyExtractor={filme => String(filme.id)}
      renderItem={({item}) => (
        <Pressable
          onPress={() => {
            navigateToDetail(item.id);
          }}>
          <View style={styles.container}>
            <View style={styles.containerRow}>
              <Text style={styles.title}>{item.nome}</Text>
            </View>
            <Image
              style={styles.imageFilme}
              source={{
                uri: item.foto,
              }}
            />
          </View>
        </Pressable>
      )}
    />
  );
}
