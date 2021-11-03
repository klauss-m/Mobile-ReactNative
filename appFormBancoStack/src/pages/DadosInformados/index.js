// eslint-disable-next-line no-unused-vars
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../styles/styles'

export function DadosInformados({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Nome: {route.params?.nome} </Text>
      <Text style={styles.text}> Idade: {route.params?.idade} </Text>
      <Text style={styles.text}> Gênero: {route.params?.gender} </Text>
      <Text style={styles.text}> Ensino: {route.params?.escolaridade} </Text>
      <Text style={styles.text}> Limite na Conta: R${route.params?.limiteConta} </Text>
      <Text style={styles.text}>{`Nacionalidade: ${
        route.params.isBrasileiro ? 'Brasileiro' : 'Estrangeiro'
      }`}</Text>
    </View>
  )
}
