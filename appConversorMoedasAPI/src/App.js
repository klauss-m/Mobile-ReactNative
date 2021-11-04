import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-community/picker';
import styles from './styles/styles';
import api from './services/api';

export default function App() {
  const [valor, setValor] = useState('');
  const [moeda1, setMoeda1] = useState('BRL');
  const [moeda2, setMoeda2] = useState('USD');
  const [resultado, setResultado] = useState(0);
  const [submit, setSubmit] = useState(false);

  async function converterMoedas() {
    if (valor === '') {
      alert('Digite um valor');
    } else if (moeda1 === moeda2) {
      alert('Selecione duas moedas diferentes');
    } else {
      const response = await api.get(`${moeda1}-${moeda2}`);
      const valorConvertido =
        parseFloat(valor) * response.data[`${moeda1}${moeda2}`].ask;
      setResultado(valorConvertido);
    }
    setSubmit(true);
  }

  function clear() {
    setValor(0);
    setMoeda1('BRL');
    setMoeda2('USD');
    setResultado(0);
    setSubmit(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Conversor de Moedas</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          keyboardType="numeric"
          value={valor.toString()}
          onChangeText={setValor}
        />
        <Picker
          selectedValue={moeda1}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setMoeda1(itemValue)}>
          <Picker.Item label="BRL" value="BRL" />
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="BTC" value="BTC" />
        </Picker>
        <Picker
          selectedValue={moeda2}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setMoeda2(itemValue)}>
          <Picker.Item label="BRL" value="BRL" />
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="BTC" value="BTC" />
        </Picker>
      </View>
      <View>
        {!submit && (
          <Pressable style={styles.button} onPress={converterMoedas}>
            <Text style={styles.buttonText}>Converter</Text>
          </Pressable>
        )}
      </View>

      {submit && (
        <View>
          <Text style={styles.text}>
            {moeda2}: {resultado}
          </Text>
          <Pressable style={styles.button} onPress={clear}>
            <Text style={styles.buttonText}>Limpar</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
