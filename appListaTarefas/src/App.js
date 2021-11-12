import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles/styles';

const db = openDatabase({
  name: 'tasks',
});

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  //eslint-disable-next-line
  useEffect(async () => {
    await createTables();
    await selectTasks();
  }, []);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20)), completed BOOL`,
        [],
        (sqlTxn, res) => {
          console.log('Tabela criada com sucesso!');
        },
        error => {
          console.log('erro ao criar tabela ' + error.message);
        },
      );
    });
  };

  const insertTask = () => {
    if (!task) {
      alert('Escreva uma tarefa');
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [task],
        (sqlTxn, res) => {
          console.log(`${task} Tarefa adicionada com sucesso!`);
          selectTasks();
          setTask('');
        },
        error => {
          console.log('Erro ao inserir uma Tarefa ' + error.message);
        },
      );
    });
  };

  const selectTasks = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('Tarefas lidas com sucesso!');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({id: item.id, nome: item.nome});
            }

            setTasks(results);
          }
        },
        error => {
          console.log('Erro ao obter Tarefas ' + error.message);
        },
      );
    });
  };

  const completeTask = (id, completed) => {
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE tarefas SET completed = ? WHERE id = ?`,
        [completed, id],
        (sqlTxn, res) => {
          console.log('Tarefa atualizada com sucesso!');
          selectTasks();
        },
        error => {
          console.log('Erro ao atualizar Tarefa ' + error.message);
        },
      );
    });
  };

  const deleteTask = id => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          console.log('Tarefa deletada com sucesso!');
          selectTasks();
        },
        error => {
          console.log('erro ao deletar tarefa ' + error.message);
        },
      );
    });
  };

  const renderTarefa = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}>
        <Text style={{marginRight: 9}}>{item.id}</Text>
        <Text>{item.nome}</Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 50,
            top: 10,
          }}
          onPress={() => deleteTask(item.id)}>
          <Text style={styles.buttonDeleteText}>X</Text>
        </TouchableOpacity>

        <CheckBox
          style={{
            position: 'absolute',
            right: 15,
            top: 10,
          }}
          value={item.completed}
          onValueChange={() => completeTask(item.id, !item.completed)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222" />
      <Text style={styles.title}>Tarefas</Text>
      <TextInput
        placeholder="Informe uma tarefa"
        value={task}
        onChangeText={setTask}
        style={styles.text}
      />

      <TouchableOpacity onPress={insertTask} style={styles.buttonSave}>
        <Text style={styles.buttonSaveText}>+</Text>
      </TouchableOpacity>

      <FlatList data={tasks} renderItem={renderTarefa} key={t => t.id} />
    </View>
  );
};

export default App;
