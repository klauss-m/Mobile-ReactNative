import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import {View, Text, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import moment from 'moment';

import api from '../../services/api';
import styles from '../../styles/styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export function Students() {
  const [students, setStudents] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStudents() {
      try {
        const response = await api.get('/students');
        setStudents(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadStudents();
  }, []);

  async function loadStudent() {
    try {
      const response = await api.get('/students');
      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/tasks/${id}`);
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function navigateToForm(
    id,
    name,
    description,
    dateOfBirth,
    age,
    enrolled,
  ) {
    navigation.navigate('Form', {
      id: id,
      name: name,
      description: description,
      dateOfBirth: dateOfBirth,
      age: age,
      enrolled: enrolled,
      updateStudent: loadStudent,
    });
  }

  async function newStudent() {
    navigation.navigate('Form', {
      updateStudent: loadStudent,
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={student => String(student.id)}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigateToForm(
                item.id,
                item.name,
                item.description,
                item.dateOfBirth,
                item.age,
                item.enrolled,
              );
            }}>
            <View style={styles.card}>
              <View
                style={
                  item.enrolled
                    ? styles.cardHeaderEnrolled
                    : styles.cardHeaderNotEnrolled
                }>
                <Text style={styles.headerInfoText}>{item.name}</Text>
                <Text style={styles.headerInfoText}>RA:{item.ra}</Text>
              </View>
              <View style={styles.cardBody}>
                <Text style={styles.cardBodyText}>
                  Data de Nascimento:{' '}
                  {moment(item.dateOfBirth).format('DD/MM/YYYY')}
                </Text>
                <Text style={styles.cardBodyText}>Idade: {item.age}</Text>
                <Text style={styles.cardBodyText}>
                  Endereço: {item.address}
                </Text>
              </View>

              <View style={styles.cardFooter}>
                <Pressable
                  onPress={() => handleDelete(item.id)}
                  style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>Excluir</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        )}
      />
      <Pressable onPress={newStudent} style={styles.button}>
        <Text style={styles.buttonText}>Novo Aluno</Text>
      </Pressable>
    </View>
  );
}
