import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import moment from 'moment';
import api from '../../services/api';
import styles from '../../styles/styles';
import CheckBox from '@react-native-community/checkbox';

export function Form({route}) {
  const [id, setId] = useState(route.params?.id);
  const [name, setName] = useState(route.params?.name);
  const [ra, setRa] = useState(route.params?.ra);
  const [dateOfBirth, setDateOfBirth] = useState(route.params?.dateOfBirth);
  const [age, setAge] = useState(route.params?.age);
  const [address, setAddress] = useState(route.params?.address);
  const [enrolled, setEnrolled] = useState(route.params?.enrolled);

  useEffect(() => {
    if (id) {
      async function getStudent() {
        try {
          const response = await api.get(`/students/${id}`);
          setName(response.data.name);
          setRa(response.data.ra);
          setDateOfBirth(response.data.dateOfBirth);
          setAge(response.data.age);
          setAddress(response.data.address);
        } catch (error) {
          console.log(error);
        }
      }
      getStudent();
    }
  }, [id]);

  async function handleSubmit() {
    try {
      if (id) {
        await api.put(`/students/${id}`, {
          name,
          ra,
          dateOfBirth,
          age,
          address,
          enrolled,
        });
        await route.params?.updateStudent();
      } else {
        await api.post('/students', {
          name,
          ra,
          dateOfBirth,
          age,
          address,
          enrolled,
        });
        await route.params?.updateStudent();
        console.log(dateOfBirth);
      }
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }
  console.log(dateOfBirth);

  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.title}>{id ? 'Editar' : 'Cadastrar'} Aluno</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        defaultValue={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Matriculado</Text>
      <CheckBox
        value={enrolled}
        onValueChange={setEnrolled}
        tintColors={{true: '#00ff00', false: '#ff0000'}}
      />
      <Text style={styles.label}>RA</Text>
      <TextInput
        style={styles.input}
        placeholder="RA"
        defaultValue={ra}
        onChangeText={setRa}
      />
      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        defaultValue={moment(dateOfBirth).format('DD/MM/YYYY')}
        onChangeText={moment(setDateOfBirth).toISOString()}
      />
      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        defaultValue={age ? age.toString() : age}
        onChangeText={text => setAge(parseInt(text, 10))}
      />
      <Text style={styles.label}>Endereço</Text>
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        defaultValue={address}
        onChangeText={setAddress}
      />

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}
