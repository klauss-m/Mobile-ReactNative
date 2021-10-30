import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Pressable,
  Switch,
} from 'react-native';
import styles from './styles/styles';

function FormBanco() {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [gender, setGender] = useState('Masculino');
  const [limiteConta, setLimiteConta] = useState(0);
  const [isBrasileiro, setIsBrasileiro] = useState(true);
  const [submit, setSubmit] = useState(false);

  const toggleSwitch = () => setIsBrasileiro(previousState => !previousState);
  const handleSubmit = () => {
    setSubmit(true);
  };
  const clearForm = () => {
    setName('');
    setIdade('');
    setGender('Masculino');
    setLimiteConta(0);
    setIsBrasileiro(true);
    setSubmit(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textHeader}>Banco PBG</Text>
      </View>
      {!submit && (
        <View>
          <Text style={styles.labelText}>Nome </Text>
          <TextInput
            keyboardType="default"
            style={styles.textInput}
            placeholder="Digite o seu nome:"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.labelText}>Idade</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            placeholder="Digite sua idade:"
            value={idade}
            onChangeText={setIdade}
          />
          <Text style={styles.labelText}>Gênero</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
          <Text style={styles.labelText}>Limite da conta</Text>
          <Slider
            style={styles.sliderStyle}
            minimumValue={100}
            maximumValue={5000}
            minimumTrackTintColor="#00ff00"
            maximumTrackTintColor="#ff0000"
            thumbTintColor="#0000ff"
            step={10}
            onValueChange={setLimiteConta}
            value={limiteConta}
          />
          <Text style={styles.pickerText}>R$: {limiteConta.toFixed(1)}</Text>
          <Text style={styles.labelText}>Brasileiro?</Text>
          <Switch
            style={styles.switchStyle}
            value={isBrasileiro}
            onValueChange={toggleSwitch}
          />
        </View>
      )}
      <View>
        {!submit && (
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.textInfo}>{submit ? `Nome: ${name}` : ''}</Text>
        <Text style={styles.textInfo}>{submit ? `Idade: ${idade}` : ''}</Text>
        <Text style={styles.textInfo}>{submit ? `Gênero: ${gender}` : ''}</Text>
        <Text style={styles.textInfo}>
          {submit ? `Limite da Conta: R$${limiteConta}` : ''}
        </Text>
        <Text style={styles.textInfo}>
          {submit
            ? `Nacionalidade: ${isBrasileiro ? 'Brasileiro' : 'Estrangeiro'}`
            : ''}
        </Text>
      </View>
      {submit && (
        <View>
          <Pressable onPress={clearForm} style={styles.button}>
            <Text style={styles.buttonText}>Limpar</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}

export default FormBanco;
