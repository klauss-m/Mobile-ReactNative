import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import api from '../../services/api';
import styles from '../../styles/styles';

export function Info({route}) {
  const {params} = useRoute();
  const [sinopse, setSinopse] = useState('');

  useEffect(() => {
    async function loadInfo() {
      try {
        const response = await api.get(`/?api=filmes/${params.id}`);
        setSinopse(response.data.sinopse);
      } catch (error) {
        console.log(error);
      }
    }
    loadInfo();
  }, [params]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Sinopse</Text>
          <Text style={styles.description}>{sinopse}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
