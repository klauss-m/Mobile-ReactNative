import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';

function App() {
  let img =
    'https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/11/imc-gravidez.png';

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcImc = () => {
    // if (peso === 0 || !peso) {
    //   Alert.alert('Informe um valor correto para o peso!');
    //   return;
    // }
    // if (altura === 0 || !altura) {
    //   alert('Informe um valor correto para a altura!');
    //   return;
    // }
    const result = peso / Math.pow(altura, 2);
    setResultado(result.toFixed(1));
  };

  let nivelImc = '';
  if (resultado <= 18.5) {
    nivelImc = 'IMC baixo';
  }
  if (resultado >= 18.6 && resultado <= 24.9) {
    nivelImc = 'IMC normal';
  }
  if (resultado >= 25 && resultado <= 29.9) {
    nivelImc = 'sobrepeso';
  }
  if (resultado >= 30 && resultado <= 34.9) {
    nivelImc = 'obesidade I';
  }
  if (resultado >= 35 && resultado <= 39.9) {
    nivelImc = 'obesidade II';
  }
  if (resultado >= 40) {
    nivelImc = 'obesidade III';
  }

  return (
    <SafeAreaView>
      <Image
        source={{
          uri: img,
        }}
        style={styles.logo}
      />
      <Text style={styles.appTitle}>Cálculadora de IMC!</Text>
      <TextInput
        placeholder="Peso"
        style={styles.appInput}
        keyboardType="numeric"
        onChangeText={text => setPeso(text)}
        value={peso}
      />
      <TextInput
        placeholder="Altura"
        keyboardType="numeric"
        style={styles.appInput}
        onChangeText={text => setAltura(text)}
        value={altura}
      />
      <Button title="Cálcular" onPress={calcImc} />
      <Text style={styles.appResult}>
        O seu IMC é de {resultado} que significa que você tem {nivelImc}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: 'blue',
    flex: 1,
  },
  appTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FF0000',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  appInput: {
    margin: 10,
    borderWidth: 1,
    padding: 8,
    height: 40,
  },
  appResult: {
    fontSize: 20,
  },
});

export default App;
