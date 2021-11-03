import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from './styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Quotes from './Frases';

export default function App() {
  const [quote, setQuote] = useState('');
  const [dia, setDia] = useState(true);
  const [pequeno, setPequeno] = useState(false);

  const SearchQuote = async key => {
    const value = await AsyncStorage.getItem(key);
    setQuote(value);
  };

  SearchQuote(Math.floor(Math.random() * 7 + 1).toString());

  const textChange = () => {
    if (dia && !pequeno) {
      return styles.textQuote;
    }
    if (!dia && !pequeno) {
      return styles.textQuoteDarkMode;
    }
    if (dia && pequeno) {
      return styles.textQuoteSmall;
    }
    if (!dia && pequeno) {
      return styles.textQuoteSmallDarkMode;
    }
  };

  return (
    <View style={dia ? styles.container : styles.containerDarkMode}>
      <View>
        <Text style={dia ? styles.title : styles.titleDarkMode}>Frases</Text>
      </View>
      <View style={styles.containerSwitch}>
        <Text style={dia ? styles.labelSwitch : styles.labelSwitchDarkMode}>
          Dia
        </Text>
        <Switch value={dia} onValueChange={() => setDia(!dia)} />
        <Text style={dia ? styles.labelSwitch : styles.labelSwitchDarkMode}>
          Pequeno
        </Text>
        <Switch value={pequeno} onValueChange={() => setPequeno(!pequeno)} />
      </View>
      <View style={dia ? styles.containerQuote : styles.containerQuoteDarkMode}>
        <Text style={textChange()}>{quote}</Text>
      </View>
    </View>
  );
}
