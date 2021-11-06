import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import {View, Text, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import api from '../../services/api';
import styles from '../../styles/styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadTasks();
  }, []);

  async function loadTask() {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function navigateToForm(id, title, description) {
    navigation.navigate('Form', {
      id: id,
      title: title,
      description: description,
      updateTask: loadTask,
    });
  }

  async function newTask() {
    navigation.navigate('Form', {
      updateTask: loadTask,
    });
  }

  async function handleFinished(id) {
    try {
      await api.put(`/tasks/${id}`, {
        finished: true,
      });
      setTasks(
        tasks.map(task => (task.id === id ? {...task, finished: true} : task)),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={task => String(task.id)}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigateToForm(item.id, item.title, item.description);
            }}>
            <View style={styles.card}>
              <View
                style={
                  item.finished
                    ? styles.cardHeaderPending
                    : styles.cardHeaderFinished
                }>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
              <View style={styles.cardFooter}>
                <Pressable
                  onPress={() => handleDelete(item.id)}
                  style={styles.cardButton}>
                  <Text style={styles.cardButtonDelText}>Excluir</Text>
                </Pressable>
                {!item.finished && (
                  <Pressable
                    onPress={() => handleFinished(item.id)}
                    style={styles.cardButton}>
                    <Text style={styles.cardButtonFinText}>Finalizar</Text>
                  </Pressable>
                )}
              </View>
            </View>
          </Pressable>
        )}
      />
      <Pressable onPress={newTask} style={styles.newTaskButton}>
        <Text style={styles.addButtonText}>Nova Tarefa</Text>
      </Pressable>
    </View>
  );
}
