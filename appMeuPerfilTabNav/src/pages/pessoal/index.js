import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';
import Icon from 'react-native-vector-icons/Entypo';

export default function Pessoal() {
  return (
    <View>
      <Text style={styles.textHeader}>Pessoal</Text>
      <View style={styles.container}>
        <Text style={styles.text}>
          <Icon name="github" /> github.com/klauss-m
        </Text>
        <Text style={styles.text}>
          <Icon name="linkedin" /> linkedin.com/in/klauss-m
        </Text>
      </View>
    </View>
  );
}
