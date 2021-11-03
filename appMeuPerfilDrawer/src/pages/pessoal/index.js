import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';

export default function Pessoal() {
  return (
    <View>
      <Text style={styles.textHeader}>Pessoal</Text>
      <View style={styles.container}>
        <Text style={styles.text}>Github: github.com/klauss-m</Text>
        <Text style={styles.text}>LinkedIn: linkedin.com/in/klauss-m</Text>
      </View>
    </View>
  );
}
