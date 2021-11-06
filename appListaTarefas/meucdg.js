// import React, {useEffect, useState} from 'react';
// import {View, Text, TextInput, Pressable, FlatList} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import {openDatabase} from 'react-native-sqlite-storage';
// import styles from './styles/styles';

// const db = openDatabase({name: 'tarefas.db'});

// export default function App() {
//   const [tarefas, setTarefas] = useState([]);
//   const [tarefa, setTarefa] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const createTable = () => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, tarefa TEXT, status INTEGER)',
//         [],
//         (Sqltx, res) => {
//           console.log('Tabela criada com sucesso');
//         },
//         error => {
//           console.log('Erro ao criar tabela: ' + error);
//         },
//       );
//     });
//   };

//   const selectTarefas = () => {
//     db.transaction(txn => {
//       txn.executeSql(
//         `SELECT * FROM tarefas ORDER BY id DESC`,
//         [],
//         (sqlTxn, res) => {
//           console.log('Tarefas lidas com sucesso!');
//           let len = res.rows.length;

//           if (len > 0) {
//             let results = [];
//             for (let i = 0; i < len; i++) {
//               let item = res.rows.item(i);
//               results.push({id: item.id, nome: item.nome});
//             }

//             setTarefas(results);
//           }
//         },
//         error => {
//           console.log('Erro ao obter Tarefas ' + error.message);
//         },
//       );
//     });
//   };

//   useEffect(() => {
//     createTable();
//     selectTarefas();
//   }, []);

//   const insertTarefa = () => {
//     db.transaction(tx => {
//       tx.executeSql('INSERT INTO tarefas (tarefa, status) VALUES (?, ?)', [
//         tarefa,
//         isChecked ? 1 : 0,
//       ]);
//     });
//   };

//   const updateTarefa = (id, status) => {
//     db.transaction(tx => {
//       tx.executeSql('UPDATE tarefas SET status = ? WHERE id = ?', [status, id]);
//     });
//   };

//   const deleteTarefa = id => {
//     db.transaction(tx => {
//       tx.executeSql('DELETE FROM tarefas WHERE id = ?', [id]);
//     });
//   };

//   const renderItem = ({item}) => {
//     return (
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <CheckBox
//           value={item.status === 1}
//           onValueChange={() => updateTarefa(item.id, item.status === 1 ? 0 : 1)}
//         />
//         <Text>{item.tarefa}</Text>
//         <Pressable
//           style={styles.buttonDelete}
//           onPress={() => deleteTarefa(item.id)}>
//           <Text>X</Text>
//         </Pressable>
//       </View>
//     );
//   };

//   return (
//     <View style={{flex: 1, padding: 20}}>
//       <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         onChangeText={text => setTarefa(text)}
//         value={tarefa}
//       />
//       <CheckBox
//         value={isChecked}
//         onValueChange={() => setIsChecked(!isChecked)}
//       />
//       <Pressable style={styles.buttonSave} onPress={() => insertTarefa()}>
//         <Text style={styles.buttonSaveText}>Salvar</Text>
//       </Pressable>
//       <FlatList
//         data={tarefas}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// }
