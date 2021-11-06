import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import api from '../../services/api';
import styles from '../../styles/styles';

export default function Form({route}) {
  const [id, setId] = useState(route.params?.id);
  const [title, setTitle] = useState(route.params?.title);
  const [description, setDescription] = useState(route.params?.description);

  const navigation = useNavigation();

  useEffect(() => {
    if (id) {
      async function getTask() {
        try {
          const response = api.get(`/tasks/${id}`);
          setTitle(response.data.title);
          setDescription(response.data.description);
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      getTask();
    }
  }, [id]);

  async function handleSubmit() {
    try {
      if (id) {
        await api.put(`/tasks/${id}`, {
          title,
          description,
        });
        await route.params?.updateTask();
      } else {
        await api.post('/tasks', {
          title,
          description,
        });
        await route.params?.updateTask();
      }
      navigation.navigate('Tasks');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      <Text style={styles.appTitle}>Editar Tarefa</Text>
      <TextInput
        style={styles.inputTitle}
        placeholder="Título"
        defaultValue={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.inputDesc}
        placeholder="Descrição"
        defaultValue={description}
        onChangeText={setDescription}
        numberOfLines={4}
        multiline={true}
      />
      <Pressable
        style={styles.addButton}
        onPress={handleSubmit}
        onLongPress={handleSubmit}>
        <Text style={styles.addButtonText}>Salvar</Text>
      </Pressable>
    </View>
  );
}
