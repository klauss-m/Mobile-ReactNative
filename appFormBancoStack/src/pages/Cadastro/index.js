// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, Switch } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'

import styles from '../../styles/styles'

export function Cadastro() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [gender, setGender] = useState('Masculino')
  const [escolaridade, setEscolaridade] = useState('Fundamental')
  const [limiteConta, setLimiteConta] = useState(0)
  const [isBrasileiro, setIsBrasileiro] = useState(false)
  const [submit, setSubmit] = useState(false)

  const navigation = useNavigation()

  function goDadosInformados() {
    navigation.navigate('DadosInformados', {
      nome,
      idade,
      gender,
      escolaridade,
      limiteConta,
      isBrasileiro,
    })
  }

  return (
    <View>
      <Text style={styles.text}>Nome</Text>
      <TextInput style={styles.input} onChangeText={setNome} />
      <Text style={styles.text}>Idade</Text>
      <TextInput style={styles.input} onChangeText={setIdade} keyboardType='numeric' />
      <Text style={styles.text}>Gênero</Text>
      <Picker selectedValue={gender} onValueChange={setGender}>
        <Picker.Item label='Masculino' value='Masculino' />
        <Picker.Item label='Feminino' value='Feminino' />
        <Picker.Item label='Outro' value='Outro' />
      </Picker>
      <Text style={styles.text}>Escolaridade</Text>
      <Picker selectedValue={escolaridade} onValueChange={setEscolaridade}>
        <Picker.Item label='Ensino Fundamental' value='Ensino Fundamental' />
        <Picker.Item label='Ensino Médio' value='Ensino Médio' />
        <Picker.Item label='Ensino Superior' value='Ensino Superior' />
      </Picker>
      <Text style={styles.text}>Limite da Conta</Text>
      <Slider
        minimumValue={0}
        maximumValue={5000}
        minimumTrackTintColor='#FF0000'
        maximumTrackTintColor='#00FF00'
        thumbTintColor='#0000FF'
        step={10}
        onValueChange={setLimiteConta}
      />
      <Text style={styles.sliderText}>R${limiteConta}</Text>
      <Text style={styles.text}>Brasileiro?</Text>
      <Switch
        value={isBrasileiro}
        onValueChange={() => setIsBrasileiro(!isBrasileiro)}
        style={styles.switch}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          setSubmit(true)
          goDadosInformados()
        }}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </Pressable>
    </View>
  )
}
