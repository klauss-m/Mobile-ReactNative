import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';

export default function Experiencia() {
  return (
    <View>
      <View>
        <Text style={styles.textHeader}>Experiência</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textOption}>Linguagens</Text>
        <Text style={styles.text}>‣ Javascript</Text>
        <Text style={styles.text}>‣ Typescript</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textOption}>Libs/Frameworks</Text>
        <Text style={styles.text}>‣ React Native</Text>
        <Text style={styles.text}>‣ React</Text>
        <Text style={styles.text}>‣ NodeJS</Text>
        <Text style={styles.text}>‣ ExpressJS</Text>
        <Text style={styles.text}>‣ Prisma/TypeORM</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textOption}>Bancos de Dados</Text>
        <Text style={styles.text}>‣ NoSQL</Text>
        <Text style={styles.text}>‣ SQL</Text>
      </View>
    </View>
  );
}
