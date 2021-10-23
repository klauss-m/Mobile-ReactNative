import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';

function App() {
  const [choice, setChoice] = useState(0);
  const [gameNum, setGameNum] = useState(0);
  const [msg, setMsg] = useState('');

  function game() {
    setGameNum(Math.floor(Math.random() * 11));
    setMsg('');
    if (choice === gameNum) {
      setMsg('Você acertou!');
    } else {
      setMsg('Você errou!');
    }
  }

  return (
    <SafeAreaView>
      <Text style={styles.textTop}>Jogo do Número Aleatório!</Text>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: 'https://static.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest/scale-to-width-down/1000?cb=20151206055532&path-prefix=en',
          }}
        />
      </View>
      <View>
        <Text style={styles.textGame}>Pense em um número de 0 à 10!</Text>
        <TextInput
          placeholder="Nº"
          style={styles.gameInput}
          value={choice}
          onChangeText={setChoice}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.btn} onPress={game}>
          <Text style={styles.btnText}>Descobrir Nº</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerResult}>
        <Text style={styles.textResult}>{gameNum}</Text>
        <Text style={styles.textResult}>{msg}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
