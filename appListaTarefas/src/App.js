import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, TextInput, Button, FlatList} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
import CheckBox from '@react-native-community/checkbox';

const db = openDatabase({
  name: 'tarefas',
});

const App = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20), status BOOLEAN)',
        [],
        (sqlTxn, res) => {
          console.log('Tabela criada com sucesso!');
        },
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert('Escreva uma tarefa a ser adicionada!');
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO tarefas (nome) VALUES (?)',
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          selectTarefas();
          setTarefa('');
        },
        error => {
          console.log('Erro ao inserir uma Tarefa ' + error.message);
        },
      );
    });
  };

  const selectTarefas = () => {
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
              results.push({id: item.id, nome: item.nome, status: item.status});
            }

            setTarefas(results);
          }
        },
        error => {
          console.log('Erro ao obter Tarefas ' + error.message);
        },
      );
    });
  };

  const updateTarefa = (id, status) => {
    db.transaction(txn => {
      txn.executeSql(
        'UPDATE tarefas SET status = ? WHERE id = ?',
        [status, id],
        (sqlTxn, res) => {
          console.log('Tarefa atualizada com sucesso!');
          selectTarefas();
        },
        error => {
          console.log('Erro ao atualizar Tarefa ' + error.message);
        },
      );
    });
  };

  const deleteTarefa = id => {
    db.transaction(txn => {
      txn.executeSql(
        'DELETE FROM tarefas WHERE id = ?',
        [id],
        (sqlTxn, res) => {
          console.log('Tarefa excluída com sucesso!');
        },
        error => {
          console.log('Erro ao excluir Tarefa ' + error.message);
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
        <Button
          title="Excluir"
          color="#f00"
          onPress={() => {
            deleteTarefa(item.id);
          }}
        />
      </View>
    );
  };

  useEffect(() => {
    createTables();
    deleteTarefa();
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="#222" />

      <TextInput
        placeholder="Digite sua tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{marginHorizontal: 8}}
      />

      <Button title="Salvar" onPress={incluirTarefa} />

      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        key={item => item.id}
      />
    </View>
  );
};

export default App;
