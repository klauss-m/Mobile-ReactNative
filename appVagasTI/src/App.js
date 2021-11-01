import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import vagas from './utils/data';
import styles from './styles/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Vagas de TI</Text>
      </View>
      <View>
        <ScrollView>
          {vagas.map((vaga, index) => (
            <View style={styles.item} key={index}>
              <Text style={styles.title}>{vaga.titulo}</Text>
              <Text style={styles.description}>
                Descrição: {vaga.descricao}
              </Text>
              <Text style={styles.text}>Salário: {vaga.salario}</Text>
              <Text style={styles.text}>Cidade: {vaga.cidade}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
