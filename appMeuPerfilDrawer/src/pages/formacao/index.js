import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';

export default function Formacao() {
  return (
    <View>
      <Text style={styles.textHeader}>Formação</Text>
      <View style={styles.container}>
        <Text style={styles.text}>
          Análise e Desenvolvimento de Sistemas - UNIP
        </Text>
        <Text style={styles.text}> ‣ 2020 - 2021</Text>
      </View>
    </View>
  );
}
