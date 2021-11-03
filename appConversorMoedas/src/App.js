import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-community/picker';
import styles from './styles/styles';
import moedas from './utils/data';

export default function App() {
  const [valor, setValor] = useState(0);
  const [moeda1, setMoeda1] = useState('BRL');
  const [moeda2, setMoeda2] = useState('USD');
  const [resultado, setResultado] = useState(0);
  const [submit, setSubmit] = useState(false);

  function converterMoeda() {
    if (valor === '') {
      alert('Digite um valor');
    } else if (moeda1 === moeda2) {
      alert('Selecione duas moedas diferentes');
    } else {
      if (moeda1 === 'BRL' && moeda2 === 'USD') {
        setResultado(valor * 0.18);
      } else if (moeda1 === 'BRL' && moeda2 === 'EUR') {
        setResultado(valor * 0.15);
      } else if (moeda1 === 'USD' && moeda2 === 'BRL') {
        setResultado(valor * 5.68);
      } else if (moeda1 === 'USD' && moeda2 === 'EUR') {
        setResultado(valor * 0.86);
      } else if (moeda1 === 'EUR' && moeda2 === 'BRL') {
        setResultado(valor * 6.59);
      } else if (moeda1 === 'EUR' && moeda2 === 'USD') {
        setResultado(valor * 1.16);
      }
      setSubmit(true);
    }
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
          value={valor}
          onChangeText={setValor}
        />
        <Picker
          style={styles.picker}
          selectedValue={moeda1}
          onValueChange={(itemValue, itemIndex) => setMoeda1(itemValue)}>
          {moedas.map(moeda => (
            <Picker.Item
              key={moeda.id}
              label={moeda.sigla}
              value={moeda.sigla}
            />
          ))}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={moeda2}
          onValueChange={(itemValue, itemIndex) => setMoeda2(itemValue)}>
          {moedas.map(moeda => (
            <Picker.Item
              key={moeda.id}
              label={moeda.sigla}
              value={moeda.sigla}
            />
          ))}
        </Picker>
      </View>
      <View>
        {!submit && (
          <Pressable style={styles.button} onPress={converterMoeda}>
            <Text style={styles.buttonText}>Converter</Text>
          </Pressable>
        )}
      </View>

      {submit && (
        <View>
          <Text style={styles.text}>
            {moeda2}: {resultado.toFixed(2)}
          </Text>
          <Pressable style={styles.button} onPress={clear}>
            <Text style={styles.buttonText}>Limpar</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
